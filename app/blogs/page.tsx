import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, StaggerParent, StaggerChild } from "@/components/animations/Reveal";
import { CTABanner } from "@/components/sections/home/CTABanner";
import { blogs } from "@/data/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Health Articles on TB, Asthma & COPD | Dr. Ashutosh Rout – Pulmonologist in Cuttack",
  description:
    "Read expert health articles on Tuberculosis, Asthma, COPD & Pneumonia by Dr. Ashutosh Rout — leading pulmonologist in Cuttack, Odisha. Evidence-based guidance for better respiratory health.",
  alternates: {
    canonical: "https://www.drashutoshrout.com/blogs",
  },
  openGraph: {
    title: "Health Articles & Respiratory Care Tips | Dr. Ashutosh Rout",
    description: "Expert articles on TB, Asthma, COPD & Pneumonia from Cuttack's leading pulmonologist. Learn to manage respiratory conditions effectively.",
    url: "https://www.drashutoshrout.com/blogs",
  },
};

const categoryColors: Record<string, string> = {
  Tuberculosis: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-900/50",
  Asthma: "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-teal-100 dark:border-teal-900/50",
  COPD: "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-900/50",
  Pneumonia: "bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-100 dark:border-rose-900/50",
};

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        label="Health Insights"
        title={<>Latest <em className="font-normal italic">Articles & Tips</em></>}
        subtitle="Evidence-based health information on chest and respiratory conditions, from Dr. Asutosh Rout."
        bgImage="/images/hero-blogs.webp"
      />

      <section className="py-24 bg-[#FAFAF7] dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Featured */}
          <Reveal>
            <div className="mb-8">
              <Link
                href={`/blogs/${blogs[0].slug}`}
                className="group block bg-white dark:bg-slate-900/60 dark:hover:bg-slate-900/80 rounded-[28px] border border-slate-200/70 dark:border-white/10 hover:shadow-card dark:hover:shadow-blue-sm hover:-translate-y-1 hover:border-azure/15 dark:hover:border-azure/30 transition-all duration-300 p-8 lg:p-10 grid lg:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${categoryColors[blogs[0].category] || "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}`}>
                      {blogs[0].category}
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />{blogs[0].readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-[clamp(22px,3vw,32px)] font-semibold text-ink dark:text-slate-100 leading-snug mb-4 group-hover:text-azure dark:group-hover:text-azure-400 transition-colors">
                    {blogs[0].title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-[15px] font-light leading-relaxed mb-6">
                    {blogs[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-azure font-medium text-[14px] group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-azure/8 dark:from-azure/10 to-teal-50 dark:to-teal-900/20 rounded-[20px] h-[220px] lg:h-[280px] flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="font-display text-[56px] text-azure/20 dark:text-azure/40 font-bold leading-none mb-2">T.B.</div>
                    <div className="text-[13px] text-slate-500 dark:text-slate-400 font-light">Featured Article</div>
                  </div>
                </div>
              </Link>
            </div>
          </Reveal>

          {/* All blogs grid */}
          <StaggerParent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.slice(1).map((blog) => (
              <StaggerChild key={blog.slug}>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="group block bg-white dark:bg-slate-900/60 dark:hover:bg-slate-900/80 rounded-[22px] p-7 border border-slate-200/70 dark:border-white/10 hover:shadow-card dark:hover:shadow-blue-sm hover:border-azure/15 dark:hover:border-azure/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${categoryColors[blog.category] || "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}`}>
                      {blog.category}
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />{blog.readTime}
                    </span>
                  </div>

                  <h2 className="font-display text-[18px] font-semibold text-ink dark:text-slate-100 leading-snug mb-3 group-hover:text-azure dark:group-hover:text-azure-400 transition-colors flex-1 line-clamp-3">
                    {blog.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-[13.5px] font-light line-clamp-2 mb-5">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="flex items-center gap-1.5 text-[11.5px] text-slate-400 dark:text-slate-500">
                      <Calendar className="w-3 h-3" />{blog.date}
                    </span>
                    <ArrowRight className="w-4 h-4 text-azure opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
