"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Check,
  Factory,
  Package,
  Plane,
  Video,
  type LucideIcon,
} from "lucide-react";
import { DIGITAL_PRODUCTS, OFFERS, type Offer } from "@/data/content";

const ICONS: Record<string, LucideIcon> = {
  package: Package,
  plane: Plane,
  factory: Factory,
  coaching: Video,
  book: BookOpen,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* -------------------------------------------------------------------------- */
/*  CARTE OFFRE                                                               */
/* -------------------------------------------------------------------------- */
function OfferCard({ offer, index }: { offer: Offer; index: number }) {
  const Icon = ICONS[offer.icon] ?? Package;

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl p-6 transition-all duration-400 sm:p-7 ${
        offer.highlight
          ? "border border-gold-500/35 bg-gradient-to-b from-navy-800/95 to-navy-900 shadow-glow lg:-translate-y-3"
          : "border border-gold-500/15 bg-navy-800/50 hover:border-gold-500/30 hover:bg-navy-800/80"
      }`}
    >
      {/* Liseré supérieur */}
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${
          offer.highlight ? "via-gold-500" : "via-gold-500/35"
        }`}
      />

      {/* Halo au survol */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gold-500/[0.09] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Badge */}
      {offer.badge && (
        <span
          className={`absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
            offer.highlight
              ? "bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900"
              : "border border-gold-500/25 bg-gold-500/10 text-gold-400"
          }`}
        >
          {offer.badge}
        </span>
      )}

      {/* Icône */}
      <span
        className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${
          offer.highlight
            ? "bg-gradient-to-br from-gold-500 to-gold-600 text-navy-900 shadow-glow"
            : "border border-gold-500/20 bg-gold-500/10 text-gold-500"
        }`}
      >
        <Icon size={22} strokeWidth={2} />
      </span>

      {/* Titre */}
      <h3 className="text-[19px] font-extrabold leading-snug tracking-tight text-white sm:text-xl">
        {offer.title}
      </h3>
      <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-400">
        {offer.subtitle}
      </p>

      {/* Prix */}
      <div className="mt-6 border-y border-navy-700/60 py-5">
        <div className="flex items-baseline gap-2">
          <span
            className={`font-extrabold tracking-tight ${
              offer.highlight
                ? "text-gradient-gold text-[2rem] sm:text-[2.25rem]"
                : "text-[2rem] text-white sm:text-[2.25rem]"
            }`}
          >
            {offer.priceLabel}
          </span>
        </div>
        <p className="mt-1.5 text-[11.5px] font-medium text-slate-500">
          {offer.priceNote}
        </p>
      </div>

      {/* Features */}
      <ul className="mt-6 flex-1 space-y-3.5">
        {offer.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                offer.highlight
                  ? "bg-gold-500/20 text-gold-400"
                  : "bg-navy-700/70 text-gold-500"
              }`}
            >
              <Check size={11} strokeWidth={3.5} />
            </span>
            <span className="text-[13.5px] leading-relaxed text-slate-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className={`group/btn mt-7 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-[14px] font-bold transition-all duration-300 active:scale-[0.97] ${
          offer.highlight
            ? "bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 shadow-glow hover:shadow-glow-lg hover:brightness-110"
            : "border border-slate-600/60 bg-navy-900/60 text-slate-100 hover:border-gold-500/45 hover:text-gold-400"
        }`}
      >
        {offer.ctaLabel}
        <ArrowRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover/btn:translate-x-1"
        />
      </a>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION PRINCIPALE                                                        */
/* -------------------------------------------------------------------------- */
export default function ServiceCards() {
  return (
    <section id="offres" className="relative scroll-mt-24 px-5 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-gold-500/20 bg-gold-500/[0.07] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-500">
            Nos formules
          </span>
          <h2 className="mt-5 text-[1.9rem] font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Trois façons de travailler avec{" "}
            <span className="text-gradient-gold">Amoin</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            Que vous importiez votre premier carton ou montiez une ligne de
            production, il existe une formule calibrée pour votre étape.
          </p>
        </motion.div>

        {/* Grille d'offres */}
        <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-7">
          {OFFERS.map((offer, i) => (
            <OfferCard key={offer.id} offer={offer} index={i} />
          ))}
        </div>

        {/* ================= PRODUITS DIGITAUX ================= */}
        <div id="ressources" className="mt-24 scroll-mt-24 sm:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
          >
            <div>
              <span className="inline-block rounded-full border border-crimson-600/25 bg-crimson-600/[0.08] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-crimson-500">
                Ressources
              </span>
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Apprenez &amp; équipez-vous
              </h3>
            </div>
            <p className="max-w-md text-[14px] leading-relaxed text-slate-400">
              Les outils que j'utilise moi-même sur le terrain, accessibles
              immédiatement.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {DIGITAL_PRODUCTS.map((product, i) => {
              const Icon = ICONS[product.icon] ?? BookOpen;
              return (
                <motion.article
                  key={product.id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className="group flex flex-col gap-5 rounded-3xl border border-gold-500/15 bg-navy-800/50 p-6 transition-all duration-300 hover:border-gold-500/30 hover:bg-navy-800/80 sm:flex-row sm:items-center sm:gap-6 sm:p-7"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-gold-500/20 bg-gold-500/10 text-gold-500 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={24} strokeWidth={2} />
                  </span>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="text-[17px] font-bold text-white">
                        {product.title}
                      </h4>
                      <span className="rounded-lg bg-gold-500/12 px-2.5 py-1 text-[12px] font-extrabold text-gold-400">
                        {product.priceLabel}
                      </span>
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-400">
                      {product.description}
                    </p>
                    <p className="mt-3 text-[11px] font-medium uppercase tracking-wider text-slate-500">
                      {product.format}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    aria-label={product.ctaLabel}
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold-500/25 bg-navy-900/60 text-gold-500 transition-all duration-300 hover:bg-gold-500 hover:text-navy-900 active:scale-95"
                  >
                    <ArrowRight size={18} strokeWidth={2.4} />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}