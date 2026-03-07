export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#1c1c1c]" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-[#3D52D5] px-2 py-0.5 mr-[-4px] z-10">
                <span className="text-white font-[family-name:var(--font-barlow)] font-black italic text-xl leading-none tracking-tight">
                  GP
                </span>
              </div>
              <span className="text-white font-[family-name:var(--font-barlow)] font-black italic text-xl leading-none tracking-wider uppercase ml-2">
                DETAIL
              </span>
            </div>
            <p className="text-[#6b6b6b] text-sm leading-relaxed max-w-xs">
              Le detail qui fait la diff. Service de nettoyage et detailing automobile premium.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3D52D5] mb-4">
              Services
            </p>
            <ul className="space-y-2">
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
                    className="text-sm text-[#6b6b6b] hover:text-white transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3D52D5] mb-4">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-[#6b6b6b]">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1.5C4.79 1.5 3 3.29 3 5.5c0 3.25 4 7 4 7s4-3.75 4-7c0-2.21-1.79-3.5-4-3.5zm0 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor" />
                </svg>
                <span>Votre ville, France</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 2.5h10M2 5.5h10M2 8.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>Lun — Sam : 8h à 18h</span>
              </li>
              <li>
                <a
                  href="#reservation"
                  className="inline-block mt-2 text-xs font-bold uppercase tracking-widest border border-[#3D52D5] text-[#3D52D5] hover:bg-[#3D52D5] hover:text-white px-4 py-2 transition-all duration-200"
                >
                  Prendre RDV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1c1c1c] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6b6b6b] text-xs">
            © {year} GP Detail. Tous droits réservés.
          </p>
          <p className="text-[#3b3b3b] text-xs italic font-[family-name:var(--font-barlow)]">
            Le detail qui fait la diff.
          </p>
        </div>
      </div>
    </footer>
  );
}
