import { Star, Quote } from "lucide-react";
import { Reveal, StaggerParent, StaggerChild } from "@/components/animations/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFAF7] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <SectionLabel>Patient Stories</SectionLabel>
            <h2 className="font-display text-[clamp(30px,3.5vw,46px)] font-semibold text-ink dark:text-slate-100 leading-[1.1]">
              What Patients Say
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-[15px] font-light mt-4 max-w-[460px] mx-auto leading-relaxed">
              Real experiences from patients who trusted Dr. Rout with their
              respiratory health.
            </p>
          </div>
        </Reveal>

        <StaggerParent className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <StaggerChild key={i}>
              <div className="bg-white dark:bg-slate-900 rounded-[22px] p-6 border border-slate-200/70 dark:border-slate-800 hover:shadow-card dark:hover:shadow-blue-sm transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 dark:text-slate-300 text-[13.5px] font-light leading-relaxed flex-1 mb-6 italic">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100 dark:border-slate-800">
                  <div className="w-9 h-9 rounded-full bg-azure/10 flex items-center justify-center font-display text-[13px] font-semibold text-azure shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[13.5px] font-semibold text-ink dark:text-slate-100">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-slate-400 dark:text-slate-500 font-light">
                      {t.condition}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
