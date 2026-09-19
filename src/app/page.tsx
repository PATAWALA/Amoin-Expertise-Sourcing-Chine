import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import ProcessSection from "@/components/ProcessSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

/* -------------------------------------------------------------------------- */
/*  DÉCOR DE FOND GLOBAL (grilles + halos)                                    */
/* -------------------------------------------------------------------------- */
function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dégradé vertical de base */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950" />

      {/* Grille technique */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.14) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 90% 55% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 55% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      {/* Halo or haut-droite */}
      <div className="absolute -top-40 right-[-12%] h-[34rem] w-[34rem] rounded-full bg-gold-500/[0.10] blur-[130px]" />

      {/* Halo crimson bas-gauche (touche Chine) */}
      <div className="absolute bottom-[-14%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-crimson-600/[0.07] blur-[130px]" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                      */
/* -------------------------------------------------------------------------- */
export default function Home() {
  return (
    <>
      <BackgroundFX />

      <Header />

      <main className="relative overflow-x-hidden">
        <HeroSection />

        {/* Bandeau défilant de réassurance */}
        <div className="relative overflow-hidden border-y border-gold-500/12 bg-navy-950/70 py-4">
          <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap will-change-transform">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex items-center gap-10">
                {[
                  "Usines vérifiées sur place",
                  "Négociation au prix usine",
                  "Fret maritime & aérien",
                  "Dédouanement complet",
                  "Interprète bilingue FR / 中文",
                  "Analyse de dossier en 24h",
                ].map((label) => (
                  <span
                    key={`${dup}-${label}`}
                    className="flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold-500" />
                    {label}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <ServiceCards />
        <ProcessSection />
        <LeadForm />
      </main>

      <Footer />
    </>
  );
}