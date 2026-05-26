/**
 * Logo Iberdrola simplificado para el hero.
 * Sustituye por una imagen oficial cuando la tengas (ponla en /src/assets/).
 */
const IberdrolaLogo = ({ className = "" }: { className?: string }) => (
  <div className={`inline-flex items-center gap-3 ${className}`}>
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto" aria-hidden="true">
      <path d="M20 8 C 12 22, 14 38, 24 50 C 18 36, 20 22, 28 12 Z" fill="#009639" />
      <path d="M38 8 C 30 22, 32 38, 42 50 C 36 36, 38 22, 46 12 Z" fill="#F39200" />
    </svg>
    <span className="font-primary font-bold text-[#009639] text-[2em] leading-none">Iberdrola</span>
  </div>
);

export default IberdrolaLogo;
