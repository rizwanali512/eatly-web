"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, titleAccent, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-44 pb-24 overflow-hidden bg-[#080808]">

      {/* Blurred background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/main-banner.jpg"
          alt=""
          fill
          className="object-cover scale-110 opacity-40"
          style={{ filter: "blur(8px)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Gold glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[320px] rounded-full bg-gold/[0.08] blur-[90px] pointer-events-none" />

      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="block w-10 h-px bg-gold/50" />
          <span className="font-inter text-[10px] font-bold tracking-[0.35em] uppercase text-gold">
            {eyebrow}
          </span>
          <span className="block w-10 h-px bg-gold/50" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          {title}
          {titleAccent && (
            <> <span className="text-gold italic">{titleAccent}</span></>
          )}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="block h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(255,184,0,0.8)]" />
          <span className="block h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
        </motion.div>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-inter text-sm text-white/55 leading-relaxed max-w-lg mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
    </section>
  );
}
