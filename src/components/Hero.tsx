"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const STATS = [
  { value: 500, suffix: "+", label: "Véhicules traités" },
  { value: 100, suffix: "%", label: "Satisfaction client" },
  { value: 5, suffix: "★", label: "Note moyenne" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 40;
          let current = 0;
          const increment = target / steps;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, 1400 / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#06060a]"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Atmospheric blue glow — left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 28% 55%, rgba(61,82,213,0.13) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Left accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] as const }}
        style={{ originY: 0.5 }}
        className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#3D52D5] to-transparent"
        aria-hidden="true"
      />

      {/* Top bar after nav */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
        style={{ originX: 0 }}
        className="absolute top-[76px] left-0 right-0 h-[1px] bg-gradient-to-r from-[#3D52D5]/50 via-[#3D52D5]/15 to-transparent"
        aria-hidden="true"
      />

      {/* Content — two columns */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 items-center">

        {/* LEFT */}
        <div>
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-3 mb-12"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              style={{ originX: 0 }}
              className="w-8 h-[1px] bg-[#3D52D5]"
            />
            <span className="text-[#3D52D5] text-[10px] font-bold tracking-[0.42em] uppercase">
              Detailing Automobile Premium
            </span>
          </motion.div>

          {/* GP DETAIL logo — hero centerpiece */}
          <div className="relative overflow-hidden mb-8 -ml-2">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.15, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative w-full max-w-[560px]"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/GP.jpeg`}
                alt="GP Detail — Le detail qui fait la diff"
                width={1085}
                height={1085}
                className="w-full h-auto"
                priority
              />
              {/* Glare sweep */}
              <motion.div
                initial={{ x: "-130%" }}
                animate={{ x: "230%" }}
                transition={{ duration: 1.0, delay: 1.05, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(100deg, transparent 20%, rgba(255,255,255,0.22) 50%, transparent 80%)",
                  zIndex: 10,
                }}
                aria-hidden="true"
              />
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="text-[#4a4a4a] text-[11px] leading-loose max-w-xs mb-10 tracking-[0.22em] uppercase font-medium"
          >
            Nettoyage & detailing haut de gamme.<br />
            Chaque véhicule traité avec précision.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <a
              href="#reservation"
              className="group relative inline-flex items-center gap-3 bg-[#3D52D5] text-white font-bold uppercase tracking-[0.18em] text-[10px] px-8 py-4 overflow-hidden transition-all duration-300 hover:shadow-[0_0_45px_rgba(61,82,213,0.55)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Prendre rendez-vous
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white/10 translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-500 skew-x-[-8deg]" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-[#181818] hover:border-[#3D52D5]/50 text-[#444] hover:text-[#888] font-bold uppercase tracking-[0.18em] text-[10px] px-8 py-4 transition-all duration-300"
            >
              Nos services
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap gap-10 border-t border-[#111] pt-8"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
              >
                <p className="font-[family-name:var(--font-barlow)] font-black italic text-[2rem] text-white leading-none">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[#2e2e2e] text-[9px] uppercase tracking-widest mt-1.5">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Decorative orbital */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-[420px] h-[420px]">

            {/* Outer ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              className="absolute inset-0 rounded-full border border-[#161616]"
              style={{ boxShadow: "0 0 80px rgba(61,82,213,0.07), inset 0 0 50px rgba(61,82,213,0.03)" }}
            />

            {/* Middle ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
              className="absolute inset-[52px] rounded-full border border-[#141414]"
            />

            {/* Rotating blue arc */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[16px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgba(61,82,213,0.2) 12deg, rgba(61,82,213,0.05) 30deg, transparent 40deg, transparent 180deg, rgba(61,82,213,0.1) 195deg, transparent 215deg)",
              }}
              aria-hidden="true"
            />

            {/* Inner glow ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 1.0, ease: [0.22, 1, 0.36, 1] as const }}
              className="absolute inset-[108px] rounded-full border border-[#3D52D5]/20 flex items-center justify-center"
              style={{
                boxShadow: "0 0 50px rgba(61,82,213,0.2), inset 0 0 40px rgba(61,82,213,0.08)",
              }}
            >
              <motion.div
                animate={{ opacity: [0.65, 1, 0.65] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/GPlogo.jpeg`}
                  alt="GP"
                  width={140}
                  height={140}
                  className="object-contain rounded-full"
                />
              </motion.div>
            </motion.div>

            {/* Cross lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute top-1/2 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#181818] to-transparent -translate-y-1/2" />
              <div className="absolute left-1/2 top-6 bottom-6 w-[1px] bg-gradient-to-b from-transparent via-[#181818] to-transparent -translate-x-1/2" />
            </motion.div>

            {/* Dot markers on outer ring */}
            {[0, 90, 180, 270].map((deg, i) => {
              const r = 204;
              const rad = (deg * Math.PI) / 180;
              const x = 210 + r * Math.cos(rad);
              const y = 210 + r * Math.sin(rad);
              return (
                <motion.div
                  key={deg}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.5 + i * 0.08 }}
                  className="absolute w-1 h-1 rounded-full bg-[#3D52D5]/50"
                  style={{ left: x - 2, top: y - 2 }}
                />
              );
            })}

            {/* Corner bracket marks */}
            {[
              "top-[48px] left-[48px] border-t border-l",
              "top-[48px] right-[48px] border-t border-r",
              "bottom-[48px] left-[48px] border-b border-l",
              "bottom-[48px] right-[48px] border-b border-r",
            ].map((cls, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.6 + i * 0.06 }}
                className={`absolute w-4 h-4 border-[#3D52D5]/35 ${cls}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[#252525] text-[9px] tracking-[0.45em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#3D52D5]/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
