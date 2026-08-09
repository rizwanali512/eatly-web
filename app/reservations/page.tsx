"use client";

import { motion } from "framer-motion";
import ReservationForm from "@/components/ReservationForm";
import PageHero from "@/components/PageHero";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const vp = { once: true, margin: "-80px" } as const;
function fadeUp(delay = 0) {
  return { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: vp, transition: { duration: 0.7, delay } };
}

const glassCard = {
  background: "rgba(255,255,255,0.03)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  boxShadow: "0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.5)",
} as React.CSSProperties;

export default function ReservationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Secure Your Spot"
        title="Book a"
        titleAccent="Table"
        subtitle="Reserve your place at Islamabad's premier rooftop destination. We recommend booking at least 24 hours in advance, especially on weekends."
      />

      <section className="py-20 bg-[#080808] relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/[0.05] blur-[120px] pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-gold/[0.04] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Form — 2/3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl p-8" style={glassCard}>
                <h2 className="font-playfair text-2xl text-white mb-2">Book Your Table</h2>
                <p className="font-inter text-xs text-white/40 mb-8 tracking-wide">All fields marked * are required</p>
                <ReservationForm />
              </div>
            </motion.div>

            {/* Info — 1/3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5"
            >
              {/* Info card */}
              <div className="rounded-2xl p-7" style={glassCard}>
                <h3 className="font-playfair text-xl text-white mb-6">
                  Restaurant <span className="text-gold italic">Info</span>
                </h3>
                <ul className="space-y-5">
                  {[
                    { icon: FaClock,        label: "Opening Hours", value: "12:00 PM – 12:00 AM", sub: "Open Daily" },
                    { icon: FaMapMarkerAlt, label: "Address",       value: "13-S Sharoon Plaza, Rooftop", sub: "Jinnah Super, F-7 Markaz, Islamabad" },
                    { icon: FaPhone,        label: "Phone",         value: "+92 300 123 4567", sub: null },
                  ].map(({ icon: Icon, label, value, sub }) => (
                    <li key={label} className="flex gap-4 items-start group">
                      <div className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                        <Icon className="text-gold" size={14} />
                      </div>
                      <div>
                        <p className="font-inter text-[9px] font-bold tracking-[0.25em] uppercase text-white/35 mb-0.5">{label}</p>
                        <p className="font-inter text-sm text-white">{value}</p>
                        {sub && <p className="font-inter text-xs text-white/40">{sub}</p>}
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/923001234567?text=Hi! I'd like to make a reservation at Eatly Rooftop."
                  target="_blank" rel="noopener noreferrer"
                  className="mt-7 w-full flex items-center justify-center gap-2.5 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] py-3 rounded-xl font-inter text-xs font-bold tracking-widest uppercase hover:bg-[#25D366]/20 transition-all duration-300"
                >
                  <FaWhatsapp size={16} /> Chat on WhatsApp
                </a>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.4)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.7!2d73.0478!3d33.7165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef5d3d2e22f%3A0x5a73c3c07eb1bf42!2sJinnah+Super+Market+F-7+Markaz!5e0!3m2!1sen!2spk!4v1700000000000"
                  width="100%" height="220"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85)" }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eatly Rooftop location"
                />
              </div>

              {/* Birthday promo */}
              <motion.div {...fadeUp(0.3)} className="rounded-2xl p-6"
                style={{ background: "rgba(255,184,0,0.06)", boxShadow: "0 0 0 1px rgba(255,184,0,0.2)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gold text-sm">✦</span>
                  <h4 className="font-inter text-[10px] font-bold tracking-[0.3em] uppercase text-gold">Birthday Special</h4>
                </div>
                <p className="font-inter text-sm text-white/55 leading-relaxed">
                  Packages from <span className="text-white font-semibold">PKR 3,000</span> — free décor, 2 steaks, 2 burgers &amp; 2 Mint Margaritas.
                </p>
                <p className="font-inter text-[10px] text-white/30 mt-2">Select &quot;Birthday&quot; as occasion in the form.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
