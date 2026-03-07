"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Véhicules traités" },
  { value: "100%", label: "Satisfaction client" },
  { value: "5★", label: "Note moyenne" },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Blue accent — referencing the logo diagonal bar */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#3D52D5] opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-[20%] h-[35%] w-[520px] opacity-[0.04] bg-[#3D52D5]"
        style={{ clipPath: "polygon(80px 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[2px] bg-[#3D52D5]" />
            <span className="text-[#3D52D5] text-xs font-semibold tracking-[0.25em] uppercase">
              Detailing Automobile Premium
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-barlow)] font-black italic text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] tracking-tight text-white uppercase mb-6"
          >
            Le detail
            <br />
            <span className="text-[#3D52D5]">qui fait</span>
            <br />
            la diff.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-[#9a9a9a] text-lg leading-relaxed max-w-md mb-10"
          >
            Nettoyage et detailing automobile haut de gamme. Chaque véhicule
            traité avec la précision et l&apos;exigence que vous méritez.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <a
              href="#reservation"
              className="inline-flex items-center gap-3 bg-[#3D52D5] hover:bg-[#2B3DB8] text-white font-semibold uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-200"
            >
              Prendre rendez-vous
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 border border-[#2a2a2a] hover:border-white text-[#9a9a9a] hover:text-white font-semibold uppercase tracking-widest text-sm px-8 py-4 transition-all duration-200"
            >
              Nos services
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-12 border-t border-[#1c1c1c] pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-[family-name:var(--font-barlow)] font-black italic text-3xl text-white">
                  {stat.value}
                </p>
                <p className="text-[#6b6b6b] text-xs uppercase tracking-widest mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[#6b6b6b] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#3D52D5] to-transparent"
        />
      </motion.div>
    </section>
  );
}
