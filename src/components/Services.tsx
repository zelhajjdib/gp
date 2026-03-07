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
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#3D52D5]" />
            <span className="text-[#3D52D5] text-xs font-semibold tracking-[0.25em] uppercase">
              Nos prestations
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-barlow)] font-black italic text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] uppercase text-white">
            Choisissez
            <br />
            votre formule
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1c1c1c]">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className={`relative group flex flex-col p-8 transition-all duration-300 ${
                service.featured
                  ? "bg-[#0f0f0f] lg:row-span-1"
                  : "bg-[#0a0a0a] hover:bg-[#0f0f0f]"
              }`}
            >
              {/* Blue top border on hover / featured */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                  service.featured
                    ? "bg-[#3D52D5]"
                    : "bg-transparent group-hover:bg-[#3D52D5]"
                }`}
              />

              {/* Featured badge */}
              {service.featured && (
                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase bg-[#3D52D5] text-white px-2.5 py-1">
                  Populaire
                </span>
              )}

              {/* Number */}
              <span className="font-[family-name:var(--font-barlow)] font-black italic text-[#1c1c1c] group-hover:text-[#2a2a2a] text-6xl leading-none transition-colors duration-300 mb-4 select-none">
                {service.number}
              </span>

              {/* Name & duration */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-[family-name:var(--font-barlow)] font-bold italic text-xl uppercase text-white leading-tight">
                  {service.name}
                </h3>
                <span className="text-xs text-[#6b6b6b] ml-3 mt-1 shrink-0">{service.duration}</span>
              </div>

              {/* Description */}
              <p className="text-[#6b6b6b] text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Includes */}
              <ul className="space-y-1.5 mb-8">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[#9a9a9a]">
                    <div className="w-1 h-1 bg-[#3D52D5] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#1c1c1c]">
                <span className="text-white font-semibold text-sm">{service.price}</span>
                <a
                  href="#reservation"
                  className={`text-xs font-bold uppercase tracking-widest px-4 py-2 transition-all duration-200 ${
                    service.featured
                      ? "bg-[#3D52D5] hover:bg-[#2B3DB8] text-white"
                      : "border border-[#2a2a2a] hover:border-[#3D52D5] text-[#9a9a9a] hover:text-white"
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
