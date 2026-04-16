import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/animations/Reveal";
import { CTABanner } from "@/components/sections/home/CTABanner";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Book Appointment – Dr. Asutosh Rout | Sai shree polyclinic, Cuttack",
  description:
    "Book your appointment with Dr. Asutosh Rout — best pulmonologist in Cuttack. Call +91 7008512773 or visit Sai shree polyclinic, Mangalabag, Cuttack. Walk-in Mon–Sat 9 AM–7 PM. Expert TB, Asthma & COPD treatment.",
  alternates: {
    canonical: "https://www.drasutoshrout.com/contact",
  },
  openGraph: {
    title: "Book Appointment – Dr. Asutosh Rout | Pulmonologist in Cuttack",
    description: "Contact Sai shree polyclinic, Mangalabag, Cuttack. Call +91 7008512773 for TB, Asthma, COPD & Pneumonia consultations.",
    url: "https://www.drasutoshrout.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Get in Touch"
        title={<>Visit <em className="font-normal italic">Sai shree polyclinic</em></>}
        subtitle="Book an appointment, ask a question, or find us on Ring Road, Mangalabag, Cuttack."
        bgImage="/images/hero-contact.webp"
      />
      <ContactContent />
      <CTABanner />
    </>
  );
}
