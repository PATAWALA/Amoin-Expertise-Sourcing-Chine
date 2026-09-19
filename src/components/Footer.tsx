import { ArrowUpRight, Mail, MapPin, Music2, Phone } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold-500/12 bg-navy-950 px-5 pt-16 pb-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* ---------- MARQUE ---------- */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 text-base font-black text-navy-900 shadow-glow">
                A
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-extrabold tracking-tight text-white">
                  Amoin<span className="text-gold-500">.</span>
                </span>
                <span className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Sourcing Chine
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-slate-400">
              Votre pont direct Afrique — Chine. Sourcing, voyages d'affaires et
              investissements industriels, pilotés par une équipe présente à
              Guangzhou et à Abidjan.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 text-[12.5px] text-slate-500">
              <MapPin size={14} className="text-gold-500" />
              {BRAND.locations}
            </p>
          </div>

          {/* ---------- NAVIGATION ---------- */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold-500">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13.5px] text-slate-400 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-[13.5px] text-slate-400 transition-colors hover:text-gold-400"
                >
                  Démarrer un projet
                </a>
              </li>
            </ul>
          </div>

          {/* ---------- CONTACT / RÉSEAUX ---------- */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold-500">
              Nous joindre
            </h4>

            <div className="mt-5 space-y-3">
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.07] px-4 py-3.5 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/[0.12]"
              >
                <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-emerald-400">
                  <Phone size={16} strokeWidth={2.2} />
                  WhatsApp direct
                </span>
                <ArrowUpRight
                  size={15}
                  className="text-emerald-500/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={BRAND.tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-navy-700/60 bg-navy-900/60 px-4 py-3.5 transition-all duration-300 hover:border-gold-500/35 hover:bg-navy-800"
              >
                <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-slate-200">
                  <Music2 size={16} strokeWidth={2.2} className="text-gold-500" />
                  TikTok @amoin.chine
                </span>
                <ArrowUpRight
                  size={15}
                  className="text-slate-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="group flex items-center justify-between rounded-2xl border border-navy-700/60 bg-navy-900/60 px-4 py-3.5 transition-all duration-300 hover:border-gold-500/35 hover:bg-navy-800"
              >
                <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-slate-200">
                  <Mail size={16} strokeWidth={2.2} className="text-gold-500" />
                  {BRAND.email}
                </span>
                <ArrowUpRight
                  size={15}
                  className="text-slate-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* ---------- BARRE INFÉRIEURE ---------- */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-7 sm:flex-row">
          <p className="text-center text-[12px] text-slate-500 sm:text-left">
            © {year} {BRAND.fullName}. Tous droits réservés.
          </p>

          <p className="text-center text-[12px] text-slate-500 sm:text-right">
            Développé par{" "}
            <span className="font-bold text-gradient-gold">
              Abdoulaye Patawala
            </span>{" "}
            — Architecte Web
          </p>
        </div>
      </div>
    </footer>
  );
}