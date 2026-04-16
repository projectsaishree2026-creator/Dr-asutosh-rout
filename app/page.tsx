import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { BlogPreview } from "@/components/sections/home/BlogPreview";
import { CTABanner } from "@/components/sections/home/CTABanner";

export const metadata: Metadata = {
  title:
    "Best Pulmonologist in Cuttack & Bhubaneswar | Dr. Asutosh Rout – TB, Asthma & COPD Specialist",
  description:
    "Consult Dr. Asutosh Rout (MBBS, MD) — Cuttack's leading pulmonologist and chest specialist. Expert treatment for Tuberculosis, Asthma, COPD, Pneumonia & Bronchiectasis at Sai shree polyclinic. Book appointment: +91 7008512773.",
  alternates: {
    canonical: "https://www.drasutoshrout.com",
  },
  openGraph: {
    title:
      "Best Pulmonologist in Cuttack & Bhubaneswar | Dr. Asutosh Rout",
    description:
      "Expert pulmonary care for TB, Asthma, COPD & Pneumonia. 10+ years experience, 5,000+ patients treated. Sai shree polyclinic, Cuttack, Odisha.",
    url: "https://www.drasutoshrout.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
