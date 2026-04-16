"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Award, Star, ShieldCheck } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useCallback, useEffect, useState } from "react";
import { doctor } from "@/data/site";

/* ─── Animation Variants ─── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const slideRight = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ─── FloatCard wrapper ─────────────────────────────────
   • CSS keyframe animation (not Framer Motion repeat)
     guarantees reliable staggered infinite float.
   • Each card gets a unique animName to avoid keyframe
     collision when multiple FloatCards share the page.
   • cardClassName carries all glass/shadow visuals;
     the outer div is a pure transparent position wrapper.
──────────────────────────────────────────────────── */
function FloatCard({
  children,
  cardClassName = "",
  animName,
  duration = 6,
  delayMs = 0,
  amplitude = 10,
  driftX = 0,
  scaleBack = false,
}: {
  children: React.ReactNode;
  cardClassName?: string;
  animName: string;
  duration?: number;
  delayMs?: number;
  amplitude?: number;
  driftX?: number;
  scaleBack?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const baseScale = scaleBack ? "scale(0.93) " : "";

  return (
    <div
      onMouseEnter={() => isDesktop && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animation: hovered
          ? "none"
          : `${animName} ${duration}s ease-in-out ${delayMs}ms infinite`,
      }}
    >
      <style>{`
        @keyframes ${animName} {
          0%,100% { transform: ${baseScale}translateY(0px) translateX(0px); }
          33%      { transform: ${baseScale}translateY(-${amplitude}px) translateX(${driftX}px); }
          66%      { transform: ${baseScale}translateY(-${Math.round(amplitude * 0.4)}px) translateX(${-driftX}px); }
        }
      `}</style>
      <motion.div
        animate={
          isDesktop && hovered
            ? { scale: 1.07, boxShadow: "0 20px 52px rgba(21,88,176,0.4)" }
            : { scale: scaleBack ? 0.93 : 1, boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }
        }
        transition={{ duration: 0.22, ease: "easeOut" as const }}
        className={cardClassName}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ─── Magnetic Button ─── */
function MagneticButton({
  children,
  className,
  href,
  isAnchor,
  anchorProps,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  isAnchor?: boolean;
  anchorProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const rectRef = useRef<{ cx: number; cy: number } | null>(null);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 22, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 350, damping: 22, mass: 0.5 });

  const handleMouseEnter = useCallback(() => {
    if (!isDesktop || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rectRef.current = {
      cx: rect.left + rect.width / 2,
      cy: rect.top + rect.height / 2,
    };
  }, [isDesktop]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDesktop || !rectRef.current) return;
      const { cx, cy } = rectRef.current;
      x.set((e.clientX - cx) * 0.28);
      y.set((e.clientY - cy) * 0.28);
    },
    [isDesktop, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    rectRef.current = null;
  }, [x, y]);

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div style={isDesktop ? { x: springX, y: springY } : {}}>
        {isAnchor ? (
          <a className={className} {...anchorProps}>
            {children}
          </a>
        ) : (
          <Link href={href!} className={className}>
            {children}
          </Link>
        )}
      </motion.div>
    </div>
  );
}

/* ─── Noise overlay ─── */
const NoiseSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.022] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <filter id="hero-noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.75"
        numOctaves="4"
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#hero-noise)" />
  </svg>
);

/* ─── Hero Section ─── */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#081626]">

      {/* ── BACKGROUND LAYERS ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#081626] via-[#0C1F38] to-[#081626]" />
        {/* Left glow */}
        <div className="absolute -top-[5%] -left-[8%] w-[50vw] h-[60vh] rounded-full bg-azure/[0.13] blur-[150px]" />
        {/* Right glow */}
        <div className="absolute -bottom-[5%] -right-[8%] w-[45vw] h-[55vh] rounded-full bg-teal/[0.09] blur-[130px]" />
        {/* Centre warmth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vh] rounded-full bg-azure/[0.04] blur-[120px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <NoiseSVG />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 pt-20 pb-8">

        {/* TOP TEXT BLOCK — centered */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center mb-4"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/[0.07] border border-white/[0.12] text-white/75 text-[9px] sm:text-[11px] font-medium uppercase tracking-[0.1em] sm:tracking-[0.18em] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-5 max-w-[90vw] sm:max-w-none">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              Accepting New Patients · Cuttack, Odisha
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(30px,4.8vw,60px)] font-semibold text-white leading-[1.06] tracking-tight mb-0 max-w-[820px]"
          >
            I&apos;m{" "}
            <span className="text-azure-200 italic font-normal">
              {doctor.name}
            </span>
            ,
            <br />
            Your Trusted{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Respiratory Specialist.</span>
              <span
                className="absolute bottom-1 left-0 right-0 h-[3px] rounded-full bg-azure/40"
                aria-hidden
              />
            </span>
          </motion.h1>
        </motion.div>

        {/* ── DOCTOR IMAGE ─ PRIMARY FOCAL POINT ── */}
        <div className="relative flex justify-center min-h-[320px] sm:min-h-[540px] lg:min-h-[600px] items-start pt-2">

          {/* Background oval — centred on image */}
          <div
            className="absolute inset-0 m-auto w-[380px] h-[380px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(21,88,176,0.20) 0%, rgba(21,88,176,0.07) 55%, transparent 80%)",
              filter: "blur(4px)",
            }}
          />

          {/* Outer decorative rings — centred */}
          <div className="absolute inset-0 m-auto w-[440px] h-[440px] rounded-full border border-white/[0.05] pointer-events-none" />
          <div className="absolute inset-0 m-auto w-[510px] h-[510px] rounded-full border border-white/[0.025] pointer-events-none" />

          {/* ── FLOATING GLASS CARDS ── */}

          {/* LEFT FRONT — Qualification (front, z-20, mid-left close to shoulder) */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.7 }}
            className="absolute left-[8%] xl:left-[15%] top-[40%] -translate-y-1/2 z-20 w-[172px] hidden lg:block"
          >
            <FloatCard
              animName="floatQual" duration={7} delayMs={800} amplitude={9} driftX={2}
              cardClassName="bg-white/[0.1] backdrop-blur-xl border border-white/[0.18] rounded-2xl p-4 shadow-[0_8px_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none rounded-2xl" />
              <div className="flex items-center gap-2 mb-2 relative z-10">
                <div className="w-7 h-7 rounded-lg bg-azure/25 border border-azure/30 flex items-center justify-center shrink-0">
                  <Award className="w-3.5 h-3.5 text-azure-200" />
                </div>
                <span className="text-[10px] text-white/50 font-medium uppercase tracking-wider">Qualified</span>
              </div>
              <div className="text-[13px] font-semibold text-white leading-tight relative z-10">MBBS, MD</div>
              <div className="text-[11px] text-white/60 font-light mt-0.5 relative z-10">Pulmonary Medicine</div>
              <div className="text-[10px] text-azure-200 font-medium mt-1 relative z-10">SCB Medical College</div>
            </FloatCard>
          </motion.div>

          {/* LEFT BACK — Experience badge (back, z-10, upper-left) */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.85 }}
            className="absolute left-[10%] xl:left-[17%] top-[8%] z-[5] hidden lg:block"
          >
            <FloatCard
              animName="floatExp" duration={5.5} delayMs={0} amplitude={8} driftX={-2} scaleBack
              cardClassName="bg-azure/[0.22] backdrop-blur-xl border border-azure/30 rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(21,88,176,0.25)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] to-transparent pointer-events-none rounded-2xl" />
              <div className="font-display text-[30px] font-bold text-white leading-none relative z-10">10+</div>
              <div className="text-[10px] text-white/70 uppercase tracking-wider mt-1 relative z-10">Years Exp.</div>
            </FloatCard>
          </motion.div>

          {/* RIGHT FRONT — Patient stats (front, z-20, mid-right close to shoulder) */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.75 }}
            className="absolute right-[8%] xl:right-[15%] top-[40%] -translate-y-1/2 z-20 hidden lg:block"
          >
            <FloatCard
              animName="floatRating" duration={4.5} delayMs={400} amplitude={11} driftX={-2}
              cardClassName="bg-white/[0.1] backdrop-blur-xl border border-white/[0.18] rounded-2xl p-4 shadow-[0_8px_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none rounded-2xl" />
              <div className="flex items-center gap-0.5 mb-1.5 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-[13px] font-semibold text-white relative z-10">5,000+ Patients</div>
              <div className="text-[11px] text-white/55 font-light relative z-10">Successfully treated</div>
            </FloatCard>
          </motion.div>

          {/* RIGHT BACK — Certification badge (back, z-10, upper-right) */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.9 }}
            className="absolute right-[10%] xl:right-[17%] top-[8%] z-[5] hidden lg:block"
          >
            <FloatCard
              animName="floatCert" duration={8} delayMs={1400} amplitude={7} driftX={2} scaleBack
              cardClassName="bg-white/[0.08] backdrop-blur-xl border border-white/[0.14] rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none rounded-2xl" />
              <div className="flex items-center gap-2 relative z-10">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/25 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-white">Govt. Certified</div>
                  <div className="text-[10px] text-white/50">MD, Pulmonology</div>
                </div>
              </div>
            </FloatCard>
          </motion.div>

          {/* Doctor Image */}
          <motion.div
            variants={fadeScale}
            initial="hidden"
            animate="show"
            className="relative z-10 w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[560px] -mt-6"
          >
            {/* Halo glow */}
            <div className="absolute -inset-4 rounded-full bg-azure/15 blur-[50px] " />

            <Image
              src="/images/DR-AR.webp"
              alt="Dr. Ashutosh Rout — Best Pulmonologist and TB Chest Specialist in Cuttack, Odisha"
              width={440}
              height={580}
              className="relative w-full h-auto object-contain object-bottom drop-shadow-2xl dark:brightness-90 dark:contrast-105 lg:dark:brightness-100 lg:dark:contrast-100 transition-all duration-300"
              priority={true}
              fetchPriority="high"
              loading="eager"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 460px, 560px"
            />
          </motion.div>
        </div>

        {/* ── DESCRIPTION ─ below image, above CTAs ── */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center text-white/50 text-[14px] sm:text-[15px] font-light leading-relaxed max-w-[520px] mx-auto mt-1 sm:mt-4 mb-4 sm:mb-5 px-4"
        >
          MBBS, MD (Pulmonary Medicine) — SCB Medical College. Expert care for
          Tuberculosis, Asthma, COPD &amp; Bronchiectasis at{" "}
          <span className="text-white/70 font-normal">Sai Shree Health Care</span>
          , Cuttack.
        </motion.p>

        {/* ── CTA BUTTONS ─ below description ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-2"
        >
          <motion.div variants={fadeUp}>
            <MagneticButton
              href="/contact"
              className="group flex items-center justify-center gap-2.5 px-8 py-3.5 bg-azure text-white rounded-2xl text-[14px] font-medium shadow-blue hover:bg-azure-dark transition-colors w-full sm:w-auto"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </MagneticButton>
          </motion.div>
          <motion.div variants={fadeUp}>
            <MagneticButton
              isAnchor
              anchorProps={{ href: `tel:${doctor.phone}` }}
              className="flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white/[0.07] border border-white/[0.14] text-white rounded-2xl text-[14px] font-medium hover:bg-white/[0.12] transition-colors w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              {doctor.phoneDisplay}
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 flex items-center justify-center gap-10 sm:gap-16 py-6 border-t border-white/[0.07] mt-6 mb-8"
        >
          {doctor.stats.slice(0, 3).map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="text-center">
              <div className="font-display text-[26px] sm:text-[30px] font-semibold text-white leading-none">
                {stat.value}
              </div>
              <div className="text-[10px] text-white/40 mt-1.5 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 text-[#FAFAF7] dark:text-slate-950 transition-colors duration-300">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60V30C360 0 720 0 1440 30V60H0Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
