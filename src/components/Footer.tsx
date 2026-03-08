import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#000]" role="contentinfo" style={{ borderTop: "1px solid #111" }}>
      {/* Blue top accent line */}
      <div className="h-[1px] bg-gradient-to-r from-[#3D52D5]/60 via-[#3D52D5]/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-20 mb-16">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-6">
              <Image
                src="/GPlogo.jpeg"
                alt="GP Detail"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <p className="text-[#2a2a2a] text-[11px] leading-loose tracking-wide uppercase">
              Le detail qui fait la diff.<br />
              Service de nettoyage et detailing<br />automobile premium.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#3D52D5] mb-6">
              Services
            </p>
            <ul className="space-y-3">
              {[
                "Lavage Extérieur",
                "Lavage Intérieur",
                "Lavage Complet",
                "Polish & Protection",
                "Detailing Premium",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[11px] text-[#2a2a2a] hover:text-[#555] transition-colors duration-200 tracking-wide uppercase"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#3D52D5] mb-6">
              Contact
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 shrink-0 text-[#2a2a2a]" width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1.5C4.79 1.5 3 3.29 3 5.5c0 3.25 4 7 4 7s4-3.75 4-7c0-2.21-1.79-3.5-4-3.5zm0 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor" />
                </svg>
                <span className="text-[11px] text-[#2a2a2a] uppercase tracking-wide">Votre ville, France</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="shrink-0 text-[#2a2a2a]" width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <rect x="1" y="2" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1 5l6 4 6-4" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                <span className="text-[11px] text-[#2a2a2a] uppercase tracking-wide">Lun — Sam : 8h — 18h</span>
              </li>
              <li className="pt-2">
                <a
                  href="#reservation"
                  className="inline-block text-[9px] font-bold uppercase tracking-[0.25em] border border-[#3D52D5]/40 text-[#3D52D5] hover:bg-[#3D52D5] hover:text-white px-5 py-2.5 transition-all duration-200"
                >
                  Prendre RDV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid #0e0e0e" }}>
          <p className="text-[#1c1c1c] text-[10px] tracking-widest uppercase">
            © {year} GP Detail. Tous droits réservés.
          </p>
          <p className="text-[#1c1c1c] text-[10px] italic font-[family-name:var(--font-barlow)] tracking-widest">
            Le detail qui fait la diff.
          </p>
        </div>
      </div>
    </footer>
  );
}
