"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import PageHero from "@/components/PageHero";

const glassCard = {
  background: "rgba(255,255,255,0.03)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  boxShadow: "0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.5)",
} as React.CSSProperties;

export default function ContactPage() {
  const [form,    setForm]    = useState({ name: "", email: "", message: "" });
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact"
        titleAccent="Us"
        subtitle="We'd love to hear from you — for reservations, events, or just to say hello. Find us above the city at F-7 Markaz."
      />

      <section className="py-20 bg-[#080808] relative overflow-hidden">
        <div className="absolute left-0 top-1/3 w-[500px] h-[500px] rounded-full bg-gold/[0.05] blur-[120px] pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-gold/[0.04] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT: info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Contact details card */}
              <div className="rounded-2xl p-7" style={glassCard}>
                <h2 className="font-playfair text-2xl text-white mb-6">
                  Find <span className="text-gold italic">Us</span>
                </h2>

                <div className="space-y-5">
                  {[
                    { Icon: FaMapMarkerAlt, label: "Address", value: "13-S Sharoon Plaza, Rooftop", sub: "Jinnah Super, F-7 Markaz, Islamabad", href: undefined },
                    { Icon: FaPhone,        label: "Phone",   value: "+92 300 123 4567",             sub: undefined, href: "tel:+923001234567" },
                    { Icon: FaEnvelope,     label: "Email",   value: "hello@eatlyrooftop.com",       sub: undefined, href: "mailto:hello@eatlyrooftop.com" },
                  ].map(({ Icon, label, value, sub, href }) => (
                    <div key={label} className="flex gap-4 items-start group">
                      <div className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                        <Icon className="text-gold" size={14} />
                      </div>
                      <div>
                        <p className="font-inter text-[9px] font-bold tracking-[0.25em] uppercase text-white/35 mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="font-inter text-sm text-white hover:text-gold transition-colors">{value}</a>
                        ) : (
                          <p className="font-inter text-sm text-white">{value}</p>
                        )}
                        {sub && <p className="font-inter text-xs text-white/40">{sub}</p>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-7 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <p className="font-inter text-[9px] font-bold tracking-[0.3em] uppercase text-white/30 mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] px-4 py-2.5 rounded-xl font-inter text-xs font-bold tracking-wider uppercase hover:bg-[#25D366]/20 transition-all duration-300">
                      <FaWhatsapp size={14} /> WhatsApp
                    </a>
                    {[
                      { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
                      { Icon: FaFacebook,  href: "https://facebook.com",  label: "Facebook" },
                    ].map(({ Icon, href, label }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-gold transition-all duration-300"
                        style={{ background: "rgba(255,255,255,0.04)", boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}>
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.4)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.7!2d73.0478!3d33.7165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef5d3d2e22f%3A0x5a73c3c07eb1bf42!2sJinnah+Super+Market+F-7+Markaz!5e0!3m2!1sen!2spk!4v1700000000000"
                  width="100%" height="260"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85)" }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eatly Rooftop map"
                />
              </div>
            </motion.div>

            {/* RIGHT: form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="rounded-2xl p-8 h-full" style={glassCard}>
                <h2 className="font-playfair text-2xl text-white mb-2">
                  Send a <span className="text-gold italic">Message</span>
                </h2>
                <p className="font-inter text-xs text-white/35 mb-8 tracking-wide">We&apos;ll respond within 24 hours</p>

                {sent ? (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mb-5 text-2xl">✉️</div>
                    <h3 className="font-playfair text-xl text-gold mb-2">Message Sent!</h3>
                    <p className="font-inter text-sm text-white/50">
                      Thank you, <span className="text-white">{form.name}</span>. We&apos;ll get back to you shortly.
                    </p>
                    <button onClick={() => setSent(false)} className="mt-6 border border-gold/40 text-gold px-6 py-2.5 rounded-full font-inter text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-background transition-all duration-300">
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block font-inter text-[9px] font-bold tracking-[0.3em] uppercase text-white/35 mb-2">Your Name *</label>
                      <input type="text" required placeholder="Full name" value={form.name} onChange={set("name")} className="input-dark" />
                    </div>
                    <div>
                      <label className="block font-inter text-[9px] font-bold tracking-[0.3em] uppercase text-white/35 mb-2">Email Address *</label>
                      <input type="email" required placeholder="your@email.com" value={form.email} onChange={set("email")} className="input-dark" />
                    </div>
                    <div>
                      <label className="block font-inter text-[9px] font-bold tracking-[0.3em] uppercase text-white/35 mb-2">Message *</label>
                      <textarea required rows={6} placeholder="Tell us how we can help…" value={form.message} onChange={set("message")} className="input-dark resize-none" />
                    </div>
                    <motion.button
                      type="submit" disabled={loading}
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="w-full bg-gold text-background py-4 rounded-xl font-inter text-sm font-bold tracking-wider uppercase hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                      style={{ boxShadow: "0 4px 20px rgba(255,184,0,0.3)" }}
                    >
                      {loading ? "Sending…" : "Send Message"}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
