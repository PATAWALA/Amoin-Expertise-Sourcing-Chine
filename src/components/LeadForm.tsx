"use client";

import { useMemo, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Lock,
  MessageCircle,
  Send,
} from "lucide-react";
import {
  BRAND,
  BUDGET_OPTIONS,
  SERVICE_OPTIONS,
  type BudgetValue,
  type ServiceValue,
} from "@/data/content";

type Status = "idle" | "sending" | "success";

export default function LeadForm() {
  const [service, setService] = useState<ServiceValue>("sourcing");
  const [budget, setBudget] = useState<BudgetValue>("1m-5m");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const serviceLabel = useMemo(
    () => SERVICE_OPTIONS.find((o) => o.value === service)?.label ?? "",
    [service],
  );
  const budgetLabel = useMemo(
    () => BUDGET_OPTIONS.find((o) => o.value === budget)?.label ?? "",
    [budget],
  );

  const waHref = useMemo(() => {
    const text = [
      "Bonjour Amoin 👋",
      "",
      `• Service souhaité : ${serviceLabel}`,
      `• Budget prévisionnel : ${budgetLabel}`,
      `• Nom : ${name || "—"}`,
      `• WhatsApp : ${whatsapp || "—"}`,
      "",
      "Mon projet :",
      description || "—",
    ].join("\n");
    return `${BRAND.whatsappLink}?text=${encodeURIComponent(text)}`;
  }, [serviceLabel, budgetLabel, name, whatsapp, description]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (name.trim().length < 2) {
      setError("Merci d'indiquer votre nom complet.");
      return;
    }
    if (whatsapp.replace(/\D/g, "").length < 8) {
      setError("Merci de saisir un numéro WhatsApp valide (indicatif inclus).");
      return;
    }
    if (description.trim().length < 12) {
      setError("Décrivez votre projet en quelques mots (12 caractères min.).");
      return;
    }

    setStatus("sending");
    // 👉 Branchez ici votre API / Server Action / Resend / Airtable.
    window.setTimeout(() => setStatus("success"), 1100);
  };

  const inputBase =
    "w-full rounded-2xl border border-navy-700/70 bg-navy-900/70 px-4 py-3.5 text-[14.5px] text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-gold-500/60 focus:ring-4 focus:ring-gold-500/10";

  return (
    <section id="contact" className="relative scroll-mt-24 px-5 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* ============ COLONNE GAUCHE — ARGUMENTAIRE ============ */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pt-4"
          >
            <span className="inline-block rounded-full border border-gold-500/20 bg-gold-500/[0.07] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-500">
              Contact
            </span>
            <h2 className="mt-5 text-[1.9rem] font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Démarrons votre{" "}
              <span className="text-gradient-gold">projet Chine</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
              Remplissez le formulaire, je reviens vers vous sous 24h avec une
              première analyse et un plan d'action clair. Aucun engagement à ce
              stade.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Réponse personnalisée sous 24h ouvrées",
                "Devis transparent, sans frais cachés",
                "Échange direct sur WhatsApp, pas de call-center",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-500">
                    <CheckCircle2 size={13} strokeWidth={2.5} />
                  </span>
                  <span className="text-[14px] leading-relaxed text-slate-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.08] px-5 py-4 text-[14px] font-bold text-emerald-400 transition-all duration-300 hover:border-emerald-500/45 hover:bg-emerald-500/[0.14] active:scale-[0.98]"
            >
              <MessageCircle size={18} strokeWidth={2.3} />
              Discuter maintenant sur WhatsApp
            </a>
          </motion.div>

          {/* ============ COLONNE DROITE — FORMULAIRE ============ */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-b from-navy-800/85 to-navy-900/95 p-6 shadow-card backdrop-blur-xl sm:p-8 lg:p-9"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

            <AnimatePresence mode="wait">
              {status === "success" ? (
                /* ---------- ÉTAT SUCCÈS ---------- */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <CheckCircle2 size={32} strokeWidth={2} />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold text-white">
                    Demande envoyée, {name.split(" ")[0]} !
                  </h3>
                  <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-slate-400">
                    Votre dossier est entre mes mains. Pour accélérer les choses,
                    envoyez-moi directement le récapitulatif sur WhatsApp :
                  </p>

                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3.5 text-[14.5px] font-bold text-white shadow-[0_0_40px_-12px_rgba(16,185,129,0.7)] transition-all duration-300 hover:brightness-110 active:scale-[0.97]"
                  >
                    <MessageCircle size={18} strokeWidth={2.3} />
                    Envoyer sur WhatsApp
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setName("");
                      setWhatsapp("");
                      setDescription("");
                    }}
                    className="mt-4 text-[12.5px] font-semibold text-slate-500 underline-offset-4 transition-colors hover:text-gold-500 hover:underline"
                  >
                    Envoyer une nouvelle demande
                  </button>
                </motion.div>
              ) : (
                /* ---------- FORMULAIRE ---------- */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  {/* Service */}
                  <Field label="Service souhaité" htmlFor="service">
                    <div className="relative">
                      <select
                        id="service"
                        value={service}
                        onChange={(e) =>
                          setService(e.target.value as ServiceValue)
                        }
                        className={`${inputBase} appearance-none pr-11`}
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option
                            key={opt.value}
                            value={opt.value}
                            className="bg-navy-800"
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={17}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gold-500"
                      />
                    </div>
                  </Field>

                  {/* Budget */}
                  <Field label="Budget prévisionnel" htmlFor="budget">
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                      {BUDGET_OPTIONS.map((opt) => {
                        const active = budget === opt.value;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setBudget(opt.value)}
                            aria-pressed={active}
                            className={`rounded-2xl border px-3 py-3 text-[12.5px] font-bold leading-tight transition-all duration-200 active:scale-[0.97] ${
                              active
                                ? "border-gold-500/60 bg-gold-500/15 text-gold-400 shadow-glow"
                                : "border-navy-700/70 bg-navy-900/60 text-slate-400 hover:border-gold-500/30 hover:text-slate-200"
                            }`}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </Field>

                  {/* Nom + WhatsApp */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nom complet" htmlFor="name">
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex : Konan Ama"
                        className={inputBase}
                      />
                    </Field>

                    <Field label="Numéro WhatsApp" htmlFor="whatsapp">
                      <input
                        id="whatsapp"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="+225 07 00 00 00 00"
                        className={inputBase}
                      />
                    </Field>
                  </div>

                  {/* Description */}
                  <Field label="Description du projet" htmlFor="description">
                    <textarea
                      id="description"
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Quels produits ? Quelle quantité ? Pour quel marché ? Où en êtes-vous aujourd'hui ?"
                      className={`${inputBase} resize-none`}
                    />
                  </Field>

                  {/* Erreur */}
                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center gap-2 rounded-xl border border-crimson-600/25 bg-crimson-600/[0.08] px-3.5 py-3 text-[12.5px] font-medium text-crimson-500"
                      >
                        <AlertCircle size={15} className="shrink-0" />
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group mt-2 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 px-7 py-4 text-[15px] font-bold text-navy-900 shadow-glow transition-all duration-300 hover:shadow-glow-lg hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:brightness-100"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        <Send
                          size={17}
                          strokeWidth={2.5}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                        Envoyer ma demande à Amoin
                      </>
                    )}
                  </button>

                  <p className="flex items-center justify-center gap-2 pt-1 text-[11.5px] text-slate-500">
                    <Lock size={12} />
                    Vos informations restent confidentielles et ne sont jamais
                    revendues.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CHAMP DE FORMULAIRE RÉUTILISABLE                                          */
/* -------------------------------------------------------------------------- */
function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[12.5px] font-bold uppercase tracking-wider text-slate-400"
      >
        {label}
      </label>
      {children}
    </div>
  );
}