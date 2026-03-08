import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const barlow = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GP Detail — Le detail qui fait la diff",
    template: "%s | GP Detail",
  },
  description:
    "GP Detail — Service de nettoyage et detailing automobile premium. Lavage extérieur, intérieur, polish, céramique. Prenez rendez-vous en ligne.",
  keywords: [
    "nettoyage voiture",
    "detailing automobile",
    "lavage auto",
    "polish voiture",
    "céramique auto",
    "GP Detail",
  ],
  authors: [{ name: "GP Detail" }],
  creator: "GP Detail",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "GP Detail — Le detail qui fait la diff",
    description:
      "Service de nettoyage et detailing automobile premium. Prenez rendez-vous en ligne.",
    siteName: "GP Detail",
  },
  twitter: {
    card: "summary_large_image",
    title: "GP Detail — Le detail qui fait la diff",
    description: "Service de nettoyage et detailing automobile premium.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${barlow.variable} ${inter.variable}`}>
      <body className="antialiased bg-gp-black text-gp-white">
        {children}
      </body>
    </html>
  );
}
