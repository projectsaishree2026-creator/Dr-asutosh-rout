interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}
export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full mb-5 ${
        light
          ? "bg-white/10 text-white/80"
          : "bg-azure/8 text-azure border border-azure/15"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${light ? "bg-white/60" : "bg-azure"}`}
      />
      {children}
    </span>
  );
}
