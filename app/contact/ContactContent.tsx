"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Mail, CheckCircle2, Send } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { doctor } from "@/data/site";
import { motion } from "framer-motion";

const conditions = [
  "Tuberculosis (T.B.)", "Asthma", "COPD", "Pneumonia",
  "Bronchiectasis", "Breathing Difficulty", "Chronic Cough",
  "Other / General Consultation",
];

/* ── WhatsApp number (country code + number, no + or spaces) ── */
const WA_NUMBER = "917008512773";

function ContactForm() {
  /* ── Controlled field state ── */
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [phone,     setPhone]     = useState("");
  const [condition, setCondition] = useState("");
  const [date,      setDate]      = useState("");
  const [time,      setTime]      = useState("");
  const [message,   setMessage]   = useState("");

  const [error,     setError]     = useState("");
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* ── Validation + WhatsApp redirect ── */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!firstName.trim()) { setError("Please enter your first name."); return; }
    if (!phone.trim())      { setError("Please enter your phone number."); return; }

    setLoading(true);

    /* Build structured WhatsApp message */
    const fullName = [firstName.trim(), lastName.trim()].filter(Boolean).join(" ");
    const text = [
      "Hello, I would like to book an appointment with Dr. Asutosh Rout.",
      "",
      `Name: ${fullName}`,
      `Phone: ${phone.trim()}`,
      condition ? `Condition: ${condition}` : "Condition: Not specified",
      date      ? `Preferred Date: ${date}` : "Preferred Date: Flexible",
      time      ? `Preferred Time: ${time}` : "Preferred Time: Flexible",
      message.trim() ? `Message: ${message.trim()}` : null,
      "",
      "Please confirm my appointment at Sai shree polyclinic.",
    ]
      .filter((line) => line !== null)
      .join("\n");

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

    /* Open WhatsApp in new tab, then show success screen */
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  /* ── Success screen (identical to original) ── */
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="font-display text-[24px] font-semibold text-ink dark:text-slate-100 mb-3">
          WhatsApp Opened!
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-[15px] font-light leading-relaxed max-w-[300px] mb-6">
          Your appointment request has been sent via WhatsApp. We will confirm your slot at Sai shree polyclinic shortly.
        </p>
        <a
          href={`tel:${doctor.phone}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-azure text-white rounded-xl text-[14px] font-medium"
        >
          <Phone className="w-4 h-4" /> Call: {doctor.phoneDisplay}
        </a>
      </motion.div>
    );
  }

  /* ── Form ── */
  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>

      {/* Inline validation error */}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[13px] text-red-500 font-medium bg-red-50 border border-red-100 rounded-xl px-4 py-2.5"
        >
          {error}
        </motion.p>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11.5px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider transition-colors duration-300">
            First Name *
          </label>
          <input
            type="text"
            required
            placeholder="Ramesh"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-[14px] text-ink dark:text-slate-100 placeholder:text-slate-300 dark:placeholder:text-slate-500 focus:outline-none focus:border-azure focus:bg-white dark:focus:bg-slate-800 transition-colors"
          />
        </div>
        <div>
          <label className="block text-[11.5px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider transition-colors duration-300">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Panda"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-[14px] text-ink dark:text-slate-100 placeholder:text-slate-300 dark:placeholder:text-slate-500 focus:outline-none focus:border-azure focus:bg-white dark:focus:bg-slate-800 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-[11.5px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider transition-colors duration-300">
          Phone Number *
        </label>
        <input
          type="tel"
          required
          placeholder="+91 98765 43210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-[14px] text-ink dark:text-slate-100 placeholder:text-slate-300 dark:placeholder:text-slate-500 focus:outline-none focus:border-azure focus:bg-white dark:focus:bg-slate-800 transition-colors"
        />
      </div>

      <div>
        <label className="block text-[11.5px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider transition-colors duration-300">
          Condition / Reason
        </label>
        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-[14px] text-ink dark:text-slate-100 focus:outline-none focus:border-azure focus:bg-white dark:focus:bg-slate-800 transition-colors"
        >
          <option value="">Select a condition...</option>
          {conditions.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11.5px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider transition-colors duration-300">
            Preferred Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-[14px] text-ink dark:text-slate-100 focus:outline-none focus:border-azure focus:bg-white dark:focus:bg-slate-800 transition-colors"
          />
        </div>
        <div>
          <label className="block text-[11.5px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider transition-colors duration-300">
            Preferred Time
          </label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-[14px] text-ink dark:text-slate-100 focus:outline-none focus:border-azure focus:bg-white dark:focus:bg-slate-800 transition-colors"
          >
            <option value="">Flexible</option>
            <option value="Morning (9 AM – 2 PM)">Morning (9 AM – 2 PM)</option>
            <option value="Evening (2 PM – 6 PM)">Evening (2 PM – 6 PM)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[11.5px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider transition-colors duration-300">
          Message (Optional)
        </label>
        <textarea
          rows={3}
          placeholder="Brief description of your symptoms..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-[14px] text-ink dark:text-slate-100 placeholder:text-slate-300 dark:placeholder:text-slate-500 focus:outline-none focus:border-azure focus:bg-white dark:focus:bg-slate-800 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2.5 py-4 bg-azure text-white rounded-xl text-[15px] font-semibold hover:bg-azure-dark disabled:opacity-60 transition-all shadow-blue-sm hover:shadow-blue hover:-translate-y-0.5 disabled:translate-y-0"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Opening WhatsApp...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Request via WhatsApp
          </>
        )}
      </button>

      <p className="text-center text-[12px] text-slate-400 dark:text-slate-500 font-light transition-colors duration-300">
        Or call:{" "}
        <a href={`tel:${doctor.phone}`} className="text-azure font-medium">
          {doctor.phoneDisplay}
        </a>
      </p>
    </form>
  );
}


export function ContactContent() {
  const infoItems = [
    { icon: MapPin, label: "Address", content: <span className="text-slate-600 dark:text-slate-300 text-[15px] font-light leading-relaxed transition-colors duration-300">{doctor.clinicName}<br />{doctor.address}</span> },
    { icon: Phone, label: "Phone", content: <a href={`tel:${doctor.phone}`} className="text-azure dark:text-azure-400 text-[15px] font-medium hover:underline transition-colors duration-300">{doctor.phoneDisplay}</a> },
    { icon: Clock, label: "Clinic Hours", content: <span className="text-slate-600 dark:text-slate-300 text-[15px] font-light transition-colors duration-300">Mon – Sat: 9:00 AM – 7:00 PM<br />Sunday: By Appointment Only</span> },
    { icon: Mail, label: "Email", content: <span className="text-slate-600 dark:text-slate-300 text-[15px] font-light transition-colors duration-300">{doctor.email}</span> },
  ];

  return (
    <section className="py-24 bg-[#FAFAF7] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_460px] gap-14 xl:gap-20">
          {/* Info side */}
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(26px,3.5vw,38px)] font-semibold text-ink dark:text-slate-100 leading-[1.1] mb-8 transition-colors duration-300">
                Clinic Information
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 mb-10">
                {infoItems.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-azure/8 dark:bg-azure/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-azure" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1 transition-colors duration-300">{item.label}</div>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              {/* ── Interactive Google Maps embed ── */}
              <div className="relative rounded-[24px] overflow-hidden h-[280px] mb-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-slate-200/60 dark:border-slate-800 group transition-colors duration-300">
                <iframe
                  title="Sai shree polyclinic – Google Maps"
                  src="https://maps.google.com/maps?q=Sai+shree+polyclinic+Cuttack+At-+Kathagola,+Ring+Rd,+near+Shree+Maa,+Cuttack,+Odisha+753110&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
                {/* Branded label overlay — bottom-left, same as old image caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/60 to-transparent px-5 py-4 pointer-events-none">
                  <div className="text-[10px] uppercase tracking-wider text-white/60 mb-0.5">Our Clinic</div>
                  <div className="font-display text-[16px] font-semibold text-white">{doctor.clinicName}</div>
                </div>
                {/* "Open in Maps" pill — top-right, visible on hover */}
                <a
                  href="https://maps.google.com/?q=Sai+shree+polyclinic+Cuttack+At-+Kathagola,+Ring+Rd,+near+Shree+Maa,+Cuttack,+Odisha+753110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-[11px] font-semibold text-ink dark:text-slate-100 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                  aria-label="Open clinic location in Google Maps"
                >
                  <MapPin className="w-3 h-3 text-azure" />
                  Open in Maps
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form side */}
          <Reveal delay={0.15} direction="right">
            <div className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-200/70 dark:border-slate-800 p-8 shadow-card-sm sticky top-24 transition-colors duration-300">
              <h3 className="font-display text-[26px] font-semibold text-ink dark:text-slate-100 mb-1 transition-colors duration-300">Book Appointment</h3>
              <p className="text-slate-400 dark:text-slate-500 text-[13px] font-light mb-7 transition-colors duration-300">Fill in your details — we'll confirm your slot promptly.</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
