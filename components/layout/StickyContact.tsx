"use client";

import { Phone } from "lucide-react";
import { doctor } from "@/data/site";

export function StickyContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={`tel:${doctor.phone}`}
        className="flex items-center gap-2.5 px-5 py-3 bg-azure text-white rounded-2xl text-sm font-medium shadow-blue hover:-translate-y-0.5 transition-all"
        aria-label="Call Now"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">Call Now</span>
      </a>
    </div>
  );
}
