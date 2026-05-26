/**
 * Placeholder del logo Logopost.
 * Sustituye este componente por el componente real de tu landing original
 * (el LogopostLogo.tsx que ya tienes en tu otro repo).
 */
const LogopostLogo = ({ className = "" }: { className?: string }) => (
  <div className={`inline-flex items-center font-primary font-bold tracking-tight ${className}`}>
    <span className="text-foreground">logo</span>
    <span className="text-accent">post</span>
  </div>
);

export default LogopostLogo;
