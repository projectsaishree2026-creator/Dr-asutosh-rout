import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Phone } from "lucide-react";
import { CTABanner } from "@/components/sections/home/CTABanner";
import { blogs, doctor } from "@/data/site";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | Dr. Ashutosh Rout – Pulmonologist in Cuttack`,
    description: `${blog.excerpt} Expert guidance by Dr. Ashutosh Rout, MBBS, MD — leading pulmonologist in Cuttack, Odisha.`,
    alternates: {
      canonical: `https://www.drashutoshrout.com/blogs/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      url: `https://www.drashutoshrout.com/blogs/${slug}`,
      publishedTime: blog.date,
      authors: [doctor.name],
      section: blog.category,
    },
    keywords: [
      blog.category.toLowerCase(),
      `${blog.category.toLowerCase()} treatment Cuttack`,
      `${blog.category.toLowerCase()} specialist Odisha`,
      "pulmonologist Cuttack",
      "Dr Ashutosh Rout",
      "chest specialist Bhubaneswar",
    ],
  };
}

const blogContent: Record<string, string[]> = {
  "understanding-tuberculosis": [
    "Tuberculosis (T.B.) remains a significant public health challenge in India, including in Odisha. Despite being both preventable and curable, it continues to affect millions of people every year. Understanding the disease — its causes, symptoms, and treatment — is the first step toward protecting yourself and your family.",
    "T.B. is caused by the bacterium Mycobacterium tuberculosis, which primarily affects the lungs (pulmonary T.B.) but can also involve other organs including lymph nodes, spine, kidneys, and brain (extra-pulmonary T.B.). It spreads through the air when an infected person coughs, sneezes, or speaks, releasing tiny droplets containing the bacteria.",
    "The most common symptoms include a persistent cough lasting more than 2–3 weeks, coughing up blood, unexplained weight loss, evening fever and night sweats, and fatigue. If you or a family member experience these symptoms — especially in combination — it is important to seek medical evaluation promptly.",
    "Diagnosis involves a combination of clinical assessment, chest X-ray, sputum tests (including smear microscopy and culture), and in some cases, CT scanning or bronchoscopy. Modern molecular tests such as GeneXpert can also rapidly identify T.B. and detect drug resistance.",
    "The good news is that drug-sensitive T.B. is fully curable with a complete course of anti-tuberculosis therapy under the DOTS (Directly Observed Treatment Short-course) programme. Treatment typically lasts 6 months. It is absolutely critical that patients complete the full course — stopping early can lead to drug-resistant T.B., which is far more difficult and expensive to treat.",
    "If you are concerned about T.B. symptoms or require a consultation, contact Dr. Asutosh Rout at Sai Shree Health Care, Cuttack.",
  ],
  "asthma-management-guide": [
    "Asthma is one of the most common chronic respiratory conditions, affecting people of all ages. Characterised by episodes of wheezing, breathlessness, chest tightness, and coughing — particularly at night or in the early morning — it can significantly affect quality of life if poorly managed. However, with the right approach, the vast majority of asthma patients can achieve excellent control.",
    "Asthma occurs because the airways become inflamed and overly sensitive to various triggers. When exposed to these triggers, the airways narrow, making breathing difficult. Common triggers include dust mites, pollen, pet dander, tobacco smoke, cold air, exercise, respiratory infections, and certain medications such as aspirin.",
    "A key principle in asthma management is distinguishing between controller medications (taken daily to prevent symptoms) and reliever medications (used during acute episodes). Inhaled corticosteroids remain the cornerstone of long-term control. Proper inhaler technique is critical — studies show that up to 70% of patients use inhalers incorrectly, significantly reducing their effectiveness.",
    "Monitoring your symptoms with a peak flow meter or symptom diary, identifying and avoiding personal triggers, and having a written asthma action plan are all essential components of self-management. Regular reviews with Dr. Rout allow treatment to be stepped up or stepped down as needed.",
    "With modern treatment, most patients with asthma can live active, unrestricted lives. Do not accept frequent attacks, disturbed sleep, or limitations on activity as inevitable — these are signs of inadequate control that can be addressed.",
  ],
  "copd-lifestyle-changes": [
    "Chronic Obstructive Pulmonary Disease (COPD) is a progressive lung condition characterised by persistent airflow limitation. It includes emphysema, chronic bronchitis, or a combination of both. While COPD cannot be reversed, its progression can be significantly slowed — and quality of life dramatically improved — through a combination of medical treatment and lifestyle changes.",
    "Smoking cessation is by far the most effective intervention for COPD. Even in advanced disease, stopping smoking slows the decline in lung function and reduces exacerbation frequency. It is never too late to stop. Nicotine replacement therapy, varenicline, and behavioural support can all improve success rates.",
    "Pulmonary rehabilitation — a supervised programme of exercise training, education, and psychological support — is one of the most evidence-based treatments for COPD. It improves exercise tolerance, reduces breathlessness, and decreases hospital admissions. Dr. Rout can guide appropriate referral and tailored exercise recommendations.",
    "Nutrition plays an important but often overlooked role. Many COPD patients are underweight due to the increased energy cost of breathing. A nutrient-dense diet with adequate protein supports muscle strength — including respiratory muscles. Eating smaller, more frequent meals can reduce breathlessness after eating.",
    "Vaccination is strongly recommended: annual influenza vaccination and pneumococcal vaccination significantly reduce the risk of respiratory infections, which are a leading cause of COPD exacerbations. Prompt treatment of exacerbations — with antibiotics and/or oral steroids as appropriate — prevents disease acceleration.",
  ],
  "pneumonia-prevention": [
    "Pneumonia is an infection that inflames the air sacs in one or both lungs. It can range from mild to life-threatening, and it remains a leading cause of hospitalization and death in India, particularly among children under five and adults over 65. Prevention is therefore far more valuable than treatment.",
    "Vaccination is the most powerful tool for pneumonia prevention. The pneumococcal vaccine protects against the most common bacterial cause of pneumonia — Streptococcus pneumoniae — and is recommended for all adults over 65, as well as younger individuals with chronic conditions such as COPD, diabetes, or heart disease. Annual influenza vaccination also indirectly prevents pneumonia by reducing flu-related complications.",
    "Basic hygiene practices — regular hand-washing with soap and water, covering the mouth and nose when coughing or sneezing, and avoiding close contact with sick individuals — significantly reduce transmission of respiratory pathogens.",
    "Avoiding smoking and secondhand smoke is critical. Smoking damages the cilia — tiny hair-like structures that sweep pathogens out of the airway — making smokers far more vulnerable to respiratory infections. In a household where someone smokes, everyone faces increased pneumonia risk.",
    "For high-risk individuals — the elderly, immunocompromised patients, or those with chronic respiratory conditions — regular follow-up with a chest specialist like Dr. Rout enables early identification of risk factors and prompt treatment of early respiratory infections before they progress to full pneumonia.",
  ],
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  const content = blogContent[slug] || [blog.excerpt];
  const related = blogs.filter((b) => b.slug !== slug).slice(0, 2);

  const categoryColors: Record<string, string> = {
    Tuberculosis: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-900/50",
    Asthma: "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-teal-100 dark:border-teal-900/50",
    COPD: "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-900/50",
    Pneumonia: "bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-100 dark:border-rose-900/50",
  };

  /* ── Article JSON-LD Structured Data ── */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: blog.title,
    description: blog.excerpt,
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      "@type": "Person",
      name: doctor.name,
      url: "https://www.drashutoshrout.com/about",
      jobTitle: "Pulmonologist & T.B. Chest Specialist",
      worksFor: {
        "@type": "MedicalBusiness",
        name: "Sai Shree Health Care",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Sai Shree Health Care",
      url: "https://www.drashutoshrout.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.drashutoshrout.com/blogs/${slug}`,
    },
    about: {
      "@type": "MedicalCondition",
      name: blog.category,
    },
  };

  return (
    <>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Header */}
      <section className="pt-32 pb-16 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C2C] via-[#0F2D4A] to-[#0B1C2C]" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-azure/[0.08] rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-[760px] mx-auto px-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-white/50 text-[13px] hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </Link>
          <span className={`inline-block text-[11px] font-semibold px-3 py-1 rounded-full border mb-5 ${categoryColors[blog.category] || "bg-white/10 text-white border-white/20"}`}>
            {blog.category}
          </span>
          <h1 className="font-display text-[clamp(26px,4vw,46px)] font-semibold text-white leading-[1.1] mb-6">
            {blog.title}
          </h1>
          <div className="flex items-center gap-6 text-white/40 text-[13px]">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{blog.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{blog.readTime}</span>
            <span>By {doctor.name}</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-[#FAFAF7] dark:text-slate-950 transition-colors duration-300">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40V20C360 0 1080 0 1440 20V40H0Z" fill="currentColor" /></svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#FAFAF7] dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            <article className="prose prose-slate max-w-none">
              <div className="space-y-6">
                {content.map((para, i) => (
                  <p key={i} className="text-slate-700 dark:text-slate-300 text-[16px] font-light leading-[1.85] transition-colors duration-300">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-12 p-7 bg-azure/6 dark:bg-azure/10 border border-azure/15 dark:border-azure/20 rounded-2xl transition-colors duration-300">
                <h3 className="font-display text-[20px] font-semibold text-ink dark:text-slate-100 mb-3">
                  Need a Consultation?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-[14px] font-light leading-relaxed mb-5">
                  If you have concerns about your respiratory health, Dr. Asutosh Rout is available for consultations at Sai Shree Health Care, Cuttack.
                </p>
                <a
                  href={`tel:${doctor.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-azure text-white rounded-xl text-[14px] font-medium hover:bg-azure-dark transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call: {doctor.phoneDisplay}
                </a>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/70 dark:border-slate-800 p-6 sticky top-24 transition-colors duration-300">
                <h3 className="text-[13px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-5">
                  About the Author
                </h3>
                <div className="text-[14px] font-semibold text-ink dark:text-slate-100 mb-1">{doctor.name}</div>
                <div className="text-[12px] text-azure dark:text-azure-400 mb-3">{doctor.title}</div>
                <p className="text-[12.5px] text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-5">{doctor.qualifications}, {doctor.institution}</p>
                <a href={`tel:${doctor.phone}`} className="flex items-center justify-center gap-2 w-full py-2.5 bg-azure text-white rounded-xl text-[13px] font-medium">
                  <Phone className="w-3.5 h-3.5" /> Book Consultation
                </a>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/70 dark:border-slate-800 p-6 transition-colors duration-300">
                <h3 className="text-[13px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-5">Related Articles</h3>
                <div className="space-y-4">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/blogs/${r.slug}`} className="block group">
                      <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full border mb-1.5 ${categoryColors[r.category] || ""}`}>{r.category}</span>
                      <div className="text-[13px] font-medium text-ink dark:text-slate-100 group-hover:text-azure dark:group-hover:text-azure-400 transition-colors leading-snug line-clamp-2">{r.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
