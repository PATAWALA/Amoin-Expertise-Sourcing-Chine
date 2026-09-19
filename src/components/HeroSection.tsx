"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { STATS } from "@/data/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-20 sm:pt-32 lg:px-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-7xl"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* ============ COLONNE GAUCHE ============ */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div variants={item} className="mb-7 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/[0.07] px-4 py-2 text-[12.5px] font-semibold tracking-wide text-gold-400 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-500 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
                </span>
                Votre pont direct Afrique — Chine 🇨🇳
              </span>
            </motion.div>

            {/* Titre */}
            <motion.h1
              variants={item}
              className="text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.65rem]"
            >
              Sécurisez vos{" "}
              <span className="text-gradient-gold">Achats, Voyages</span> et{" "}
              <span className="text-gradient-gold">Investissements</span> en Chine
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              variants={item}
              className="mx-auto mt-6 max-w-xl text-[15.5px] leading-relaxed text-slate-400 sm:text-lg lg:mx-0"
            >
              Vous nous découvrez sur TikTok, vous repartez avec une usine
              vérifiée, un prix négocié et un conteneur en route.{" "}
              <span className="font-semibold text-slate-200">
                Analyse de votre dossier en 24h.
              </span>{" "}
              Aucun intermédiaire, aucune mauvaise surprise.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href="#offres"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 px-7 py-4 text-[15px] font-bold text-navy-900 shadow-glow transition-all duration-300 hover:shadow-glow-lg hover:brightness-110 active:scale-[0.97]"
              >
                Voir les offres
                <ArrowRight
                  size={18}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-slate-600/60 bg-navy-800/40 px-7 py-4 text-[15px] font-bold text-slate-100 backdrop-blur-sm transition-all duration-300 hover:border-gold-500/45 hover:bg-navy-800 hover:text-white active:scale-[0.97]"
              >
                <CalendarCheck size={18} strokeWidth={2.2} className="text-gold-500" />
                Réserver un appel
              </a>
            </motion.div>

            {/* Micro-réassurance */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-slate-500 lg:justify-start"
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={15} className="text-gold-500" />
                Usines vérifiées sur place
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-gold-500" />
                Équipe basée à Guangzhou
              </span>
            </motion.div>
          </div>

          {/* ============ COLONNE DROITE — CARTE STATS ============ */}
          <motion.div variants={item} className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Halo lumineux */}
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-full bg-gold-500/20 blur-[90px]"
            />

            <div className="relative overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-b from-navy-800/90 to-navy-900/95 p-6 shadow-card backdrop-blur-xl sm:p-8">
              {/* Liseré supérieur */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-500/12 text-gold-500">
                  <Sparkles size={18} />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-white">
                    Ce que disent les chiffres
                  </p>
                  <p className="text-[11.5px] text-slate-500">
                    Mise à jour — Exercice 2026
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-navy-700/40 sm:grid-cols-3">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-navy-800/80 px-4 py-6 text-center sm:py-7"
                  >
                    <p className="text-3xl font-extrabold tracking-tight text-gradient-gold sm:text-[2rem]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[11.5px] font-medium leading-snug text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tag Chine */}
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-crimson-600/20 bg-crimson-600/[0.07] px-4 py-3">
                <span className="text-[12px] font-semibold text-slate-300">
                  Guangzhou · Shenzhen · Yiwu
                </span>
                <span className="rounded-md bg-crimson-600 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Sur place
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}