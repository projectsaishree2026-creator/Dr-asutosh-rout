"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wind, Shield, Activity, Zap, Layers, AlertCircle } from "lucide-react";
import { Reveal, StaggerParent, StaggerChild } from "@/components/animations/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/site";

/* ── Map service id → image path ── */
const imageMap: Record<string, string> = {
  tuberculosis:   "/images/service-tuberculosis.webp",
  asthma:         "/images/service-asthma.webp",
  copd:           "/images/service-copd.webp",
  pneumonia:      "/images/service-pneumonia.webp",
  bronchiectasis: "/images/service-bronchiectasis.webp",
  asphyxia:       "/images/service-asphyxia.webp",
};

const iconMap: Record<string, React.ElementType> = {
  shield:         Shield,
  wind:           Wind,
  activity:       Activity,
  zap:            Zap,
  layers:         Layers,
  "alert-circle": AlertCircle,
};

const accentMap: Record<string, string> = {
  blue: "bg-azure",
  teal: "bg-teal",
};

export function ServicesOverview() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* ── Section header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
            <h2 className="font-display text-[clamp(30px,3.5vw,46px)] font-semibold text-ink dark:text-slate-100 leading-[1.1] max-w-[400px]">
              Comprehensive
              <br />
              <em className="font-normal text-azure dark:text-azure-400">Pulmonary Care</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-500 dark:text-slate-400 text-[15px] font-light leading-relaxed max-w-[380px]">
              Expert diagnosis and treatment for the full range of chest and
              respiratory conditions — delivered with precision and compassion.
            </p>
          </Reveal>
        </div>

        {/* ── Card grid ── */}
        <StaggerParent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon   = iconMap[service.icon] || Shield;
            const img    = imageMap[service.id]  || "/images/doctor-clinic.webp";
            const accent = accentMap[service.color] ?? "bg-azure";

            return (
              <StaggerChild key={service.id}>
                {/*
                  Wrapper div carries:
                    - overflow-hidden (clips image zoom)
                    - group (for all child hover states)
                    - lift + shadow via hover:* utilities
                */}
                <div
                  onClick={() => setActiveCard(activeCard === service.id ? null : service.id)}
                  className={`group relative rounded-[24px] overflow-hidden [-webkit-tap-highlight-color:transparent]
                    border border-white/[0.06] dark:border-white/10
                    shadow-[0_4px_20px_rgba(0,0,0,0.10)]
                    hover:shadow-[0_20px_56px_rgba(0,0,0,0.22)] group-[.active]:shadow-[0_20px_56px_rgba(0,0,0,0.22)]
                    hover:-translate-y-1.5 group-[.active]:-translate-y-1.5
                    transition-all duration-500 ease-out
                    cursor-pointer ${activeCard === service.id ? 'active' : ''}`}
                  style={{ aspectRatio: "4/3" }}
                >
                  {/* Removed full-card link to prevent whole card hover clickability */}

                  {/* ── Background image ── */}
                  <Image
                    src={img}
                    alt={`${service.title} treatment by Dr. Asutosh Rout — Pulmonologist in Cuttack`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.08] group-[.active]:scale-[1.08]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />

                  {/* ── Overlay: permanent base + hover deepener ── */}
                  {/* Base: strong bottom, fades to transparent at top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
                  {/* Hover layer: adds richness without flattening image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-[.active]:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* ── Icon badge — top right ── */}
                  <div
                    className={`
                      absolute top-4 right-4 z-20
                      w-8 h-8 rounded-lg
                      flex items-center justify-center
                      ${accent}/90 backdrop-blur-md
                      shadow-[0_2px_10px_rgba(0,0,0,0.30)]
                      group-hover:scale-[1.12] group-[.active]:scale-[1.12]
                      transition-transform duration-300 ease-out
                    `}
                  >
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </div>

                  {/* ── Text block ── */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-6 pointer-events-none">

                    {/* Title — always visible, slightly larger + bolder */}
                    <h3 className="font-display text-[20px] sm:text-[22px] font-bold text-white leading-snug drop-shadow-sm">
                      {service.title}
                    </h3>

                    {/* Description — expands on hover via max-h animation */}
                    <div className="overflow-hidden max-h-0 group-hover:max-h-[72px] group-[.active]:max-h-[72px] transition-all duration-500 ease-out">
                      <p className="text-white/65 text-[12.5px] font-light leading-relaxed line-clamp-2 mt-2 max-w-[92%]">
                        {service.desc}
                      </p>
                    </div>

                    {/* CTA row — always visible, arrow nudges right on hover */}
                    <Link
                      href="/contact"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 mt-3 group-hover:gap-2.5 group-[.active]:gap-2.5 transition-all duration-300 pointer-events-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure rounded-md pr-2"
                    >
                      <span className="text-[12px] font-semibold text-white/55 group-hover:text-white group-[.active]:text-white transition-colors duration-300">
                        Book Appointment
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-white/55 group-hover:text-white group-[.active]:text-white group-hover:translate-x-1 group-[.active]:translate-x-1 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </StaggerChild>
            );
          })}
        </StaggerParent>

        {/* ── View all CTA ── */}
        <Reveal delay={0.2}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-2xl text-[14px] font-medium text-ink dark:text-slate-200 hover:border-azure dark:hover:border-azure-400 hover:text-azure dark:hover:text-azure-400 transition-all"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
