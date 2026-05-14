import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { doctor } from "@/data/site";
import dynamic from "next/dynamic";

const DynamicStickyContact = dynamic(() => import("@/components/layout/StickyContact").then((mod) => mod.StickyContact));
const DynamicCustomCursor = dynamic(() => import("@/components/ui/CustomCursor").then((mod) => mod.CustomCursor));

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

/* ─── SEO: JSON-LD Structured Data ─── */
const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: doctor.name,
  url: "https://www.drasutoshrout.com",
  image: "https://www.drasutoshrout.com/images/DR-AR.webp",
  description:
    "Dr. Asutosh Rout is a leading Pulmonologist and T.B. Chest Specialist based at Sai shree polyclinic, Cuttack, Odisha. Expert in Tuberculosis, Asthma, COPD, Pneumonia, Bronchiectasis and respiratory emergencies.",
  telephone: doctor.phone,
  email: doctor.email,
  medicalSpecialty: "Pulmonology",
  qualification: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "MBBS",
      recognizedBy: {
        "@type": "EducationalOrganization",
        name: "SCB Medical College, Cuttack",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "MD (Pulmonary Medicine)",
      recognizedBy: {
        "@type": "EducationalOrganization",
        name: "SCB Medical College, Cuttack",
      },
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Shreema Hospital, Ring Road, Mangalabag",
    addressLocality: "Cuttack",
    addressRegion: "Odisha",
    postalCode: "753001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.4625,
    longitude: 85.8672,
  },
  areaServed: [
    { "@type": "City", name: "Cuttack" },
    { "@type": "City", name: "Bhubaneswar" },
    { "@type": "State", name: "Odisha" },
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "Tuberculosis (TB) Treatment" },
    { "@type": "MedicalProcedure", name: "Asthma Treatment & Management" },
    { "@type": "MedicalProcedure", name: "COPD Management" },
    { "@type": "MedicalProcedure", name: "Pneumonia Treatment" },
    { "@type": "MedicalProcedure", name: "Bronchiectasis Treatment" },
    { "@type": "MedicalProcedure", name: "Respiratory Emergency Management" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "13:00",
      description: "By appointment only",
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://www.drasutoshrout.com/#clinic",
  name: "Sai shree polyclinic",
  alternateName: "Sai shree polyclinic — Pulmonology Clinic",
  url: "https://www.drasutoshrout.com",
  telephone: doctor.phone,
  email: doctor.email,
  image: "https://www.drasutoshrout.com/images/DR-AR.webp",
  description:
    "Sai shree polyclinic is a specialised pulmonology clinic in Cuttack, Odisha, led by Dr. Asutosh Rout (MBBS, MD). Offering expert treatment for TB, Asthma, COPD, Pneumonia, Bronchiectasis and respiratory emergencies to patients from Cuttack, Bhubaneswar and across Odisha.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Shreema Hospital, Ring Road, Mangalabag",
    addressLocality: "Cuttack",
    addressRegion: "Odisha",
    postalCode: "753001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.4625,
    longitude: 85.8672,
  },
  areaServed: [
    { "@type": "City", name: "Cuttack" },
    { "@type": "City", name: "Bhubaneswar" },
    { "@type": "State", name: "Odisha" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
      },
  ],
  priceRange: "₹₹",
  medicalSpecialty: "Pulmonology",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dr. Asutosh Rout — Pulmonologist & T.B. Chest Specialist",
  url: "https://www.drasutoshrout.com",
  description:
    "Official website of Dr. Asutosh Rout, MBBS, MD (Pulmonary Medicine). Best Pulmonologist in Cuttack & Bhubaneswar, Odisha. Expert treatment for TB, Asthma, COPD, Pneumonia & Bronchiectasis.",
  publisher: {
    "@type": "Organization",
    name: "Sai shree polyclinic",
    url: "https://www.drasutoshrout.com",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.drasutoshrout.com/blogs?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

/* ─── Root Metadata ─── */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.drasutoshrout.com"),
  title: {
    template: "%s | Dr. Asutosh Rout – Pulmonologist in Cuttack, Odisha",
    default:
      "Best Pulmonologist in Cuttack & Bhubaneswar | Dr. Asutosh Rout – TB, Asthma & COPD Specialist",
  },
  description:
    "Consult Dr. Asutosh Rout (MBBS, MD) — Cuttack's leading chest specialist. Expert treatment for Tuberculosis, Asthma, COPD, Pneumonia & Bronchiectasis at Sai shree polyclinic. Book your appointment today.",
  keywords: [
    "pulmonologist in Cuttack",
    "chest specialist Cuttack",
    "TB doctor Cuttack",
    "best pulmonologist Bhubaneswar",
    "chest specialist Bhubaneswar",
    "asthma specialist Odisha",
    "COPD treatment Cuttack",
    "pulmonologist near me",
    "asthma doctor near me",
    "Dr Asutosh Rout",
    "Dr Asutosh Rout",
    "Sai shree polyclinic",
    "tuberculosis treatment Odisha",
    "lung specialist Cuttack",
    "respiratory specialist Bhubaneswar",
    "pneumonia treatment Cuttack",
    "bronchiectasis specialist Odisha",
    "breathing problem doctor Cuttack",
    "TB treatment Bhubaneswar",
    "COPD specialist Odisha",
  ],
  authors: [{ name: "Dr. Asutosh Rout", url: "https://www.drasutoshrout.com" }],
  creator: "Dr. Asutosh Rout",
  publisher: "Sai shree polyclinic",
  alternates: {
    canonical: "https://www.drasutoshrout.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Dr. Asutosh Rout – Sai shree polyclinic",
    title:
      "Best Pulmonologist in Cuttack & Bhubaneswar | Dr. Asutosh Rout – TB, Asthma & COPD Specialist",
    description:
      "Expert pulmonary care for Tuberculosis, Asthma, COPD, Pneumonia & Bronchiectasis. Sai shree polyclinic, Cuttack & Bhubaneswar, Odisha. Book your appointment now.",
    url: "https://www.drasutoshrout.com",
    images: [
      {
        url: "/images/DR-AR.webp",
        width: 440,
        height: 580,
        alt: "Dr. Asutosh Rout — Best Pulmonologist in Cuttack and Bhubaneswar, Odisha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dr. Asutosh Rout | Best Pulmonologist in Cuttack & Bhubaneswar",
    description:
      "MBBS, MD (Pulmonary Medicine). Expert treatment for TB, Asthma, COPD & Pneumonia at Sai shree polyclinic, Cuttack.",
    images: ["/images/DR-AR.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Health",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable} ${playfair.variable}`}>
      <head>
      
      <meta name="google-site-verification" content="V8dBR1ggADyDF4EHYvW_RQZiJQ-uujSaN3rjzNh5cS8" />
        {/* ── Preconnect for Google Maps (Contact page) ── */}
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        {/* ── LCP Optimization: Preload hero image ── */}
        <link rel="preload" href="/images/DR-AR.webp" as="image" type="image/webp" fetchPriority="high" />
        {/* ── JSON-LD Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased bg-[#FAFAF7] dark:bg-slate-950 text-ink dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <DynamicStickyContact />
        <DynamicCustomCursor />
      </body>
    </html>
  );
}
