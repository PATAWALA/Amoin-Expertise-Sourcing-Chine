/* ==========================================================================
   AMOIN — EXPERTISE & SOURCING CHINE
   Source unique de vérité pour tout le contenu du site.
   ========================================================================== */

export const BRAND = {
  name: "Amoin",
  fullName: "Amoin — Expertise & Sourcing Chine",
  tagline: "Votre pont direct Afrique — Chine",
  whatsappNumber: "+225 07 00 00 00 00",
  whatsappLink: "https://wa.me/2250700000000",
  tiktokLink: "https://www.tiktok.com/@amoin.chine",
  email: "contact@amoin-chine.com",
  locations: "Abidjan 🇨🇮 — Guangzhou 🇨🇳",
} as const;

/* -------------------------------------------------------------------------- */
/*  1. OFFERS — Prestations de service                                        */
/* -------------------------------------------------------------------------- */

export type OfferId = "sourcing" | "tourisme" | "investissement";

export interface Offer {
  id: OfferId;
  icon: "package" | "plane" | "factory";
  badge?: string;
  title: string;
  subtitle: string;
  price: number | null;
  priceLabel: string;
  priceNote: string;
  features: string[];
  highlight: boolean;
  ctaLabel: string;
}

export const OFFERS: Offer[] = [
  {
    id: "sourcing",
    icon: "package",
    badge: "Le plus demandé",
    title: "Sourcing & Achat de Marchandises",
    subtitle:
      "Vous savez quoi acheter, nous savons où et à quel prix l'obtenir.",
    price: 150_000,
    priceLabel: "150 000 FCFA",
    priceNote: "Forfait tout compris — paiement en 2 fois possible",
    features: [
      "Recherche et vérification de 3 usines certifiées",
      "Négociation directe au prix usine (baisse moyenne : 18 %)",
      "Suivi complet de l'expédition & du fret jusqu'à votre ville",
    ],
    highlight: false,
    ctaLabel: "Sélectionner cette formule",
  },
  {
    id: "tourisme",
    icon: "plane",
    badge: "Clé en main",
    title: "Pack Tourisme & Séjour d'Affaires",
    subtitle:
      "Votre premier voyage en Chine sans stress, sans barrière de langue.",
    price: 350_000,
    priceLabel: "350 000 FCFA",
    priceNote: "Hors billet d'avion international",
    features: [
      "Accompagnement complet pour l'obtention du visa",
      "Réservation dans un hôtel partenaire (Guangzhou / Shenzhen)",
      "Guide & interprète bilingue français/mandarin sur place",
    ],
    highlight: true,
    ctaLabel: "Sélectionner cette formule",
  },
  {
    id: "investissement",
    icon: "factory",
    badge: "Sur Devis",
    title: "Investissement & Projets Industriels",
    subtitle:
      "De l'étude de faisabilité à l'usine qui tourne, nous pilotons tout.",
    price: null,
    priceLabel: "Sur Devis",
    priceNote: "À partir de 5 000 000 FCFA",
    features: [
      "Étude de faisabilité technique & financière complète",
      "Import de machines industrielles et lignes de production",
      "Dédouanement complet et mise en conformité locale",
    ],
    highlight: false,
    ctaLabel: "Demander un devis",
  },
];

/* -------------------------------------------------------------------------- */
/*  2. DIGITAL_PRODUCTS — Produits à télécharger / sessions                   */
/* -------------------------------------------------------------------------- */

export interface DigitalProduct {
  id: "coaching" | "repertoire";
  icon: "coaching" | "book";
  title: string;
  description: string;
  price: number;
  priceLabel: string;
  format: string;
  ctaLabel: string;
}

export const DIGITAL_PRODUCTS: DigitalProduct[] = [
  {
    id: "coaching",
    icon: "coaching",
    title: "Coaching 1-sur-1",
    description:
      "1 heure en visio avec Amoin pour structurer votre projet d'import, valider vos marges et éviter les pièges classiques.",
    price: 50_000,
    priceLabel: "50 000 FCFA",
    format: "Session live · 60 min · enregistrement inclus",
    ctaLabel: "Réserver ma session",
  },
  {
    id: "repertoire",
    icon: "book",
    title: "Répertoire Usines Certifiées Chine 2026",
    description:
      "Plus de 200 fabricants vérifiés par catégorie (électronique, textile, cosmétique, mobilier…), avec contacts directs et minimums de commande.",
    price: 25_000,
    priceLabel: "25 000 FCFA",
    format: "PDF + tableur filtrable · mise à jour annuelle",
    ctaLabel: "Obtenir le répertoire",
  },
];

/* -------------------------------------------------------------------------- */
/*  3. STATS — Preuves sociales                                               */
/* -------------------------------------------------------------------------- */

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "+100", label: "projets accompagnés" },
  { value: "98%", label: "de satisfaction client" },
  { value: "24h", label: "délai moyen d'analyse" },
];

/* -------------------------------------------------------------------------- */
/*  4. PROCESS — Timeline en 3 étapes                                         */
/* -------------------------------------------------------------------------- */

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Choix de l'offre",
    description:
      "Vous sélectionnez la formule adaptée à votre besoin ou vous nous écrivez directement sur WhatsApp.",
    detail: "2 minutes",
  },
  {
    step: "02",
    title: "Étude de dossier",
    description:
      "Nous analysons votre projet, vérifions la faisabilité et vous transmettons un plan d'action chiffré.",
    detail: "Sous 24h",
  },
  {
    step: "03",
    title: "Exécution Chine",
    description:
      "Nos équipes sur place négocient, contrôlent la qualité, expédient et vous tiennent informé à chaque étape.",
    detail: "Suivi en temps réel",
  },
];

/* -------------------------------------------------------------------------- */
/*  5. FORM OPTIONS — LeadForm                                                */
/* -------------------------------------------------------------------------- */

export const SERVICE_OPTIONS = [
  { value: "sourcing", label: "Sourcing & Achat de Marchandises" },
  { value: "tourisme", label: "Pack Tourisme & Séjour d'Affaires" },
  { value: "investissement", label: "Investissement & Projets Industriels" },
  { value: "coaching", label: "Coaching 1-sur-1" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "lt-1m", label: "Moins de 1 000 000 FCFA" },
  { value: "1m-5m", label: "Entre 1M et 5M FCFA" },
  { value: "gt-5m", label: "Plus de 5 000 000 FCFA" },
] as const;

export type ServiceValue = (typeof SERVICE_OPTIONS)[number]["value"];
export type BudgetValue = (typeof BUDGET_OPTIONS)[number]["value"];

/* -------------------------------------------------------------------------- */
/*  6. NAVIGATION                                                             */
/* -------------------------------------------------------------------------- */

export const NAV_LINKS = [
  { label: "Offres", href: "#offres" },
  { label: "Processus", href: "#processus" },
  { label: "Ressources", href: "#ressources" },
  { label: "Contact", href: "#contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*  7. UTILITAIRE                                                             */
/* -------------------------------------------------------------------------- */

export const formatFCFA = (amount: number): string =>
  `${new Intl.NumberFormat("fr-FR").format(amount)} FCFA`;