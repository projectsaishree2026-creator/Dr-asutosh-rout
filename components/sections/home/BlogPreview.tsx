import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Reveal, StaggerParent, StaggerChild } from "@/components/animations/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { blogs } from "@/data/site";

const categoryColors: Record<string, string> = {
  Tuberculosis: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  Asthma: "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
  COPD: "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
  Pneumonia: "bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300",
};

export function BlogPreview() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <Reveal>
            <SectionLabel>Health Insights</SectionLabel>
            <h2 className="font-display text-[clamp(28px,3.5vw,42px)] font-semibold text-ink dark:text-slate-100 leading-[1.1] transition-colors duration-300">
              Latest Health Tips
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 text-azure dark:text-azure-400 font-medium text-[14px] hover:gap-3 transition-all shrink-0"
            >
              All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <StaggerParent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogs.map((blog) => (
            <StaggerChild key={blog.slug}>
              <Link
                href={`/blogs/${blog.slug}`}
                className="group block bg-white dark:bg-slate-900/60 dark:hover:bg-slate-900/80 rounded-[22px] p-6 border border-slate-200/70 dark:border-white/10 hover:shadow-card dark:hover:shadow-blue-sm hover:border-azure/15 dark:hover:border-azure/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
                      categoryColors[blog.category] || "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {blog.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500">
                    <Clock className="w-3 h-3" />
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="font-display text-[16px] font-semibold text-ink dark:text-slate-100 leading-snug mb-3 group-hover:text-azure dark:group-hover:text-azure-400 transition-colors flex-1 line-clamp-3">
                  {blog.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-[13px] font-light line-clamp-2 mb-5">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11.5px] text-slate-400 dark:text-slate-500">{blog.date}</span>
                  <ArrowRight className="w-4 h-4 text-azure opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
