"use client";

import { motion } from "framer-motion";
import type { MenuItem } from "@/data/menu";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const badgeConfig: Record<string, { label: string; className: string }> = {
  "Chef's Pick": { label: "Chef's Pick", className: "bg-gold/15 text-gold border border-gold/30" },
  Spicy:         { label: "Spicy",        className: "bg-orange-500/10 text-orange-400 border border-orange-500/20" },
  Popular:       { label: "Popular",      className: "bg-white/5 text-white/40 border border-white/8" },
};

export default function MenuCard({ item, index }: MenuCardProps) {
  const badge = item.badge ? badgeConfig[item.badge] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.07 }}
      whileHover={{ y: -2 }}
      className="group relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ boxShadow: "0 0 0 1px rgba(255,184,0,0.22), inset 0 1px 0 rgba(255,184,0,0.08), 0 8px 40px rgba(0,0,0,0.5), 0 0 24px rgba(255,184,0,0.06)" }}
      />

      {/* Gold left bar */}
      <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-gold/0 via-gold/70 to-gold/0 scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-center rounded-full" />

      <div className="p-5 pl-6 flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <h3 className="font-inter text-sm font-semibold text-white/90 group-hover:text-gold transition-colors duration-200 leading-snug">
              {item.name}
            </h3>
            {badge && (
              <span className={`inline-flex items-center font-inter text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${badge.className}`}>
                {badge.label}
              </span>
            )}
          </div>
          <p className="font-inter text-[11px] text-white/35 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="shrink-0 pt-0.5">
          <span className="font-playfair text-base font-bold text-gold whitespace-nowrap"
            style={{ textShadow: "0 0 16px rgba(255,184,0,0.25)" }}>
            PKR {item.price.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Bottom shimmer on hover */}
      <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
}
