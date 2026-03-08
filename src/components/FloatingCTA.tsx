"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#reservation"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#3D52D5] hover:bg-[#2B3DB8] text-white text-xs font-bold uppercase tracking-widest px-5 py-3.5 shadow-[0_4px_30px_rgba(61,82,213,0.5)] hover:shadow-[0_4px_40px_rgba(61,82,213,0.7)] transition-all duration-300"
          aria-label="Prendre rendez-vous"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <rect x="1" y="2" width="12" height="11" rx="1" stroke="white" strokeWidth="1.2"/>
            <path d="M1 6h12" stroke="white" strokeWidth="1.2"/>
            <path d="M4 1v2M10 1v2" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          Prendre RDV
        </motion.a>
      )}
    </AnimatePresence>
  );
}
