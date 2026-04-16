import Image from "next/image";
import { GraduationCap, Clock, Heart, Microscope } from "lucide-react";
import { Reveal, StaggerParent, StaggerChild } from "@/components/animations/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { doctor } from "@/data/site";

const features = [
  {
    icon: GraduationCap,
    title: "MD from Premier Institution",
    desc: "Postgraduate degree in Pulmonary Medicine from SCB Medical College — one of Odisha's foremost government medical institutions.",
  },
  {
    icon: Clock,
    title: "A Decade of Clinical Excellence",
    desc: "Over 10 years of hands-on experience diagnosing and managing complex respiratory conditions with outstanding clinical outcomes.",
  },
  {
    icon: Heart,
    title: "Patient-First Philosophy",
    desc: "Every consultation is unhurried and thorough. Dr. Rout explains clearly and builds treatment plans around each patient's unique needs.",
  },
  {
    icon: Microscope,
    title: "Evidence-Based Practice",
    desc: "All diagnoses and treatments follow current clinical guidelines — ensuring patients receive the most effective, up-to-date care.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-ink relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-azure/[0.06] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal/[0.04] rounded-full blur-[80px]" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Content */}
          <div>
            <Reveal>
              <SectionLabel light>Why Choose Dr. Rout</SectionLabel>
              <h2 className="font-display text-[clamp(30px,3.5vw,46px)] font-semibold text-white leading-[1.1] mb-5">
                Your Health is Our
                <br />
                <em className="font-normal text-azure-200">Highest Priority</em>
              </h2>
              <p className="text-white/50 text-[15px] font-light leading-relaxed mb-12">
                Trusted by thousands of patients in Cuttack and across Odisha
                for expert, compassionate, and evidence-based pulmonary care.
              </p>
            </Reveal>

            <StaggerParent className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <StaggerChild key={i}>
                  <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5 hover:bg-white/[0.07] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-azure/20 flex items-center justify-center mb-4">
                      <f.icon className="w-5 h-5 text-azure-200" />
                    </div>
                    <h3 className="text-[14.5px] font-semibold text-white mb-2">
                      {f.title}
                    </h3>
                    <p className="text-[13px] text-white/45 font-light leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </StaggerChild>
              ))}
            </StaggerParent>
          </div>

          {/* Image stack */}
          <Reveal direction="right" delay={0.2}>
            <div className="relative h-[560px]">
              {/* Main doctor PNG — transparent cutout, top-right */}
              <div className="absolute top-0 right-0 w-[75%] h-[90%]">
                <Image
                  src="/images/DR-AR-3.webp"
                  alt="Dr. Ashutosh Rout — Trusted Pulmonologist at Sai Shree Health Care, Cuttack, Odisha"
                  fill
                  className="object-contain object-top"
                  sizes="(max-width: 768px) 80vw, 380px"
                  style={{
                    filter: "drop-shadow(0 16px 40px rgba(197, 222, 9, 0.2)) drop-shadow(0 4px 16px rgba(0,0,0,0.35))",
                    display: "block",
                  }}
                />
              </div>
              {/* Secondary doctor PNG — transparent cutout, bottom-left overlap */}
              <div className="absolute bottom-0 left-0 w-[48%] h-[52%]">
                <Image
                  src="/images/DR-AR-1.webp"
                  alt="Dr. Ashutosh Rout providing chest and respiratory consultation in Cuttack"
                  fill
                  className="object-contain object-bottom"
                  sizes="220px"
                  style={{
                    filter: "drop-shadow(0 10px 25px rgba(197, 222, 9, 0.18)) drop-shadow(0 4px 12px rgba(0,0,0,0.3))",
                    display: "block",
                  }}
                />
              </div>
              {/* Clinic badge */}
              <div className="absolute top-1/2 right-[-16px] -translate-y-1/2 bg-azure rounded-2xl px-5 py-4 shadow-blue text-center">
                <div className="text-[10px] text-white/70 uppercase tracking-widest mb-1">
                  Clinic
                </div>
                <div className="font-display text-[15px] font-semibold text-white leading-snug">
                  Sai Shree
                  <br />
                  Health Care
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats bar */}
        <Reveal delay={0.3}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {doctor.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-ink px-8 py-7 text-center hover:bg-white/[0.03] transition-colors"
              >
                <div className="font-display text-[36px] font-semibold text-white leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] text-white/35 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
