"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const vp = { once: true, margin: "-80px" } as const;
function fadeUp(delay = 0) {
  return { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: vp, transition: { duration: 0.7, delay } };
}
function fadeLeft(delay = 0) {
  return { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, viewport: vp, transition: { duration: 0.8, delay } };
}

const stats = [
  { value: "50+",  label: "Menu Items",     icon: "🍽️" },
  { value: "360°", label: "Rooftop Views",  icon: "🌆" },
  { value: "300+", label: "Events Hosted",  icon: "🎉" },
];

const values = [
  {
    icon: "★",
    title: "Uncompromising Quality",
    desc: "Every ingredient is sourced fresh. Every dish is crafted to order. Quality isn't a standard — it's our identity.",
  },
  {
    icon: "◈",
    title: "Curated Ambiance",
    desc: "From the warm glow of candlelit tables to a carefully chosen playlist — every sensory detail is intentional.",
  },
  {
    icon: "♡",
    title: "Heartfelt Service",
    desc: "Our team doesn't just serve food — they craft memories. From your first visit to your hundredth, you're family.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Our"
        titleAccent="Story"
        subtitle="Born above the city lights of F-7 Markaz — a rooftop dream turned Islamabad's most beloved dining experience."
      />

      {/* ── STORY ── */}
      <section className="py-24 bg-[#080808] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-gold/[0.05] blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div {...fadeLeft()}>
              <span className="font-inter text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-4 block">The Beginning</span>
              <h2 className="font-playfair text-4xl lg:text-5xl text-white mb-3 leading-snug">
                Born from a Love of<br />
                <span className="text-gold italic">Good Food &amp; Good Views</span>
              </h2>
              <span className="block w-14 h-[2px] bg-gradient-to-r from-gold to-gold-dark mb-8 rounded-full" />
              <div className="space-y-4 font-inter text-sm text-white/55 leading-relaxed">
                <p>
                  Eatly Rooftop was born from a simple dream: what if Islamabad had a place where world-class food met an open sky? Nestled atop Sharoon Plaza in the heart of F-7 Markaz, we opened our doors with that very vision — and Islamabad answered with open arms.
                </p>
                <p>
                  Our founders, passionate about culinary arts and the beauty of this city, handpicked every element — from the hand-forged iron railings lining the rooftop to the spice blends that define our Moroccan Beef Steak. Nothing here is accidental.
                </p>
                <p>
                  What started as an intimate dining space has grown into Islamabad&apos;s most beloved rooftop destination, hosting hundreds of birthdays, anniversaries, corporate evenings, and quiet date nights — each one a chapter in our story.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="relative h-96 lg:h-[520px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-gold/20 group hover:border-gold/40 transition-all duration-500">
                <Image
                  src="/images/main-banner.jpg"
                  alt="Eatly Rooftop ambiance"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* Corner accents */}
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-gold/50 rounded-bl-lg" />
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-gold/50 rounded-tr-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 bg-card-surface border-y border-border-subtle relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[200px] rounded-full bg-gold/[0.05] blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border-subtle">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp(i * 0.15)}
                className="bg-card-surface flex flex-col items-center text-center py-14 px-8 group hover:bg-[#1a1a1a] transition-colors duration-300"
              >
                <span className="text-3xl mb-4">{stat.icon}</span>
                <div className="font-playfair text-6xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ textShadow: "0 0 30px rgba(255,184,0,0.3)" }}>
                  {stat.value}
                </div>
                <div className="font-inter text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="py-24 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/main-banner.jpg" alt="" fill className="object-cover opacity-8 scale-105" style={{ filter: "blur(6px)" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-black/80 to-[#080808]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()} className="mb-8">
            <span className="font-inter text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-4 block">The Eatly Experience</span>
            <h2 className="font-playfair text-4xl lg:text-5xl text-white mb-3">
              Dining <span className="text-gold italic">Above the City</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="block h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="block h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.2)} className="font-inter text-sm text-white/50 leading-relaxed space-y-4 mt-10 text-left lg:text-center">
            <p>At 13-S Sharoon Plaza, our rooftop terrace offers one of the most stunning vantage points in Islamabad. To the north, the Margalla Hills form a dramatic silhouette against the evening sky. Below, the city pulses with energy — F-7 Markaz at its most vibrant.</p>
            <p>We designed the space to feel both grand and intimate. Wide-open sky above you, warm amber lighting below, the gentle sounds of a curated evening playlist in the background.</p>
            <p>Our kitchen is an exploration — from slow-cooked Chicken Handi to a perfectly seared Black Pepper Sirloin, from comforting Nutella Lava Cake to hand-crafted Mint Margaritas.</p>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-card-surface border-t border-border-subtle relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-gold/[0.04] blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeLeft()} className="mb-14 text-center">
            <span className="font-inter text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-4 block">What We Stand For</span>
            <h2 className="font-playfair text-4xl lg:text-5xl text-white mb-3">
              Our <span className="text-gold italic">Values</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="block h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="block h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp(i * 0.15)}
                className="group rounded-2xl p-8 transition-all duration-300"
                style={{ background:"rgba(255,255,255,0.03)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)", boxShadow:"0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.4)" }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-2xl mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="font-inter text-sm font-bold tracking-wider uppercase text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="font-inter text-sm text-white/45 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
