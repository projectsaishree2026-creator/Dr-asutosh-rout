interface PageHeaderProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  /** Optional path to a full-width background image (e.g. "/images/hero-about.webp") */
  bgImage?: string;
}

export function PageHeader({ label, title, subtitle, bgImage }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 bg-ink relative overflow-hidden">

      {/* ── Background image layer (when provided) ── */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* ── Dark gradient overlay ── */}
      {/* When image: strong overlay so text stays crisp */}
      {/* When no image: original gradient retained */}
      <div
        className="absolute inset-0"
        style={{
          background: bgImage
            ? "linear-gradient(135deg, rgba(11,28,44,0.82) 0%, rgba(15,45,74,0.75) 50%, rgba(11,28,44,0.85) 100%)"
            : "linear-gradient(135deg, #0B1C2C 0%, #0F2D4A 50%, #0B1C2C 100%)",
        }}
      />

      {/* ── Azure glow blob (top-right accent) ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-azure/[0.07] rounded-full blur-[100px] pointer-events-none" />

      {/* ── Subtle grid overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.12] text-white/70 text-[11px] font-medium uppercase tracking-[0.16em] px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-azure-400" />
          {label}
        </span>
        <h1 className="font-display text-[clamp(32px,5vw,58px)] font-semibold text-white leading-[1.05] mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/55 text-[16px] font-light max-w-[520px] mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* ── Bottom wave ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none text-[#FAFAF7] dark:text-slate-950 transition-colors duration-300">
        <svg viewBox="0 0 1440 40" fill="none">
          <path d="M0 40V20C360 0 1080 0 1440 20V40H0Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
