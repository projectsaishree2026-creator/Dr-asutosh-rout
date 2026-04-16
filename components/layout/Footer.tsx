import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { doctor, navLinks, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white dark:border-t dark:border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-xl font-semibold text-white mb-1">
              {doctor.name}
            </div>
            <div className="text-sm text-azure-200 mb-1">{doctor.title}</div>
            <div className="text-xs text-slate-400 mb-5">
              {doctor.qualifications}
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">
              Providing expert, compassionate pulmonary care to patients in Cuttack, Bhubaneswar, and across Odisha. Your respiratory health is our highest priority.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${doctor.phone}`}
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-azure-400 shrink-0" />
                {doctor.phoneDisplay}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-azure-400 shrink-0 mt-0.5" />
                <span>{doctor.address}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
              Specializations
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors font-light"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
              Visit Us
            </h3>
            <div className="space-y-6">
              <address
                className="space-y-4 not-italic relative"
                itemScope
                itemType="https://schema.org/MedicalBusiness"
              >
                <span className="hidden" itemProp="name">{doctor.clinicName}</span>
                <span className="hidden" itemProp="medicalSpecialty">Pulmonology</span>
                <span className="hidden" itemProp="telephone">{doctor.phone}</span>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Clinic</div>
                  <div className="text-sm text-slate-300">{doctor.clinicName}</div>
                </div>
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <div className="text-xs text-slate-500 mb-1">Address</div>
                  <div className="text-sm text-slate-300 font-light leading-relaxed">
                    <span itemProp="streetAddress">{doctor.address}</span>
                    <span className="hidden" itemProp="addressLocality">Cuttack</span>
                    <span className="hidden" itemProp="addressRegion">Odisha</span>
                    <span className="hidden" itemProp="addressCountry">IN</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Hours</div>
                  <div className="text-sm text-slate-300 font-light">
                    Mon – Sat: 9:00 AM – 7:00 PM
                    <br />
                    Sunday: By Appointment
                  </div>
                </div>
              </address>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-azure rounded-lg text-sm font-medium text-white hover:bg-azure-dark transition-all"
              >
                Book Appointment →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © 2025 {doctor.name} · {doctor.clinicName} · All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            T.B. Chest & Asthma Specialist · Cuttack, Odisha
          </p>
        </div>
      </div>
    </footer>
  );
}
