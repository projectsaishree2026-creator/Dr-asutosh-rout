import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, GraduationCap, Briefcase, Award, Phone } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, StaggerParent, StaggerChild } from "@/components/animations/Reveal";
import { CTABanner } from "@/components/sections/home/CTABanner";
import { doctor, services } from "@/data/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About Dr. Ashutosh Rout – Best Chest & TB Specialist in Cuttack, Odisha",
  description:
    "Learn about Dr. Ashutosh Rout — MBBS, MD (Pulmonary Medicine), T.B. Chest & Asthma Specialist with 10+ years experience. Trusted by 5,000+ patients at Sai Shree Health Care, Cuttack. Expert in TB, Asthma, COPD & Pneumonia treatment.",
  alternates: {
    canonical: "https://www.drashutoshrout.com/about",
  },
  openGraph: {
    title: "About Dr. Ashutosh Rout – Leading Pulmonologist in Cuttack, Odisha",
    description: "MBBS, MD (Pulmonary Medicine) from SCB Medical College. 10+ years of expertise in Tuberculosis, Asthma, COPD & respiratory care at Sai Shree Health Care, Cuttack.",
    url: "https://www.drashutoshrout.com/about",
  },
};

const qualifications = [
  {
    icon: GraduationCap,
    degree: "MBBS",
    institution: "SCB Medical College, Cuttack",
    year: "Undergraduate",
  },
  {
    icon: Award,
    degree: "MD — Pulmonary Medicine",
    institution: "SCB Medical College, Cuttack",
    year: "Postgraduate",
  },
  {
    icon: Briefcase,
    degree: "T.B. & Chest Specialist",
    institution: "Government Certified & Registered",
    year: "Practice",
  },
];

const values = [
  { title: "Accuracy First", desc: "Every diagnosis is backed by thorough clinical assessment and appropriate investigations." },
  { title: "Clear Communication", desc: "Dr. Rout ensures every patient fully understands their condition and treatment plan." },
  { title: "Long-Term Partnership", desc: "Beyond acute treatment, Dr. Rout guides patients through long-term management and prevention." },
  { title: "Compassionate Care", desc: "Each patient is treated with dignity, patience, and genuine concern for their wellbeing." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About the Doctor"
        title={<>Meet <em className="font-normal italic">Dr. Asutosh Rout</em></>}
        subtitle="MBBS, MD (Pulmonary Medicine) · T.B. Chest & Asthma Specialist · Sai Shree Health Care, Cuttack"
        bgImage="/images/hero-about.webp"
      />

      {/* Biography */}
      <section className="py-24 bg-[#FAFAF7] dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            <Reveal direction="left">
              <div className="relative">
                <div className="rounded-[32px] overflow-hidden aspect-[4/5]">
                  <Image
                    src="/images/DR-AR-about.webp"
                    alt="Dr. Ashutosh Rout — MBBS MD Pulmonologist and Chest Specialist at Sai Shree Health Care, Cuttack, Odisha"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 540px"
                  />
                </div>
                <div className="absolute bottom-8 -right-5 bg-azure rounded-2xl px-6 py-5 shadow-blue">
                  <div className="font-display text-[40px] font-bold text-white leading-none">10+</div>
                  <div className="text-[11px] text-white/70 uppercase tracking-widest mt-1">Years of Practice</div>
                </div>
                <div className="absolute top-8 -left-5 bg-white dark:bg-slate-900 rounded-2xl px-5 py-4 shadow-card-lg dark:shadow-none border border-transparent dark:border-slate-800 transition-colors duration-300">
                  <div className="text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Treated</div>
                  <div className="font-display text-[22px] font-semibold text-ink dark:text-slate-100">5,000+</div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-500">Patients</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="font-display text-[32px] font-semibold text-ink dark:text-slate-100 leading-[1.1] mb-6 transition-colors duration-300">
                A Pulmonologist Committed to
                <em className="font-normal text-azure dark:text-azure-400"> Your Respiratory Health</em>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-[15.5px] font-light leading-relaxed mb-8 transition-colors duration-300">
                <p>{doctor.bioLong}</p>
                <p>
                  Based at <span className="font-medium text-ink dark:text-slate-200">{doctor.clinicName}</span>, near Shreema Hospital on Ring Road, Mangalabag, Cuttack, the practice is accessible to patients from across the city and surrounding districts.
                </p>
              </div>

              {/* Qualifications timeline */}
              <div className="space-y-4 mb-8">
                {qualifications.map((q, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900/60 dark:hover:bg-slate-900/80 rounded-xl border border-slate-200/60 dark:border-white/10 hover:-translate-y-1 dark:hover:shadow-blue-sm transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-azure/10 flex items-center justify-center shrink-0">
                      <q.icon className="w-5 h-5 text-azure" />
                    </div>
                    <div>
                      <div className="text-[14.5px] font-semibold text-ink dark:text-slate-100">{q.degree}</div>
                      <div className="text-[12.5px] text-slate-500 dark:text-slate-400 font-light">{q.institution}</div>
                      <span className="inline-block mt-1 text-[10.5px] bg-azure/8 text-azure border border-azure/15 px-2 py-0.5 rounded-full font-medium uppercase tracking-wider">
                        {q.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`tel:${doctor.phone}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-azure text-white rounded-2xl text-[14px] font-medium shadow-blue-sm hover:shadow-blue hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-4 h-4" />
                Book a Consultation
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="font-display text-[clamp(26px,3vw,38px)] font-semibold text-ink dark:text-slate-100 transition-colors duration-300">Clinical Values</h2>
              <p className="text-slate-500 dark:text-slate-400 text-[15px] font-light mt-3 max-w-[440px] mx-auto transition-colors duration-300">
                The principles that guide every consultation and every patient relationship.
              </p>
            </div>
          </Reveal>
          <StaggerParent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <StaggerChild key={i}>
                <div className="bg-white dark:bg-slate-900/60 dark:hover:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/70 dark:border-white/10 h-full hover:-translate-y-1 dark:hover:shadow-blue-sm transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-azure flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-ink dark:text-slate-100 mb-2">{v.title}</h3>
                  <p className="text-[13px] text-slate-500 dark:text-slate-400 font-light leading-relaxed">{v.desc}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* Specializations list */}
      <section className="py-20 bg-[#FAFAF7] dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="font-display text-[clamp(26px,3vw,38px)] font-semibold text-ink dark:text-slate-100 transition-colors duration-300">Areas of Expertise</h2>
            </div>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`/services#${s.id}`}
                className="px-5 py-2.5 border border-slate-200 dark:border-slate-800 rounded-2xl text-[14px] text-slate-700 dark:text-slate-300 hover:border-azure dark:hover:border-azure-400 hover:text-azure dark:hover:text-azure-400 hover:bg-azure/5 transition-all duration-300"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
