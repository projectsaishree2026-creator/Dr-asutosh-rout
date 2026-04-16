import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/animations/Reveal";
import { CTABanner } from "@/components/sections/home/CTABanner";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Book Appointment – Dr. Ashutosh Rout | Sai Shree Health Care, Cuttack",
  description:
    "Book your appointment with Dr. Ashutosh Rout — best pulmonologist in Cuttack. Call +91 7008512773 or visit Sai Shree Health Care, Mangalabag, Cuttack. Walk-in Mon–Sat 9 AM–7 PM. Expert TB, Asthma & COPD treatment.",
  alternates: {
    canonical: "https://www.drashutoshrout.com/contact",
  },
  openGraph: {
    title: "Book Appointment – Dr. Ashutosh Rout | Pulmonologist in Cuttack",
    description: "Contact Sai Shree Health Care, Mangalabag, Cuttack. Call +91 7008512773 for TB, Asthma, COPD & Pneumonia consultations.",
    url: "https://www.drashutoshrout.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Get in Touch"
        title={<>Visit <em className="font-normal italic">Sai Shree Health Care</em></>}
        subtitle="Book an appointment, ask a question, or find us on Ring Road, Mangalabag, Cuttack."
        bgImage="/images/hero-contact.webp"
      />
      <ContactContent />
      <CTABanner />
    </>
  );
}
