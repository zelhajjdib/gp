"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Comment ça marche", href: "#process" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-[#1c1c1c]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        role="navigation"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link href="#accueil" className="flex items-center gap-2 group">
          <div className="relative flex items-center">
            <div className="bg-[#3D52D5] px-2 py-0.5 mr-[-4px] z-10">
              <span
                className="text-white font-[family-name:var(--font-barlow)] font-black italic text-xl leading-none tracking-tight"
              >
                GP
              </span>
            </div>
            <span
              className="text-white font-[family-name:var(--font-barlow)] font-black italic text-xl leading-none tracking-wider uppercase ml-2"
            >
              DETAIL
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#9a9a9a] hover:text-white transition-colors duration-200 tracking-wide uppercase font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#reservation"
            className="bg-[#3D52D5] hover:bg-[#2B3DB8] text-white text-sm font-semibold uppercase tracking-widest px-5 py-2.5 transition-colors duration-200"
          >
            Prendre RDV
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 border-b border-[#1c1c1c]" : "max-h-0"
        } bg-black/98`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-[#9a9a9a] hover:text-white transition-colors uppercase tracking-wide text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#reservation"
              onClick={() => setMenuOpen(false)}
              className="block bg-[#3D52D5] hover:bg-[#2B3DB8] text-white text-sm font-semibold uppercase tracking-widest px-5 py-3 text-center transition-colors duration-200 mt-2"
            >
              Prendre RDV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
