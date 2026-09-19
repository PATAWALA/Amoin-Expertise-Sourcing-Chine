import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Amoin — Expertise & Sourcing Chine | Achats, Voyages & Investissements",
  description:
    "Votre pont direct Afrique–Chine. Sourcing et achat de marchandises, séjours d'affaires à Guangzhou & Shenzhen, investissement industriel et dédouanement. +100 projets accompagnés, 98% de satisfaction.",
  keywords: [
    "sourcing Chine",
    "importer de Chine",
    "Guangzhou",
    "Shenzhen",
    "fret Chine Afrique",
    "investissement industriel Chine",
    "Amoin",
  ],
  openGraph: {
    title: "Amoin — Expertise & Sourcing Chine",
    description:
      "Sécurisez vos achats, voyages et investissements en Chine. Analyse de dossier en 24h.",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}