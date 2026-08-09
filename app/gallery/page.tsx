"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";

type GalleryFilter = "all" | "food" | "ambiance" | "events";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: Exclude<GalleryFilter, "all">;
  tall?: boolean;
}

const images: GalleryImage[] = [
  { id: 1,  src: "https://picsum.photos/seed/eatly-food1/600/400",   alt: "Moroccan Beef Steak plating",    category: "food" },
  { id: 2,  src: "https://picsum.photos/seed/eatly-rooftop1/600/800",alt: "Rooftop terrace at night",        category: "ambiance", tall: true },
  { id: 3,  src: "https://picsum.photos/seed/eatly-food2/600/400",   alt: "Creamy pasta dish",               category: "food" },
  { id: 4,  src: "https://picsum.photos/seed/eatly-event1/600/400",  alt: "Birthday celebration setup",      category: "events" },
  { id: 5,  src: "https://picsum.photos/seed/eatly-ambiance1/600/700",alt: "Evening city lights view",        category: "ambiance", tall: true },
  { id: 6,  src: "https://picsum.photos/seed/eatly-food3/600/400",   alt: "Gourmet burger close-up",         category: "food" },
  { id: 7,  src: "https://picsum.photos/seed/eatly-event2/600/500",  alt: "Corporate dinner gathering",      category: "events" },
  { id: 8,  src: "https://picsum.photos/seed/eatly-food4/600/400",   alt: "Dessert spread",                  category: "food" },
  { id: 9,  src: "https://picsum.photos/seed/eatly-ambiance2/600/600",alt: "Candlelit table setting",         category: "ambiance" },
  { id: 10, src: "https://picsum.photos/seed/eatly-event3/600/400",  alt: "Anniversary dinner decor",        category: "events" },
  { id: 11, src: "https://picsum.photos/seed/eatly-food5/600/500",   alt: "BBQ platter on display",          category: "food", tall: true },
  { id: 12, src: "https://picsum.photos/seed/eatly-ambiance3/600/400",alt: "Panoramic Islamabad skyline",     category: "ambiance" },
];

const filters: { id: GalleryFilter; label: string }[] = [
  { id: "all",      label: "All" },
  { id: "food",     label: "Food" },
  { id: "ambiance", label: "Ambiance" },
  { id: "events",   label: "Events" },
];

export default function GalleryPage() {
  const [filter,   setFilter]   = useState<GalleryFilter>("all");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Visual Stories"
        title="Our"
        titleAccent="Gallery"
        subtitle="A glimpse into the ambiance, cuisine, and moments that make Eatly Rooftop Islamabad's most cherished dining destination."
      />

      {/* Filter tabs */}
      <section className="sticky top-[96px] lg:top-[104px] z-30 bg-[#0d0d0d] border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-1 py-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {filters.map((f) => (
            <motion.button
              key={f.id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setFilter(f.id)}
              className={`shrink-0 font-inter text-[11px] font-bold tracking-widest uppercase px-5 py-2 rounded-full transition-all duration-200 ${
                filter === f.id
                  ? "bg-gold text-background shadow-[0_2px_16px_rgba(255,184,0,0.3)]"
                  : "text-white/40 hover:text-white border border-transparent hover:border-border-subtle"
              }`}
            >
              {f.label}
            </motion.button>
          ))}
          <span className="ml-auto font-inter text-[10px] text-white/25 shrink-0">
            {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="py-12 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden border border-white/5 hover:border-gold/40 transition-all duration-400"
                  onClick={() => setLightbox(img)}
                >
                  <div className={`relative w-full ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-400 flex items-center justify-center">
                      <motion.div
                        initial={false}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2"
                      >
                        <span className="font-inter text-[10px] font-bold tracking-[0.3em] uppercase text-gold border border-gold/50 px-4 py-2 rounded-full backdrop-blur-sm bg-black/30">
                          View
                        </span>
                      </motion.div>
                    </div>
                    {/* Bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    {/* Alt text */}
                    <div className="absolute bottom-3 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      <p className="font-inter text-[10px] text-white/70">{img.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/96 backdrop-blur-xl flex items-center justify-center p-4 lg:p-16"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-gold/25 shadow-[0_0_80px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh]">
                <Image src={lightbox.src} alt={lightbox.alt} fill className="object-contain" />
              </div>
              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-t border-white/10">
                <p className="font-inter text-xs text-white/60">{lightbox.alt}</p>
                <button
                  onClick={() => setLightbox(null)}
                  className="font-inter text-[10px] font-bold tracking-widest uppercase text-gold border border-gold/40 px-4 py-1.5 rounded-full hover:bg-gold hover:text-background transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
