import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FileText, Phone, MapPin, Clock, AlertCircle, Heart } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, StaggerParent, StaggerChild } from "@/components/animations/Reveal";
import { CTABanner } from "@/components/sections/home/CTABanner";
import { faqs, doctor, services } from "@/data/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Patient Guide – FAQs, Guidelines & Clinic Info | Dr. Ashutosh Rout, Cuttack",
  description:
    "Everything you need before visiting Dr. Ashutosh Rout — FAQs about TB, Asthma & COPD, patient guidelines, clinic hours, and conditions treated. Sai Shree Health Care, Mangalabag, Cuttack.",
  alternates: {
    canonical: "https://www.drashutoshrout.com/patient-corner",
  },
  openGraph: {
    title: "Patient Corner – FAQs & Guidelines | Sai Shree Health Care, Cuttack",
    description: "Find answers to common questions about pulmonology consultations, clinic hours, and treatment at Sai Shree Health Care, Cuttack.",
    url: "https://www.drashutoshrout.com/patient-corner",
  },
};

const guidelines = [
  { icon: FileText, title: "Carry Previous Records", desc: "Bring all previous reports, X-rays, prescriptions, and investigation results to your first consultation. This significantly aids diagnosis." },
  { icon: AlertCircle, title: "List Your Symptoms", desc: "Note down when symptoms started, their frequency, what makes them better or worse, and any associated factors before your visit." },
  { icon: Heart, title: "Share Full History", desc: "Inform Dr. Rout about all current medications, allergies, existing medical conditions, and any family history of respiratory disease." },
  { icon: Clock, title: "Arrive on Time", desc: "Please arrive 10 minutes before your appointment. For new patients, allocate extra time for registration and initial documentation." },
];

export default function PatientCornerPage() {
  /* ── FAQPage JSON-LD Structured Data ── */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader
        label="Patient Corner"
        title={<>Everything You <em className="font-normal italic">Need to Know</em></>}
        subtitle="Practical guidance, FAQs, and resources to help you prepare for your visit and manage your respiratory health."
        bgImage="/images/hero-patient.webp"
      />

      {/* Quick info */}
      <section className="py-16 bg-[#FAFAF7] dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Phone, label: "Phone", value: doctor.phoneDisplay, link: `tel:${doctor.phone}`, cta: "Call Now" },
              { icon: MapPin, label: "Address", value: doctor.address, link: "#", cta: "Get Directions" },
              { icon: Clock, label: "Clinic Hours", value: "Mon – Sat: 9:00 AM – 7:00 PM", link: "#", cta: "Book Slot" },
              { icon: FileText, label: "Clinic", value: doctor.clinicName, link: "/contact", cta: "Contact Us" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-white dark:bg-slate-900/60 dark:hover:bg-slate-900/80 rounded-2xl border border-slate-200/70 dark:border-white/10 p-6 hover:-translate-y-1 dark:hover:shadow-blue-sm transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-azure/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-azure" />
                  </div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-[13.5px] font-medium text-ink dark:text-slate-100 mb-3 leading-snug">{item.value}</div>
                  <a href={item.link} className="text-[12px] text-azure dark:text-azure-400 font-medium hover:underline flex items-center gap-1">
                    {item.cta} <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Before your visit */}
          <Reveal>
            <h2 className="font-display text-[clamp(24px,3vw,36px)] font-semibold text-ink dark:text-slate-100 mb-8 transition-colors duration-300">
              Before Your Visit
            </h2>
          </Reveal>
          <StaggerParent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {guidelines.map((g, i) => (
              <StaggerChild key={i}>
                <div className="bg-white dark:bg-slate-900/60 dark:hover:bg-slate-900/80 rounded-2xl border border-slate-200/70 dark:border-white/10 p-6 h-full hover:-translate-y-1 dark:hover:shadow-blue-sm transition-all duration-300">
                  <div className="w-11 h-11 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center mb-5">
                    <g.icon className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="text-[14.5px] font-semibold text-ink dark:text-slate-100 mb-2">{g.title}</h3>
                  <p className="text-[13px] text-slate-500 dark:text-slate-400 font-light leading-relaxed">{g.desc}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>

          {/* FAQs */}
          <Reveal>
            <div className="mb-10">
              <h2 className="font-display text-[clamp(24px,3vw,36px)] font-semibold text-ink dark:text-slate-100 mb-3 transition-colors duration-300">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-[15px] font-light transition-colors duration-300">
                Common questions from patients — answered clearly.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4 mb-20">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/70 dark:border-slate-800 p-6 hover:shadow-card-sm dark:hover:shadow-blue-sm transition-all duration-300">
                  <h3 className="font-semibold text-ink dark:text-slate-100 text-[15px] mb-3 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-azure flex items-center justify-center text-white text-[11px] font-bold shrink-0 mt-0.5">
                      Q
                    </span>
                    {faq.q}
                  </h3>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-teal/10 dark:bg-teal-900/30 flex items-center justify-center text-teal dark:text-teal-400 text-[11px] font-bold shrink-0 mt-0.5">
                      A
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 text-[14px] font-light leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Conditions quick reference */}
          <Reveal>
            <div className="mb-8">
              <h2 className="font-display text-[clamp(24px,3vw,36px)] font-semibold text-ink dark:text-slate-100 mb-3 transition-colors duration-300">
                Conditions We Treat
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-[15px] font-light max-w-[480px] transition-colors duration-300">
                Quick links to learn about the specific conditions treated by Dr. Rout.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.04}>
                <Link
                  href={`/services#${s.id}`}
                  className="group flex items-center justify-between p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/70 dark:border-slate-800 hover:border-azure/20 dark:hover:border-azure/30 hover:shadow-card-sm dark:hover:shadow-blue-sm transition-all duration-300"
                >
                  <span className="text-[14.5px] font-medium text-ink dark:text-slate-100 group-hover:text-azure dark:group-hover:text-azure-400 transition-colors">
                    {s.title}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-azure dark:group-hover:text-azure-400 transition-colors" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
