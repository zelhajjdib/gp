"use client";

import { motion } from "framer-motion";

const PHOTOS = [
  {
    id: 1,
    label: "Lavage extérieur",
    sub: "Carrosserie & jantes",
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: 2,
    label: "Polish machine",
    sub: "Correction peinture",
    src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=85",
    span: "",
  },
  {
    id: 3,
    label: "Intérieur",
    sub: "Aspiration & plastiques",
    src: "https://images.unsplash.com/photo-1503736334956-4c8f8e4dc39c?auto=format&fit=crop&w=800&q=85",
    span: "",
  },
  {
    id: 4,
    label: "Céramique",
    sub: "Protection longue durée",
    src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=85",
    span: "lg:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section className="py-28 bg-[#0a0a0e]" style={{ borderTop: "1px solid #151518" }}>
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-[1px] bg-[#3D52D5]" />
              <span className="text-[#3D52D5] text-[10px] font-bold tracking-[0.4em] uppercase">
                Notre travail
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-barlow)] font-black italic text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.92] uppercase text-white">
              Chaque détail
              <br />
              <span className="text-[#3D52D5]">compte.</span>
            </h2>
          </div>
          <a
            href="#reservation"
            className="shrink-0 self-start sm:self-end inline-flex items-center gap-2 border border-[#181818] hover:border-[#3D52D5]/50 text-[#444] hover:text-[#888] text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-3 transition-all duration-300"
          >
            Réserver maintenant
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#151518]">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`group relative overflow-hidden aspect-square bg-[#0c0c10] ${photo.span}`}
            >
              {photo.src && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              )}

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500" />

              {/* Info on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-5 h-[1px] bg-[#3D52D5] mb-3" />
                <p className="font-[family-name:var(--font-barlow)] font-black italic text-white text-xl uppercase leading-tight">
                  {photo.label}
                </p>
                <p className="text-[#888] text-[11px] mt-1.5 tracking-wide">{photo.sub}</p>
              </div>

              {/* Index */}
              <div className="absolute top-4 left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
