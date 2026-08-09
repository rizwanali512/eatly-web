"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type TargetAndTransition } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

/* ── helpers ── */
const vp = { once: true, margin: "-80px" } as const;
function fadeUp(delay = 0) {
  return { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: vp, transition: { duration: 0.7, delay } };
}
function fadeLeft(delay = 0) {
  return { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, viewport: vp, transition: { duration: 0.8, delay } };
}

/* ── data ── */
const avatarColors = [
  "from-orange-400 to-red-500",
  "from-blue-400 to-purple-500",
  "from-emerald-400 to-teal-500",
  "from-pink-400 to-rose-500",
];
const avatarInitials = ["S", "A", "M", "Z"];

const featuredDishes = [
  { name: "Moroccan Beef Steak",   price: "PKR 1,450", img: "https://picsum.photos/seed/steak11/200/200" },
  { name: "Creamy Mushroom Pasta", price: "PKR 850",   img: "https://picsum.photos/seed/pasta33/200/200" },
  { name: "BBQ Mixed Platter",     price: "PKR 2,200", img: "https://picsum.photos/seed/bbq-mix/200/200" },
  { name: "Garlic Butter Ribeye",  price: "PKR 1,800", img: "https://picsum.photos/seed/ribeye11/200/200" },
  { name: "Prawn Tempura",         price: "PKR 1,400", img: "https://picsum.photos/seed/prawn11/200/200" },
];

const features = [
  { icon: "🌆", title: "Rooftop Views",  desc: "Panoramic skyline & Margalla Hills" },
  { icon: "🎶", title: "Live Ambiance",  desc: "Curated music every evening" },
  { icon: "🍽️", title: "World Cuisine", desc: "50+ dishes from 8 global cuisines" },
  { icon: "🎉", title: "Private Events", desc: "Birthdays, anniversaries & corporate" },
];

const signatures = [
  { name: "Moroccan Beef Steak",   desc: "Prime beef in North African spices, roasted veg & garlic mash",      price: "PKR 1,450", img: "https://picsum.photos/seed/steak1/600/400" },
  { name: "Chicken Parmo",         desc: "Crispy chicken breast with béchamel & melted cheese on a brioche bun", price: "PKR 1,649", img: "https://picsum.photos/seed/parmo2/600/400" },
  { name: "Creamy Mushroom Pasta", desc: "Fettuccine in truffle cream sauce with wild mushrooms & parmesan",    price: "PKR 850",   img: "https://picsum.photos/seed/pasta3/600/400" },
];

const testimonials = [
  { quote: "The views are absolutely breathtaking. We celebrated our anniversary here and everything — from the food to the service — was flawless.", name: "Sara & Ahmed",    detail: "Anniversary dinner" },
  { quote: "Best steak I've had in Islamabad. The Moroccan Beef Steak has the perfect char with beautifully balanced spices. 10/10 would return.",  name: "Hamza Malik",    detail: "Food blogger, Islamabad" },
  { quote: "Our team dinner was magical. The ambiance under the open sky with city lights all around made it truly memorable. Highly recommended!",  name: "Zainab Qureshi", detail: "Corporate event host" },
];

const experienceItems = [
  { title: "Panoramic City Views", desc: "Gaze over the F-7 skyline with Margalla Hills framed in the distance — a backdrop that transforms every meal." },
  { title: "Candle-Lit Evenings",  desc: "As dusk settles, warm candlelight and ambient music create an intimate atmosphere above the city's energy." },
  { title: "Open-Air Luxury",      desc: "Fresh mountain air, star-lit skies, and table settings that rival any five-star interior." },
];

const infoFeatures = [
  { icon: "⚡", title: "Fast Delivery",       sub: "30–40 min" },
  { icon: "✦", title: "Fresh Ingredients",   sub: "Daily Sourced" },
  { icon: "★", title: "Great Ambience",       sub: "Unforgettable Views" },
];

function FloatingShape({ className, animate: anim, delay = 0 }: { className: string; animate: TargetAndTransition; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={anim}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.2, dy: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    let raf: number;
    function draw() {
      ctx!.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        ctx!.beginPath(); ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,184,0,${p.opacity})`; ctx!.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════
          PREMIUM HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]">

        {/* Full-bleed background */}
        <div className="absolute inset-0">
          {/* Background image — slight blur only */}
          <Image
            src="/images/main-banner.jpg"
            alt="Eatly Rooftop ambiance"
            fill priority
            className="object-cover object-center scale-105"
            style={{ filter: "blur(1px)" }}
          />
          {/* Base dark tint — lighter so image shows */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Left gradient for text legibility only */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
          {/* Ambient gold glow — left */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px] pointer-events-none" />
        </div>

        {/* Particles */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 min-h-screen py-32">

            {/* ─── LEFT ─── */}
            <div className="max-w-xl">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2.5 mb-8"
              >
                <span className="text-gold text-sm">✦</span>
                <span className="font-inter text-[10px] font-bold tracking-[0.35em] uppercase text-gold">
                  Islamabad&apos;s Premier Rooftop Experience
                </span>
              </motion.div>

              {/* Headline */}
              <div className="mb-3 overflow-hidden">
                {["Order Tasty &", "Fresh Food"].map((line, i) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.1 + i * 0.13 }}
                  >
                    <span className="block font-playfair font-bold text-[52px] lg:text-[62px] xl:text-[72px] text-white leading-[1.05]">
                      {line}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Script accent */}
              <motion.div
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.38 }}
                className="mb-8"
              >
                <span className="font-script text-[58px] lg:text-[68px] xl:text-[78px] text-gold leading-none"
                  style={{ textShadow: "0 0 40px rgba(255,184,0,0.35)" }}>
                  Anytime!
                </span>
              </motion.div>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="font-inter text-base text-white/60 leading-relaxed mb-10 max-w-md"
              >
                Experience world-class rooftop dining with breathtaking views,
                exceptional cuisine, and unforgettable moments.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/reservations"
                    className="inline-flex items-center gap-2.5 bg-gold text-background px-8 py-4 rounded-full font-inter font-bold text-sm tracking-wide shadow-[0_8px_40px_rgba(255,184,0,0.45)] hover:shadow-[0_12px_50px_rgba(255,184,0,0.6)] hover:bg-gold-light transition-all duration-300"
                  >
                    Order Now
                    <span className="w-6 h-6 rounded-full bg-background/20 flex items-center justify-center">
                      <HiArrowRight size={12} />
                    </span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-2.5 border border-white/25 text-white px-8 py-4 rounded-full font-inter font-semibold text-sm tracking-wide backdrop-blur-sm hover:border-gold/50 hover:text-gold transition-all duration-300"
                  >
                    Explore Menu
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <HiArrowRight size={12} />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Customer trust */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.72 }}
                className="flex items-center gap-5"
              >
                {/* Avatars */}
                <div className="flex -space-x-3">
                  {avatarColors.map((color, i) => (
                    <div key={i} className={`w-11 h-11 rounded-full bg-gradient-to-br ${color} border-2 border-[#080808] flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                      {avatarInitials[i]}
                    </div>
                  ))}
                  <div className="w-11 h-11 rounded-full bg-gold border-2 border-[#080808] flex items-center justify-center text-background text-[10px] font-bold">
                    2K+
                  </div>
                </div>
                <div>
                  <p className="font-inter font-semibold text-white text-sm mb-1">Our Happy Guests</p>
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => <FaStar key={i} size={11} className="text-gold" />)}
                    <span className="font-inter text-[11px] text-white/50 ml-1">2,000+ diners</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ─── RIGHT ─── */}
            <div className="relative flex items-center justify-center lg:justify-end h-[520px] lg:h-auto">

              {/* Outer spinning rings */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[540px] h-[540px] rounded-full border border-gold/12 border-dashed pointer-events-none"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[480px] h-[480px] rounded-full border border-gold/22 pointer-events-none"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[420px] h-[420px] rounded-full border border-gold/10 pointer-events-none"
                />

                {/* Gold dots on rings */}
                <div className="absolute w-[480px] h-[480px] pointer-events-none">
                  {/* Top dot */}
                  <motion.div
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-gold shadow-[0_0_12px_rgba(255,184,0,0.8)]"
                  />
                  {/* Right dot */}
                  <motion.div
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_10px_rgba(255,184,0,0.7)]"
                  />
                  {/* Bottom-left dot */}
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-gold/70"
                  />
                </div>

                {/* Main circular image */}
                <motion.div
                  animate={{ y: [0, -18, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-[3px] border-gold/35"
                  style={{ boxShadow: "0 0 0 8px rgba(255,184,0,0.06), 0 0 80px rgba(255,184,0,0.25)" }}
                >
                  <Image
                    src="/images/main-banner.jpg"
                    alt="Rooftop dining"
                    fill priority
                    className="object-cover"
                  />
                  {/* Subtle inner vignette */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.4)]" />
                </motion.div>
              </div>

              {/* Eatly logo badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5, type: "spring" }}
                className="absolute top-10 right-6 lg:right-0 w-[76px] h-[76px] rounded-full bg-black/60 backdrop-blur-xl border border-gold/35 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,184,0,0.2)]"
              >
                <span className="font-playfair text-gold font-bold text-base leading-none">Eatly</span>
                <span className="text-gold text-[10px] leading-none mt-0.5">✦</span>
              </motion.div>

              {/* Glassmorphism info card — bottom-right, outside the ring */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, type: "spring", stiffness: 100 }}
                className="absolute -bottom-20 -right-2 lg:-bottom-24 lg:-right-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 min-w-[190px] shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
              >
                <div className="space-y-3">
                  {infoFeatures.map((f, i) => (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-2.5"
                    >
                      <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0 text-gold text-sm">
                        {f.icon}
                      </div>
                      <div>
                        <p className="font-inter text-[11px] font-semibold text-white">{f.title}</p>
                        <p className="font-inter text-[9px] text-white/45">{f.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating accent elements */}
              <FloatingShape
                animate={{ y: [-8, 8, -8], rotate: [0, 20, 0] }}
                delay={0.5}
                className="absolute bottom-28 left-4 w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 backdrop-blur-sm"
              />
              <FloatingShape
                animate={{ y: [5, -5, 5], x: [-3, 3, -3] }}
                delay={1}
                className="absolute top-1/2 -left-2 w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/20"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg width="16" height="22" viewBox="0 0 16 22" fill="none" className="text-gold/60">
            <rect x="1" y="1" width="14" height="20" rx="7" stroke="currentColor" strokeWidth="1.2"/>
            <motion.rect
              x="6.5" y="4" width="3" height="5" rx="1.5" fill="currentColor"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            />
          </svg>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED FOOD CARDS STRIP
      ══════════════════════════════════════════ */}
      <section className="relative z-10 pb-16 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6 pt-12">
            <div>
              <span className="font-inter text-[10px] font-bold tracking-[0.25em] uppercase text-gold">Popular Dishes</span>
            </div>
            <div className="flex gap-2">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className="w-9 h-9 bg-card-surface border border-border-subtle rounded-full flex items-center justify-center text-text-muted hover:border-gold hover:text-gold transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className="w-9 h-9 bg-gold rounded-full flex items-center justify-center text-background hover:bg-gold-light transition-colors duration-300">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </motion.button>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide">
            {featuredDishes.map((dish, i) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex-shrink-0 w-72 rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 group cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.5)",
                }}
              >
                <motion.div whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-[72px] h-[72px] rounded-full overflow-hidden flex-shrink-0 border-2 border-gold/20 group-hover:border-gold/50 transition-colors shadow-[0_0_20px_rgba(255,184,0,0.15)]">
                  <Image src={dish.img} alt={dish.name} fill className="object-cover" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-inter text-sm font-semibold text-white truncate mb-1 group-hover:text-gold transition-colors">{dish.name}</h3>
                  <div className="flex gap-0.5 mb-2">{[...Array(5)].map((_, j) => <FaStar key={j} size={9} className="text-gold" />)}</div>
                  <p className="font-playfair text-sm font-bold text-gold">{dish.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       

      {/* ══════════════════════════════════════════
          SIGNATURE DISHES
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-gold/[0.06] blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeLeft()} className="mb-14">
            <span className="font-inter text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-3 block">From Our Kitchen</span>
            <h2 className="font-playfair text-4xl lg:text-5xl text-text-primary">
              Our <span className="text-gold italic">Signatures</span>
              <span className="block w-14 h-[2px] bg-gradient-to-r from-gold to-gold-dark mt-4 rounded-full" />
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatures.map((dish, i) => (
              <motion.div key={dish.name} {...fadeUp(i * 0.15)} className="group overflow-hidden transition-all duration-400 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 40px rgba(0,0,0,0.5)",
                }}>
                <div className="relative h-52 overflow-hidden">
                  <Image src={dish.img} alt={dish.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="font-inter text-[10px] font-bold tracking-widest uppercase text-gold/80 bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full border border-gold/20">Chef&apos;s Pick</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl text-text-primary mb-2 group-hover:text-gold transition-colors">{dish.name}</h3>
                  <p className="font-inter text-sm text-text-muted mb-4 leading-relaxed">{dish.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-playfair text-lg font-bold text-gold">{dish.price}</span>
                    <Link href="/menu" className="font-inter text-xs text-text-muted hover:text-gold transition-colors underline underline-offset-2">View on Menu</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp(0.3)} className="mt-12 text-center">
            <Link href="/menu" className="inline-flex items-center gap-2 border border-gold text-gold px-8 py-4 rounded-full font-inter text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-background transition-all duration-300">
              Explore Full Menu <HiArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPERIENCE
      ══════════════════════════════════════════ */}
      <section className="relative py-24 bg-card-surface overflow-hidden">
        <Image src="/images/main-banner.jpg" alt="Rooftop" fill className="object-cover opacity-10" style={{ filter: "blur(4px)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-card-surface via-card-surface/80 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeLeft()}>
              <span className="font-inter text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-4 block">The Experience</span>
              <h2 className="font-playfair text-4xl lg:text-5xl xl:text-6xl text-text-primary leading-tight">
                A View Like<br /><span className="text-gold italic">No Other</span>
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="relative">
              <div className="hidden lg:block absolute -left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
              <ul className="space-y-8 lg:pl-10">
                {experienceItems.map((item, i) => (
                  <motion.li key={item.title} {...fadeUp(i * 0.15)} className="flex gap-4">
                    <span className="text-gold mt-1 shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <polygon points="8,1 10,6 15,6 11,9.5 12.5,14.5 8,11.5 3.5,14.5 5,9.5 1,6 6,6" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-inter text-sm font-semibold tracking-wider uppercase text-text-primary mb-1">{item.title}</h4>
                      <p className="font-inter text-sm text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BIRTHDAY BANNER
      ══════════════════════════════════════════ */}
      <section className="relative py-20 px-6 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold to-gold-light" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white/30 blur-[60px]" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-background/20 blur-[60px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp()}>
            <span className="font-inter text-[10px] font-bold tracking-[0.3em] uppercase text-background/60 mb-4 block">Celebrate with Us</span>
            <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-background mb-4 leading-tight">
              Birthday Deals Starting at<br className="hidden sm:block" /> PKR 3,000
            </h2>
            <p className="font-inter text-base text-background/70 mb-8 leading-relaxed">
              Free décor + 2 Steaks + 2 Burgers + 2 Mint Margaritas — make it a night to remember
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/reservations" className="inline-flex items-center gap-2 bg-background text-gold px-8 py-4 rounded-full font-inter text-sm font-bold tracking-wide shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-shadow">
                Book Now 🎉
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] rounded-full bg-gold/[0.04] blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeLeft()} className="mb-14">
            <span className="font-inter text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-3 block">What Our Guests Say</span>
            <h2 className="font-playfair text-4xl lg:text-5xl text-text-primary">
              Guest <span className="text-gold italic">Reviews</span>
              <span className="block w-14 h-[2px] bg-gradient-to-r from-gold to-gold-dark mt-4 rounded-full" />
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fadeUp(i * 0.15)} className="p-8 relative group transition-all duration-300 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.4)",
                }}>
                <span className="font-playfair text-8xl text-gold/10 absolute -top-2 left-5 leading-none select-none pointer-events-none">&ldquo;</span>
                <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, j) => <FaStar key={j} size={12} className="text-gold" />)}</div>
                <p className="font-inter text-sm text-text-muted leading-relaxed mb-6 relative z-10">{t.quote}</p>
                <div className="flex items-center gap-3 border-t border-border-subtle pt-5">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {avatarInitials[i % avatarInitials.length]}
                  </div>
                  <div>
                    <p className="font-inter text-sm font-semibold text-text-primary">{t.name}</p>
                    <p className="font-inter text-xs text-text-muted tracking-wider uppercase mt-0.5">{t.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="py-16 bg-card-surface border-t border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()}>
            <h3 className="font-playfair text-3xl lg:text-4xl text-text-primary mb-3">Ready for an Unforgettable Evening?</h3>
            <p className="font-inter text-sm text-text-muted mb-8">Rooftop F-7 Markaz · Open daily 12 PM – 12 AM · Islamabad</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/reservations" className="inline-flex items-center gap-2 bg-gold text-background px-8 py-4 rounded-full font-inter text-sm font-bold tracking-wide shadow-brand-glow hover:shadow-brand-glow-lg hover:bg-gold-light transition-all duration-300">
                  Reserve Your Table <HiArrowRight size={14} />
                </Link>
              </motion.div>
              <Link href="/menu" className="inline-flex items-center justify-center border border-gold text-gold px-8 py-4 rounded-full font-inter text-sm font-semibold tracking-wide hover:bg-gold hover:text-background transition-all duration-300">
                Browse the Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
