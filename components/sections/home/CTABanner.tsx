import Link from "next/link";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { doctor } from "@/data/site";

export function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-azure via-azure-dark to-[#0a2a5c]" />
      {/* Circles */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/[0.04] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-white/[0.04] rounded-full" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-[clamp(28px,4vw,50px)] font-semibold text-white leading-[1.1] mb-4">
              Take the First Step Toward
              <br />
              <em className="font-normal text-azure-100">Better Breathing</em>
            </h2>
            <p className="text-white/60 text-[16px] font-light leading-relaxed mb-10 max-w-[520px] mx-auto">
              Whether it's a persistent cough, breathlessness, or a concern
              about TB — don't delay. Expert care is just one call away.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={`tel:${doctor.phone}`}
                className="group flex items-center gap-2.5 px-7 py-4 bg-white text-azure rounded-2xl text-[15px] font-semibold hover:bg-azure-50 transition-all shadow-lg hover:-translate-y-0.5"
              >
                <Phone className="w-4.5 h-4.5" />
                Call: {doctor.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="group flex items-center gap-2.5 px-7 py-4 bg-white/[0.1] border border-white/25 text-white rounded-2xl text-[15px] font-medium hover:bg-white/[0.18] transition-all"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/45 text-[13px]">
              <MapPin className="w-3.5 h-3.5" />
              {doctor.address}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
