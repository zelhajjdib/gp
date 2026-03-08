"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1920&q=85"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/72" />
        {/* Gradient overlay for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 100%)",
          }}
        />
        {/* Blue tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(61,82,213,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Left accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] as const }}
        style={{ originY: 0.5 }}
        className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#3D52D5] to-transparent z-10"
        aria-hidden="true"
      />

      {/* Top bar after nav */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
        style={{ originX: 0 }}
        className="absolute top-[76px] left-0 right-0 h-[1px] bg-gradient-to-r from-[#3D52D5]/50 via-[#3D52D5]/15 to-transparent z-10"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-20">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center gap-3 mb-10"
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

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-[family-name:var(--font-barlow)] font-black italic uppercase leading-[0.88] mb-6"
          style={{ fontSize: "clamp(3.5rem, 8vw, 7.5rem)" }}
        >
          <span className="text-white">Le détail</span>
          <br />
          <span className="text-white">qui fait</span>
          <br />
          <span className="text-[#3D52D5]">la diff.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-white/50 text-sm leading-loose max-w-md mb-10 tracking-wide"
        >
          Nettoyage & detailing haut de gamme.<br />
          Chaque véhicule traité avec précision et passion.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.05 }}
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
            className="inline-flex items-center gap-2 border border-white/15 hover:border-[#3D52D5]/60 text-white/50 hover:text-white font-bold uppercase tracking-[0.18em] text-[10px] px-8 py-4 transition-all duration-300 backdrop-blur-sm"
          >
            Nos services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-wrap gap-10 border-t border-white/10 pt-8"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
            >
              <p className="font-[family-name:var(--font-barlow)] font-black italic text-[2rem] text-white leading-none">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/25 text-[9px] uppercase tracking-widest mt-1.5">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <span className="text-white/20 text-[9px] tracking-[0.45em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#3D52D5]/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
