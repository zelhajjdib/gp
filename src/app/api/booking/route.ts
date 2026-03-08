export const dynamic = "force-static";

import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validations";

// Simple in-memory rate limiter (resets on restart — replace with Redis for production)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

function sanitizeString(str: string): string {
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(req: NextRequest) {
  // CORS: only allow same origin
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host && !origin.includes(host)) {
    return NextResponse.json(
      { message: "Requête non autorisée" },
      { status: 403 }
    );
  }

  // Rate limiting
  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { message: "Trop de tentatives. Réessayez dans quelques minutes." },
      { status: 429 }
    );
  }

  // Parse body safely
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { message: "Corps de la requête invalide" },
      { status: 400 }
    );
  }

  // Validate with Zod
  const result = bookingSchema.safeParse(body);
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return NextResponse.json(
      { message: "Données invalides", errors },
      { status: 422 }
    );
  }

  const data = result.data;

  // Sanitize string fields before processing
  const safeData = {
    service: data.service,
    date: data.date,
    time: data.time,
    firstName: sanitizeString(data.firstName),
    lastName: sanitizeString(data.lastName),
    email: sanitizeString(data.email),
    phone: sanitizeString(data.phone),
    vehicleBrand: sanitizeString(data.vehicleBrand),
    message: sanitizeString(data.message ?? ""),
  };

  // TODO: Send confirmation email via Resend (https://resend.com)
  // Install: npm install resend
  // Then:
  //   import { Resend } from 'resend';
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: 'GP Detail <noreply@votredomaine.com>',
  //     to: process.env.CONTACT_EMAIL!,
  //     subject: `Nouvelle réservation — ${safeData.firstName} ${safeData.lastName}`,
  //     html: `...`,
  //   });

  // Log in non-production environments for debugging
  if (process.env.NODE_ENV !== "production") {
    console.info("[Booking] New reservation:", {
      ...safeData,
      timestamp: new Date().toISOString(),
    });
  }

  return NextResponse.json(
    { message: "Réservation reçue avec succès" },
    { status: 200 }
  );
}

// Reject all other HTTP methods
export async function GET() {
  return NextResponse.json({ message: "Méthode non autorisée" }, { status: 405 });
}
