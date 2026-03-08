"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "ext",
    number: "01",
    name: "Lavage Extérieur",
    duration: "1h",
    price: "À partir de 29€",
    description:
      "Nettoyage complet de la carrosserie, jantes, vitres et pneus. Finition à la main pour un éclat parfait.",
    includes: ["Carrosserie complète", "Jantes & pneus", "Vitres extérieures", "Seuils de portes"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 18h20M7 18l2-6h10l2 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="9" cy="20" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="19" cy="20" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 12l1-3h6l1 3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "int",
    number: "02",
    name: "Lavage Intérieur",
    duration: "1h30",
    price: "À partir de 39€",
    description:
      "Aspiration profonde, nettoyage des plastiques, vitres intérieures et tapis. Habitacle impeccable.",
    includes: ["Aspiration complète", "Plastiques & tableau de bord", "Vitres intérieures", "Tapis & coffre"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 12h20" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 9h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 15h4M16 15h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "full",
    number: "03",
    name: "Lavage Complet",
    duration: "2h",
    price: "À partir de 59€",
    description:
      "La combinaison parfaite. Intérieur et extérieur traités avec soin pour un résultat total.",
    includes: ["Lavage extérieur complet", "Lavage intérieur complet", "Traitement plastiques", "Désodorisation"],
    featured: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4l2.5 7.5H24l-6.5 4.5 2.5 7.5L14 19l-6 4.5 2.5-7.5L4 11.5h7.5L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "polish",
    number: "04",
    name: "Polish & Protection",
    duration: "3h",
    price: "À partir de 149€",
    description:
      "Correction de peinture, polish machine et application de cire protectrice. Peinture restaurée.",
    includes: ["Correction légère peinture", "Polish machine", "Application cire", "Protection 3 mois"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 4v3M14 21v3M4 14h3M21 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "premium",
    number: "05",
    name: "Detailing Premium",
    duration: "Journée",
    price: "À partir de 299€",
    description:
      "Le traitement ultime. Polish complet, décontamination et revêtement céramique pour une protection longue durée.",
    includes: ["Décontamination ferreux", "Correction peinture", "Revêtement céramique", "Protection 12+ mois"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L16.5 9H23L17.7 12.9L19.9 19L14 15.3L8.1 19L10.3 12.9L5 9H11.5L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 22h10M11 24h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#0a0a0e]">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-[1px] bg-[#3D52D5]" />
              <span className="text-[#3D52D5] text-[10px] font-bold tracking-[0.4em] uppercase">
                Nos prestations
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-barlow)] font-black italic text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.92] uppercase text-white">
              Choisissez
              <br />
              <span className="text-[#3D52D5]">votre</span> formule
            </h2>
          </div>
          <p className="text-white/70 text-xs tracking-widest uppercase max-w-xs leading-loose lg:text-right lg:mb-1">
            5 formules disponibles<br />du lavage simple au detailing complet
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[1px] bg-[#151518]">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`relative group flex flex-col p-8 overflow-hidden transition-colors duration-300 ${
                i < 3 ? "lg:col-span-2" : "lg:col-span-3"
              } ${
                service.featured
                  ? "bg-[#10101a]"
                  : "bg-[#0c0c10] hover:bg-[#101014]"
              }`}
            >
              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[1px] transition-all duration-500 ${
                  service.featured
                    ? "bg-[#3D52D5]"
                    : "bg-transparent group-hover:bg-[#3D52D5]/60"
                }`}
              />

              {/* Blue inner glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(61,82,213,0.04) 0%, transparent 70%)",
                }}
              />

              {/* Giant background number */}
              <div
                className="absolute -right-3 -bottom-4 select-none pointer-events-none"
                aria-hidden="true"
              >
                <span
                  className={`font-[family-name:var(--font-barlow)] font-black italic leading-none transition-colors duration-300 ${
                    service.featured
                      ? "text-[#3D52D5]/[0.06]"
                      : "text-white/[0.025] group-hover:text-white/[0.04]"
                  }`}
                  style={{ fontSize: "clamp(7rem, 11vw, 10rem)" }}
                >
                  {service.number}
                </span>
              </div>

              {/* Featured badge */}
              {service.featured && (
                <span className="absolute top-5 right-5 text-[9px] font-bold tracking-[0.2em] uppercase bg-[#3D52D5] text-white px-2.5 py-1">
                  Populaire
                </span>
              )}

              {/* Icon */}
              <div
                className={`mb-6 w-10 h-10 flex items-center justify-center border transition-colors duration-300 ${
                  service.featured
                    ? "border-[#3D52D5]/40 text-[#3D52D5]"
                    : "border-[#1a1a1a] text-[#2a2a2a] group-hover:border-[#3D52D5]/40 group-hover:text-[#3D52D5]"
                }`}
              >
                {service.icon}
              </div>

              {/* Name & duration */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-[family-name:var(--font-barlow)] font-black italic text-xl uppercase text-white leading-tight border-l-[3px] border-[#3D52D5] pl-3">
                  {service.name}
                </h3>
                <span className="shrink-0 text-[9px] text-white/70 uppercase tracking-widest border border-[#1a1a1a] px-2 py-1 mt-0.5">
                  {service.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-white text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Includes */}
              <ul className="space-y-2 mb-8">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[11px] text-white tracking-wide">
                    <div className="w-[3px] h-[3px] bg-[#3D52D5] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
              <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#111]">
                <span className="text-white text-sm font-semibold">{service.price}</span>
                <a
                  href="#reservation"
                  className={`text-[10px] font-bold uppercase tracking-[0.18em] px-4 py-2.5 transition-all duration-300 ${
                    service.featured
                      ? "bg-[#3D52D5] hover:bg-[#2B3DB8] text-white hover:shadow-[0_0_25px_rgba(61,82,213,0.5)]"
                      : "border border-[#1c1c1c] hover:border-[#3D52D5]/50 text-white hover:text-white"
                  }`}
                >
                  Réserver
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
