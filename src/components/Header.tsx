"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "border-b border-gold-500/15 bg-navy-900/85 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 lg:px-8">
          {/* ---------- LOGO ---------- */}
          <a href="#top" onClick={close} className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 text-base font-black text-navy-900 shadow-glow transition-transform duration-300 group-hover:scale-105">
              A
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-extrabold tracking-tight text-white">
                Amoin<span className="text-gold-500">.</span>
              </span>
              <span className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Sourcing Chine
              </span>
            </span>
          </a>

          {/* ---------- NAV DESKTOP ---------- */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-x-4 bottom-1.5 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-400 transition-transform duration-300 hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* ---------- CTA DESKTOP ---------- */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-2.5 text-sm font-bold text-navy-900 shadow-glow transition-all duration-300 hover:shadow-glow-lg hover:brightness-110 active:scale-[0.97]"
            >
              Démarrer un projet
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* ---------- BURGER MOBILE ---------- */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-xl border border-gold-500/20 bg-navy-800/60 text-slate-200 transition-colors hover:border-gold-500/40 hover:text-white lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ---------- PANNEAU MOBILE ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
              onClick={close}
            />
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-16 mx-4 overflow-hidden rounded-2xl border border-gold-500/15 bg-navy-800/95 p-3 shadow-card backdrop-blur-xl sm:top-20"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold text-slate-200 transition-colors hover:bg-gold-500/10 hover:text-gold-400"
                >
                  {link.label}
                  <ArrowRight size={16} className="text-gold-500/60" />
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={close}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-3.5 text-[15px] font-bold text-navy-900 shadow-glow active:scale-[0.98]"
              >
                Démarrer un projet
                <ArrowRight size={17} strokeWidth={2.5} />
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}