"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Choisissez votre formule",
    description:
      "Sélectionnez la prestation adaptée à votre véhicule et votre budget parmi nos 5 formules.",
  },
  {
    number: "02",
    title: "Réservez un créneau",
    description:
      "Choisissez la date et l'heure qui vous conviennent directement en ligne. Confirmation immédiate.",
  },
  {
    number: "03",
    title: "On s'occupe du reste",
    description:
      "Nos experts prennent en charge votre véhicule avec soin. Résultat garanti, satisfaction assurée.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 bg-black border-t border-[#1c1c1c]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#3D52D5]" />
              <span className="text-[#3D52D5] text-xs font-semibold tracking-[0.25em] uppercase">
                Comment ça marche
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-barlow)] font-black italic text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] uppercase text-white">
              Simple,
              <br />
              rapide,
              <br />
              efficace.
            </h2>
          </div>
          <p className="text-[#6b6b6b] text-base leading-relaxed max-w-sm lg:mb-2">
            Réserver un detailing ne devrait pas être compliqué. Notre processus en 3 étapes vous
            garantit une expérience fluide du début à la fin.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-8 left-[16.6%] right-[16.6%] h-[1px] bg-[#1c1c1c]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#1c1c1c]">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-black p-8 lg:p-10 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="font-[family-name:var(--font-barlow)] font-black italic text-5xl text-[#1c1c1c] group-hover:text-[#2B3DB8] transition-colors duration-300 leading-none select-none">
                    {step.number}
                  </span>
                  <div className="w-[2px] h-10 bg-[#3D52D5] mt-1 shrink-0" />
                </div>
                <h3 className="font-[family-name:var(--font-barlow)] font-bold italic text-xl uppercase text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="#reservation"
            className="inline-flex items-center gap-3 bg-[#3D52D5] hover:bg-[#2B3DB8] text-white font-semibold uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-200"
          >
            Réserver maintenant
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="text-[#6b6b6b] text-sm">
            Disponible du{" "}
            <span className="text-white">lundi au samedi</span>
            {", "}de <span className="text-white">8h à 18h</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
