"use client";

import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";

const BEFORE_IMG = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85";
const AFTER_IMG  = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(98, Math.max(2, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => { if (isDragging) updatePosition(e.clientX); };
  const onTouchMove = (e: React.TouchEvent) => { updatePosition(e.touches[0].clientX); };

  return (
    <section className="py-28 bg-[#000]" style={{ borderTop: "1px solid #111" }}>
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-[1px] bg-[#3D52D5]" />
              <span className="text-[#3D52D5] text-[10px] font-bold tracking-[0.4em] uppercase">
                Résultats
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-barlow)] font-black italic text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.92] uppercase text-white">
              Avant
              <span className="text-[#3D52D5]"> / </span>
              Après
            </h2>
          </div>
          <p className="text-[#2e2e2e] text-[11px] tracking-widest uppercase lg:mb-1">
            Glissez le curseur pour révéler<br />la transformation.
          </p>
        </div>

        {/* Slider */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full aspect-[16/7] overflow-hidden select-none cursor-col-resize"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
          style={{ touchAction: "none", outline: "1px solid #111" }}
        >
          {/* AFTER side */}
          <div className="absolute inset-0">
            {AFTER_IMG ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={AFTER_IMG} alt="Après nettoyage" className="w-full h-full object-cover" draggable={false} />
            ) : (
              <div className="w-full h-full" style={{ background: "linear-gradient(135deg, #050510 0%, #0a0a2e 30%, #0d1040 60%, #0a0a1e 100%)" }}>
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 65% 45%, rgba(61,82,213,0.25) 0%, transparent 70%)" }} />
              </div>
            )}
            <div className="absolute bottom-5 right-5 bg-[#3D52D5] text-white text-[9px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 pointer-events-none">
              APRÈS
            </div>
          </div>

          {/* BEFORE side */}
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            {BEFORE_IMG ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={BEFORE_IMG}
                alt="Avant nettoyage"
                className="w-full h-full object-cover"
                draggable={false}
                style={{ filter: "saturate(0.15) brightness(0.5) contrast(0.9)" }}
              />
            ) : (
              <div className="w-full h-full" style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #111111 40%, #0d0d0d 100%)" }} />
            )}
            <div className="absolute bottom-5 left-5 bg-[#0a0a0a] border border-[#1c1c1c] text-[#555] text-[9px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 pointer-events-none">
              AVANT
            </div>
          </div>

          {/* Divider */}
          <div
            className="absolute top-0 bottom-0 w-[1px] bg-white/80 z-20 pointer-events-none"
            style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M6 4L2 9l4 5M12 4l4 5-4 5" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-[#1e1e1e] text-[9px] mt-4 tracking-[0.35em] uppercase">
          ← Glissez pour comparer →
        </p>
      </div>
    </section>
  );
}
