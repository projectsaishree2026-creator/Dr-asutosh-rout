"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, MapPin } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { doctor } from "@/data/site";

const highlights = [
  "MBBS, MD (Pulmonary Medicine) — SCB Medical College",
  "10+ years of focused clinical practice in chest medicine",
  "Expert in TB, Asthma, COPD, Pneumonia & Bronchiectasis",
  "Patient-centred approach with evidence-based treatment",
];

/* ─── Inline keyframes for independent float per card ─── */
const floatStyles = `
  @keyframes floatAboutA {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-8px); }
  }
  @keyframes floatAboutB {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-6px); }
  }
`;

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-32 bg-[#FAFAF7] dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <style>{floatStyles}</style>

      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT: IMAGE COMPOSITION ── */}
          <Reveal direction="left">
            {/* Fixed-height frame on desktop; auto on mobile */}
            <div className="relative h-[480px] sm:h-[540px] lg:h-[620px] flex items-center justify-center">

              {/* ── BACKGROUND GLOW CIRCLE ── */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] rounded-full pointer-events-none z-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(21,88,176,0.10) 0%, rgba(21,88,176,0.04) 55%, transparent 80%)",
                }}
              />

              {/* ── OUTER DECORATIVE RING ── */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[370px] h-[370px] sm:w-[430px] sm:h-[430px] lg:w-[490px] lg:h-[490px] rounded-full border border-azure/[0.08] pointer-events-none z-0" />

              {/* ── PRIMARY IMAGE (transparent PNG — no bg) ── */}
              <div className="relative z-10 w-[260px] sm:w-[300px] lg:w-[340px] shrink-0">
                {/* Halo glow behind doctor */}
                <div className="absolute -inset-6 rounded-full bg-azure/[0.08] blur-[50px] pointer-events-none" />
                <Image
                  src="/images/DR-AR.webp"
                  alt="Dr. Ashutosh Rout — Leading Pulmonary Medicine Specialist in Cuttack and Bhubaneswar, Odisha"
                  width={340}
                  height={480}
                  className="relative w-full h-auto object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
                />
              </div>

              {/* ── SECONDARY IMAGE — clinic / consultation ── */}
              <div className="absolute bottom-4 right-2 sm:right-4 lg:right-0 w-[110px] sm:w-[130px] lg:w-[150px] z-20 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.18)] border-[3px] border-[#FAFAF7] dark:border-slate-950 transition-colors duration-300">
                <Image
                  src="/images/DR-AR-2.webp"
                  alt="Dr. Ashutosh Rout consulting a patient at Sai Shree Health Care, Mangalabag, Cuttack"
                  width={150}
                  height={170}
                  className="w-full h-auto object-cover object-top"
                  sizes="150px"
                />
              </div>

              {/* ── FLOATING CARD A — Experience (top-left, above shoulder) ── */}
              <div
                className="absolute top-[10%] left-0 sm:left-2 z-30 hidden sm:block"
                style={{ animation: "floatAboutA 6s ease-in-out 0ms infinite" }}
              >
                <div className="bg-white/80 dark:bg-slate-900/60 dark:hover:bg-slate-900/80 backdrop-blur-xl border border-white/60 dark:border-white/10 rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 dark:hover:shadow-blue-sm transition-all duration-300">
                  {/* sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-white/5 to-transparent rounded-2xl pointer-events-none" />
                  <div className="font-display text-[28px] font-bold text-ink dark:text-slate-100 leading-none relative">
                    10+
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-0.5 relative">
                    Years of Excellence
                  </div>
                </div>
              </div>

              {/* ── FLOATING CARD B — Clinic tag (top-right) ── */}
              <div
                className="absolute top-[8%] right-0 sm:right-2 z-30 hidden sm:block"
                style={{ animation: "floatAboutB 7.5s ease-in-out 1200ms infinite" }}
              >
                <div className="bg-white/80 dark:bg-slate-900/60 dark:hover:bg-slate-900/80 backdrop-blur-xl border border-white/60 dark:border-white/10 rounded-xl px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:-translate-y-1 dark:hover:shadow-blue-sm transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-white/5 to-transparent rounded-xl pointer-events-none" />
                  <div className="flex items-center gap-1.5 relative">
                    <div className="w-5 h-5 rounded-md bg-azure/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-2.5 h-2.5 text-azure" />
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-400 leading-none mb-0.5">Clinic</div>
                      <div className="text-[11px] font-semibold text-ink dark:text-slate-100 leading-none whitespace-nowrap">
                        Sai Shree Health Care
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── FLOATING CARD C — Qualification (bottom-left) ── */}
              <div
                className="absolute bottom-[14%] left-0 sm:left-1 z-30 hidden sm:block"
                style={{ animation: "floatAboutA 8s ease-in-out 600ms infinite" }}
              >
                <div className="bg-azure/90 backdrop-blur-xl border border-azure/40 rounded-xl px-3.5 py-2.5 shadow-[0_8px_32px_rgba(21,88,176,0.25)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] to-transparent rounded-xl pointer-events-none" />
                  <div className="flex items-center gap-1.5 relative">
                    <Award className="w-3.5 h-3.5 text-white/80 shrink-0" />
                    <div>
                      <div className="text-[11px] font-semibold text-white leading-none">MBBS, MD</div>
                      <div className="text-[9px] text-white/60 mt-0.5 leading-none">Pulm. Medicine</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── MOBILE STATS STRIP (only on xs, cards hidden above sm) ── */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:hidden z-30">
                <div className="bg-white/90 dark:bg-slate-900 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-md border border-slate-100 dark:border-slate-800 text-center">
                  <div className="font-display text-[22px] font-bold text-ink dark:text-slate-100 leading-none">10+</div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 mt-0.5">Yrs Exp.</div>
                </div>
                <div className="bg-azure text-white rounded-2xl px-4 py-2.5 shadow-md text-center">
                  <div className="font-display text-[22px] font-bold leading-none">5K+</div>
                  <div className="text-[9px] uppercase tracking-wider text-white/70 mt-0.5">Patients</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── RIGHT: CONTENT ── */}
          <Reveal delay={0.15}>
            <SectionLabel>About Dr. Rout</SectionLabel>

            <h2 className="font-display text-[clamp(28px,3.5vw,46px)] font-semibold text-ink dark:text-slate-100 leading-[1.1] mb-5 transition-colors duration-300">
              Dedicated to Your
              <br />
              <em className="font-normal text-azure dark:text-azure-400">Respiratory Wellbeing</em>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-[16px] font-light leading-relaxed mb-6 transition-colors duration-300">
              {doctor.bio}
            </p>

            <ul className="space-y-3 mb-8 transition-colors duration-300">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal dark:text-teal-400 mt-0.5 shrink-0" />
                  <span className="text-[14.5px] text-slate-700 dark:text-slate-300 font-light">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-azure font-medium text-[14px] hover:gap-3 transition-all"
            >
              Read Full Biography
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
