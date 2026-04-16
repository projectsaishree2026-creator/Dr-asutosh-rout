"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { navLinks, doctor } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setScrolled(window.scrollY > 20));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navBg =
    !isHome || scrolled
      ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800 shadow-card-sm dark:shadow-none transition-colors duration-300"
      : "bg-transparent transition-colors duration-300";

  const textColor = !isHome || scrolled ? "text-ink dark:text-slate-100" : "text-white";
  const logoColor = !isHome || scrolled ? "text-azure dark:text-azure-400" : "text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ease-out ${navBg}`}
      >
        <div className={`max-w-[1240px] mx-auto px-6 flex items-center transition-all duration-150 ease-out ${scrolled ? "h-[56px]" : "h-[72px]"}`}>
          {/* Logo — flex-1 left */}
          <div className="flex-1 flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`rounded-xl flex items-center justify-center transition-all duration-150 ease-out ${
                scrolled ? "w-7 h-7" : "w-9 h-9"
              } ${
                !isHome || scrolled ? "bg-azure" : "bg-white/20 backdrop-blur"
              }`}
            >
              <svg
                className={`transition-all duration-150 ease-out ${scrolled ? "w-4 h-4" : "w-5 h-5"} ${!isHome || scrolled ? "text-white" : "text-white"}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 3a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H9a1 1 0 110-2h2V7a1 1 0 011-1z" />
              </svg>
            </div>
            <div>
              <div
                className={`font-display font-semibold leading-tight transition-all duration-150 ease-out ${logoColor} ${scrolled ? "text-[13.5px]" : "text-[15px]"}`}
              >
                {doctor.shortName}
              </div>
              <div
                className={`font-medium uppercase tracking-widest transition-all duration-150 ease-out ${
                  !isHome || scrolled ? "text-azure" : "text-white/70"
                } ${scrolled ? "text-[9px]" : "text-[10px]"}`}
              >
                T.B. Chest & Asthma
              </div>
            </div>
          </Link>
          </div>

          {/* Desktop Nav — centered */}
          <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-2 text-[13.5px] font-medium rounded-lg
                    transition-all duration-200 ease-out
                    ${isActive
                      ? !isHome || scrolled
                        /* Scrolled / non-home: azure text + pill bg */
                        ? "text-azure font-semibold bg-azure/[0.07]"
                        /* Hero transparent: white + stronger weight */
                        : "text-white font-semibold"
                      : !isHome || scrolled
                      ? `${textColor} hover:text-azure hover:bg-slate-50 dark:hover:bg-slate-800/50`
                      : `${textColor} hover:text-white/80`
                    }
                  `}
                >
                  {link.label}
                  {/* Animated underline dot for active link */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className={`
                        absolute bottom-0 left-1/2 -translate-x-1/2
                        w-1 h-1 rounded-full
                        ${!isHome || scrolled ? "bg-azure" : "bg-white"}
                      `}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTAs — flex-1 right */}
          <div className="flex-1 hidden lg:flex items-center justify-end gap-2">
            <a
              href={`tel:${doctor.phone}`}
              title={`Call ${doctor.phoneDisplay}`}
              className={`flex items-center gap-1.5 rounded-full text-[13px] font-medium transition-all duration-150 ease-out border hover:scale-[1.03] active:scale-95 ${
                scrolled ? "px-3 py-1.5" : "px-3.5 py-2"
              } ${
                !isHome || scrolled
                  ? "border-azure/25 text-azure bg-azure/5 hover:bg-azure/10"
                  : "border-white/30 text-white bg-white/10 hover:bg-white/20"
              }`}
            >
              <Phone className={`shrink-0 transition-all duration-150 ease-out ${scrolled ? "w-3 h-3" : "w-3.5 h-3.5"}`} />
              <span>Call Now</span>
            </a>
            <Link
              href="/contact"
              className={`bg-azure text-white rounded-xl text-[13px] font-medium hover:bg-azure-dark transition-all duration-150 ease-out shadow-blue-sm hover:shadow-blue hover:-translate-y-0.5 whitespace-nowrap ${
                scrolled ? "px-3.5 py-1.5" : "px-4 py-2"
              }`}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu btn */}
          <button
            className={`lg:hidden p-2 rounded-lg ${textColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed left-0 right-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-card-lg dark:shadow-none lg:hidden transition-all duration-150 ease-out ${scrolled ? "top-[56px]" : "top-[72px]"}`}
          >
            <div className="max-w-[1240px] mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative flex items-center gap-3
                      text-[15px] font-medium py-2.5 px-3 rounded-xl
                      border-b border-slate-100 dark:border-slate-800/50
                      transition-all duration-200 ease-out
                      ${
                        isActive
                          ? "text-azure font-semibold bg-azure/[0.06] border-azure/15"
                          : "text-ink dark:text-slate-200 hover:text-azure dark:hover:text-azure-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                      }
                    `}
                  >
                    {/* Active left-bar accent */}
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] rounded-r-full bg-azure" />
                    )}
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={`tel:${doctor.phone}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-azure/30 text-azure rounded-xl text-[14px] font-medium"
                >
                  <Phone className="w-4 h-4" />
                  Call: {doctor.phoneDisplay}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-4 py-3 bg-azure text-white rounded-xl text-[14px] font-medium"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
