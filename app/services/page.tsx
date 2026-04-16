import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Wind, Shield, Activity, Zap, Layers, AlertCircle, CheckCircle2, Phone } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, StaggerParent, StaggerChild } from "@/components/animations/Reveal";
import { CTABanner } from "@/components/sections/home/CTABanner";
import { services, doctor } from "@/data/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Pulmonology Services – TB, Asthma, COPD Treatment in Cuttack & Bhubaneswar",
  description:
    "Comprehensive chest & respiratory care — Tuberculosis, Asthma, COPD, Pneumonia, Bronchiectasis & Asphyxia treatment by Dr. Ashutosh Rout at Sai Shree Health Care, Cuttack, Odisha. Book your consultation today.",
  alternates: {
    canonical: "https://www.drashutoshrout.com/services",
  },
  openGraph: {
    title: "Expert Pulmonology Services in Cuttack | Dr. Ashutosh Rout",
    description: "Specialised treatment for TB, Asthma, COPD, Pneumonia, Bronchiectasis & respiratory emergencies. Evidence-based care at Sai Shree Health Care, Cuttack.",
    url: "https://www.drashutoshrout.com/services",
  },
};

/* ── Icon map ── */
const iconMap: Record<string, React.ElementType> = {
  shield: Shield, wind: Wind, activity: Activity,
  zap: Zap, layers: Layers, "alert-circle": AlertCircle,
};

/* ── Image map ── */
const imageMap: Record<string, string> = {
  tuberculosis:   "/images/service-tuberculosis.webp",
  asthma:         "/images/service-asthma.webp",
  copd:           "/images/service-copd.webp",
  pneumonia:      "/images/service-pneumonia.webp",
  bronchiectasis: "/images/service-bronchiectasis.webp",
  asphyxia:       "/images/service-asphyxia.webp",
};

/* ── Accent/check colours ── */
const accentMap: Record<string, string> = {
  blue: "bg-azure",
  teal: "bg-teal",
};
const checkMap: Record<string, string> = {
  blue: "text-azure-200",
  teal: "text-teal-300",
};

export default function ServicesPage() {
  /* ── MedicalCondition JSON-LD Structured Data ── */
  const medicalConditionsSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Pulmonology Services – Dr. Ashutosh Rout",
    url: "https://www.drashutoshrout.com/services",
    description:
      "Comprehensive chest & respiratory care — Tuberculosis, Asthma, COPD, Pneumonia, Bronchiectasis & Asphyxia treatment by Dr. Ashutosh Rout at Sai Shree Health Care, Cuttack.",
    mainEntity: services.map((service) => ({
      "@type": "MedicalCondition",
      name: service.title,
      description: service.desc,
      possibleTreatment: service.details.map((detail) => ({
        "@type": "MedicalTherapy",
        name: detail,
      })),
      associatedAnatomy: {
        "@type": "AnatomicalStructure",
        name: "Lungs and Respiratory System",
      },
    })),
  };

  return (
    <>
      {/* MedicalCondition JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionsSchema) }}
      />
      <PageHeader
        label="Our Services"
        title={<>Comprehensive <em className="font-normal italic">Pulmonary Care</em></>}
        subtitle="Expert diagnosis and treatment for the full range of chest and respiratory conditions — from common to complex."
        bgImage="/images/hero-services.webp"
      />

      {/* ── SERVICES GRID ── */}
      <section className="py-24 bg-[#FAFAF7] dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-[1240px] mx-auto px-6">

          {/* 3-col desktop / 2-col tablet / 1-col mobile */}
          <StaggerParent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {services.map((service) => {
              const Icon   = iconMap[service.icon] || Shield;
              const img    = imageMap[service.id]  || "/images/doctor-clinic.webp";
              const acc    = accentMap[service.color] ?? "bg-azure";
              const chkClr = checkMap[service.color]  ?? "text-azure-200";

              return (
                <StaggerChild key={service.id}>
                  {/*
                    Wrapper div:
                      - `group` drives ALL child hover states
                      - overflow-hidden clips the zooming image
                      - lift + shadow grow on hover via Tailwind variants
                  */}
                  <div
                    id={service.id}
                    tabIndex={0}
                    className="
                      group relative focus:outline-none [-webkit-tap-highlight-color:transparent]
                      rounded-[26px] overflow-hidden
                      border border-white/[0.06]
                      shadow-[0_4px_24px_rgba(0,0,0,0.10)]
                      hover:shadow-[0_24px_64px_rgba(0,0,0,0.24)] focus:shadow-[0_24px_64px_rgba(0,0,0,0.24)] focus-within:shadow-[0_24px_64px_rgba(0,0,0,0.24)]
                      hover:-translate-y-2 focus:-translate-y-2 focus-within:-translate-y-2
                      transition-all duration-500 ease-out
                      cursor-pointer scroll-mt-24
                    "
                    style={{ aspectRatio: "3/4" }}
                  >
                    {/* Removed full-card invisible link to prevent whole card from being clickable */}

                    {/* ── Background image ── */}
                    <Image
                      src={img}
                      alt={`${service.title} treatment by Dr. Ashutosh Rout — Pulmonologist in Cuttack, Odisha`}
                      fill
                      className="
                        object-cover object-center
                        transition-transform duration-700
                        ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                        group-hover:scale-[1.08] group-focus:scale-[1.08] group-focus-within:scale-[1.08]
                      "
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />

                    {/* Permanent overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/30 to-black/05 pointer-events-none" />
                    {/* Hover deepener */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* ── Specialization pill — top-left ── */}
                    <div className="absolute top-4 left-4 z-20 pointer-events-none">
                      <span className="text-[9px] font-semibold uppercase tracking-widest text-white/60 bg-white/[0.12] backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/[0.15]">
                        Specialization
                      </span>
                    </div>

                    {/* ── Icon badge — top-right ── */}
                    <div className={`
                      absolute top-4 right-4 z-20
                      w-9 h-9 rounded-xl
                      flex items-center justify-center
                      ${acc} backdrop-blur-md
                      shadow-[0_2px_12px_rgba(0,0,0,0.3)]
                      group-hover:scale-110 group-focus:scale-110 group-focus-within:scale-110
                      transition-transform duration-300
                      pointer-events-none
                    `}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    {/* ── Bottom text block ── */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-6 pointer-events-none">

                      {/* Title — always visible */}
                      <h2 className="font-display text-[21px] sm:text-[22px] font-bold text-white leading-snug drop-shadow-sm">
                        {service.title}
                      </h2>

                      {/* Description + bullets — expand on hover via max-h */}
                      <div className="overflow-hidden max-h-0 group-hover:max-h-[260px] group-focus:max-h-[260px] group-focus-within:max-h-[260px] transition-[max-height] duration-500 ease-out">
                        <p className="text-white/60 text-[13px] font-light leading-relaxed mt-2.5 mb-3 max-w-[95%]">
                          {service.desc}
                        </p>
                        <ul className="space-y-1.5 mb-4">
                          {service.details.slice(0, 3).map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${chkClr}`} />
                              <span className="text-[12px] text-white/60 font-light leading-snug">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA — always visible, brightens on hover */}
                      <Link href="/contact" className="inline-flex items-center gap-1.5 group-hover:gap-2.5 group-focus:gap-2.5 group-focus-within:gap-2.5 mt-3 transition-all duration-300 pointer-events-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure rounded-md pr-2">
                        <Phone className="w-3 h-3 text-white/45 group-hover:text-white group-focus:text-white group-focus-within:text-white transition-colors duration-300" />
                        <span className="text-[11.5px] font-semibold text-white/45 group-hover:text-white group-focus:text-white group-focus-within:text-white transition-colors duration-300">
                          Book Appointment
                        </span>
                      </Link>
                    </div>
                  </div>
                </StaggerChild>
              );
            })}
          </StaggerParent>
        </div>
      </section>

      {/* ── HOW A CONSULTATION WORKS ── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="font-display text-[clamp(26px,3vw,38px)] font-semibold text-ink dark:text-slate-100 mb-3 transition-colors duration-300">
                How a Consultation Works
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-[15px] font-light max-w-[440px] mx-auto transition-colors duration-300">
                A clear, structured process from first contact to ongoing care.
              </p>
            </div>
          </Reveal>
          <StaggerParent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Book Appointment", desc: "Call or fill the online form. We confirm your slot within hours." },
              { step: "02", title: "Clinical Assessment", desc: "Dr. Rout conducts a thorough history and physical examination." },
              { step: "03", title: "Investigations", desc: "Appropriate tests ordered — spirometry, X-ray, sputum, or more." },
              { step: "04", title: "Treatment Plan", desc: "A personalised plan with clear goals, medications, and follow-up schedule." },
            ].map((step, i) => (
              <StaggerChild key={i}>
                <div className="bg-white dark:bg-slate-900/60 dark:hover:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/70 dark:border-white/10 relative overflow-hidden hover:-translate-y-1 dark:hover:shadow-blue-sm transition-all duration-300">
                  <div className="font-display text-[64px] font-bold text-slate-100 dark:text-slate-800/80 leading-none absolute -top-2 -right-2 select-none">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-9 h-9 rounded-xl bg-azure flex items-center justify-center mb-4">
                      <span className="text-white text-[13px] font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-[15px] font-semibold text-ink dark:text-slate-100 mb-2">{step.title}</h3>
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
