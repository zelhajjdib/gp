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
    <section id="process" className="py-28 bg-[#000] overflow-hidden" style={{ borderTop: "1px solid #111" }}>
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-24">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-[1px] bg-[#3D52D5]" />
              <span className="text-[#3D52D5] text-[10px] font-bold tracking-[0.4em] uppercase">
                Comment ça marche
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-barlow)] font-black italic text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.92] uppercase text-white">
              Simple,<br />
              rapide,<br />
              <span className="text-[#3D52D5]">efficace.</span>
            </h2>
          </div>
          <div className="lg:mb-2">
            <p className="text-[#3a3a3a] text-sm leading-loose max-w-sm tracking-wide">
              Réserver un detailing ne devrait pas être compliqué. Notre processus en 3 étapes vous
              garantit une expérience fluide du début à la fin.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3">
          {/* Horizontal connecting line on desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="hidden lg:block absolute top-[52px] left-[calc(16.6%+16px)] right-[calc(16.6%+16px)] h-[1px] bg-gradient-to-r from-[#1a1a1a] via-[#3D52D5]/20 to-[#1a1a1a]"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative pt-0 pb-12 lg:pb-0 lg:px-8 first:lg:pl-0 last:lg:pr-0 group"
            >
              {/* Giant background number */}
              <div
                className="absolute -top-6 -left-2 select-none pointer-events-none overflow-hidden"
                style={{ lineHeight: 1 }}
                aria-hidden="true"
              >
                <span
                  className="font-[family-name:var(--font-barlow)] font-black italic text-white/[0.018] group-hover:text-white/[0.03] transition-colors duration-500"
                  style={{ fontSize: "clamp(9rem, 15vw, 14rem)" }}
                >
                  {step.number}
                </span>
              </div>

              {/* Step content */}
              <div className="relative z-10">
                {/* Number pill */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 border border-[#1a1a1a] group-hover:border-[#3D52D5]/50 flex items-center justify-center transition-colors duration-300">
                    <span className="font-[family-name:var(--font-barlow)] font-black italic text-sm text-[#333] group-hover:text-[#3D52D5] transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1 h-[1px] bg-[#111] group-hover:bg-[#3D52D5]/20 transition-colors duration-300 lg:hidden" />
                </div>

                <h3 className="font-[family-name:var(--font-barlow)] font-black italic text-2xl uppercase text-white mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[#3a3a3a] text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 pt-10 border-t border-[#0f0f0f] flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="#reservation"
            className="group relative inline-flex items-center gap-3 bg-[#3D52D5] text-white font-bold uppercase tracking-[0.18em] text-[10px] px-8 py-4 overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(61,82,213,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Réserver maintenant
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-white/10 translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-500 skew-x-[-8deg]" />
          </a>
          <p className="text-[#2a2a2a] text-[11px] tracking-widest uppercase">
            Disponible du{" "}
            <span className="text-[#555]">lundi au samedi</span>
            {", "}de <span className="text-[#555]">8h à 18h</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
