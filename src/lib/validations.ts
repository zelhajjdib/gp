import { z } from "zod";

export const SERVICE_IDS = ["ext", "int", "full", "polish", "premium"] as const;

export const bookingSchema = z.object({
  service: z.enum(SERVICE_IDS, { message: "Service invalide" }),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Format de date invalide")
    .refine((d) => {
      const date = new Date(d);
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      return date >= now;
    }, "La date ne peut pas être dans le passé"),
  time: z
    .string()
    .regex(/^\d{2}:\d{2}$/, "Format d'heure invalide")
    .refine((t) => {
      const [h, m] = t.split(":").map(Number);
      return h >= 8 && h < 18 && (m === 0 || m === 30);
    }, "Créneau horaire invalide"),
  firstName: z
    .string()
    .min(2, "Prénom trop court")
    .max(50, "Prénom trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s\-']+$/, "Prénom invalide"),
  lastName: z
    .string()
    .min(2, "Nom trop court")
    .max(50, "Nom trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s\-']+$/, "Nom invalide"),
  email: z.email("Email invalide").max(100, "Email trop long"),
  phone: z
    .string()
    .regex(/^(\+33|0)[1-9](\d{8})$/, "Numéro de téléphone invalide"),
  vehicleBrand: z
    .string()
    .min(2, "Marque trop courte")
    .max(50, "Marque trop longue")
    .regex(/^[a-zA-ZÀ-ÿ0-9\s\-]+$/, "Marque invalide"),
  message: z
    .string()
    .max(500, "Message trop long")
    .optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
