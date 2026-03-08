"use client";

const items = [
  "LAVAGE EXTÉRIEUR",
  "LAVAGE INTÉRIEUR",
  "POLISH MACHINE",
  "REVÊTEMENT CÉRAMIQUE",
  "DETAILING PREMIUM",
  "PROTECTION PEINTURE",
  "DÉCONTAMINATION",
  "FINITION À LA MAIN",
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-[18px] bg-[#08080c]" style={{ borderTop: "1px solid rgba(61,82,213,0.22)", borderBottom: "1px solid rgba(61,82,213,0.22)" }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#08080c] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#08080c] to-transparent z-10 pointer-events-none" />

      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 36s linear infinite", willChange: "transform" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center font-[family-name:var(--font-barlow)] font-black italic text-[11px] tracking-[0.32em] uppercase"
          >
            <span className="text-white/22 px-8">{item}</span>
            <span className="w-[1px] h-3 bg-[#3D52D5]/50 shrink-0" />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
