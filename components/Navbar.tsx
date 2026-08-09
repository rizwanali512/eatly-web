"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiCalendar } from "react-icons/hi";

const navLinks = [
  { href: "/",             label: "Home" },
  { href: "/menu",         label: "Menu" },
  { href: "/about",        label: "About" },
  { href: "/gallery",      label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact",      label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* ── Announcement bar ── */}
        <div className="bg-gold">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex items-center justify-center sm:justify-between gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-0.5 sm:gap-3 text-center sm:text-left">
              <span className="font-inter text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-background">
                Open Daily &nbsp;·&nbsp; 12:00 PM – 12:00 AM
              </span>
              <span className="hidden sm:inline text-background/40 font-bold">|</span>
              <span className="font-inter text-[9px] sm:text-[10px] font-bold text-background tracking-wide">
                📍 13-S Sharoon Plaza, Rooftop · Jinnah Super, F-7 Markaz, Islamabad
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-background hover:text-background/70 transition-colors" aria-label="Instagram"><FaInstagram size={14} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-background hover:text-background/70 transition-colors" aria-label="Facebook"><FaFacebook size={14} /></a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="text-background hover:text-background/70 transition-colors" aria-label="WhatsApp"><FaWhatsapp size={14} /></a>
            </div>
          </div>
        </div>

        {/* ── Main navbar ── */}
        <div className={`transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="shrink-0 group flex flex-col leading-none">
              <div className="flex items-center gap-1">
                <span className="font-playfair text-2xl lg:text-[26px] font-bold text-gold group-hover:text-gold-light transition-colors tracking-wide">
                  Eatly
                </span>
                <span className="text-gold text-base leading-none mt-0.5">✦</span>
              </div>
              <span className="font-inter text-[8px] tracking-[0.25em] uppercase text-text-muted leading-none mt-0.5">
                Rooftop Dining
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-inter text-[11px] font-semibold tracking-widest uppercase transition-colors duration-200 group pb-1"
                >
                  <span className={pathname === link.href ? "text-gold" : "text-text-muted hover:text-text-primary"}>
                    {link.label}
                  </span>
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gold rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {/* Menu btn */}
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="hidden lg:block">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 border border-white/25 text-text-primary px-5 py-2.5 rounded-full font-inter text-[11px] font-semibold tracking-wider uppercase hover:border-gold/60 hover:text-gold transition-all duration-300 backdrop-blur-sm"
                >
                  <HiMenuAlt3 size={14} />
                  Menu
                </Link>
              </motion.div>

              {/* Reservation btn */}
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="hidden lg:block">
                <Link
                  href="/reservations"
                  className="inline-flex items-center gap-2 bg-gold text-background px-5 py-2.5 rounded-full font-inter text-[11px] font-bold tracking-wider uppercase shadow-brand-glow hover:shadow-brand-glow-lg hover:bg-gold-light transition-all duration-300"
                >
                  Reservation
                  <HiCalendar size={14} />
                </Link>
              </motion.div>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
              >
                <span className={`block h-px w-6 bg-gold transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-px w-6 bg-gold transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-px w-6 bg-gold transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gold/5 blur-[80px]" />
            </div>
            <nav className="relative z-10 flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ delay: i * 0.07, duration: 0.4 }}>
                  <Link href={link.href} className={`font-playfair text-4xl font-medium transition-colors duration-200 ${pathname === link.href ? "text-gold" : "text-text-primary hover:text-gold"}`}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: navLinks.length * 0.07, duration: 0.4 }}>
                <Link href="/reservations" className="mt-4 inline-flex items-center gap-2 bg-gold text-background px-8 py-4 rounded-full font-inter text-sm font-bold tracking-wider uppercase shadow-brand-glow">
                  <HiCalendar size={16} /> Reserve Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
