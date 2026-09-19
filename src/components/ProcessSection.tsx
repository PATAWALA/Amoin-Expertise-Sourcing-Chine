"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/content";

export default function ProcessSection() {
  return (
    <section
      id="processus"
      className="relative scroll-mt-24 overflow-hidden border-y border-gold-500/10 bg-navy-950/60 px-5 py-20 sm:py-28 lg:px-8"
    >
      {/* Halo décoratif */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[38rem] -translate-x-1/2 rounded-full bg-gold-500/[0.07] blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-gold-500/20 bg-gold-500/[0.07] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-500">
            Comment ça marche
          </span>
          <h2 className="mt-5 text-[1.9rem] font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            3 étapes, <span className="text-gradient-gold">zéro improvisation</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            Un process rodé sur plus de 100 projets. Vous savez toujours où vous
            en êtes.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Ligne horizontale (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-transparent via-gold-500/35 to-transparent lg:block"
          />
          {/* Ligne verticale (mobile) */}
          <div
            aria-hidden
            className="absolute bottom-6 left-[26px] top-6 w-px bg-gradient-to-b from-gold-500/40 via-gold-500/20 to-transparent lg:hidden"
          />

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.13,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex gap-5 lg:flex-col lg:gap-0"
              >
                {/* Pastille numérotée */}
                <div className="relative z-10 shrink-0">
                  <span className="grid h-[52px] w-[52px] place-items-center rounded-2xl border border-gold-500/30 bg-navy-900 text-[15px] font-extrabold text-gold-500 shadow-glow">
                    {step.step}
                  </span>
                </div>

                {/* Contenu */}
                <div className="flex-1 pb-2 lg:mt-7 lg:pb-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold tracking-tight text-white">
                      {step.title}
                    </h3>
                    <span className="rounded-md border border-gold-500/20 bg-gold-500/[0.08] px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-gold-400">
                      {step.detail}
                    </span>
                  </div>
                  <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}