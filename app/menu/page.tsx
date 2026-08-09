"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuCard from "@/components/MenuCard";
import PageHero from "@/components/PageHero";
import { menuCategories, type MenuItem } from "@/data/menu";

type BadgeFilter = "all" | "Chef's Pick" | "Popular" | "Spicy";

interface SearchResult {
  item: MenuItem;
  categoryLabel: string;
  globalIndex: number;
}

const badgeFilters: { id: BadgeFilter; label: string }[] = [
  { id: "all",         label: "All Items"   },
  { id: "Chef's Pick", label: "Chef's Pick" },
  { id: "Popular",     label: "Popular"     },
  { id: "Spicy",       label: "Spicy"       },
];

export default function MenuPage() {
  const [activeTab,    setActiveTab]    = useState(menuCategories[0].id);
  const [searchQuery,  setSearchQuery]  = useState("");
  const [badgeFilter,  setBadgeFilter]  = useState<BadgeFilter>("all");
  const tabBarRef   = useRef<HTMLDivElement>(null);
  const searchRef   = useRef<HTMLInputElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const isFiltering = searchQuery.trim().length > 0 || badgeFilter !== "all";

  /* ── Search results ── */
  const searchResults = useMemo<SearchResult[]>(() => {
    const q = searchQuery.toLowerCase().trim();
    let idx = 0;
    const out: SearchResult[] = [];
    menuCategories.forEach((cat) => {
      cat.items.forEach((item) => {
        const matchSearch =
          !q ||
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          cat.label.toLowerCase().includes(q);
        const matchBadge =
          badgeFilter === "all" || item.badge === badgeFilter;
        if (matchSearch && matchBadge)
          out.push({ item, categoryLabel: cat.label, globalIndex: idx++ });
      });
    });
    return out;
  }, [searchQuery, badgeFilter]);

  /* ── Category scroll & scroll-spy ── */
  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = sectionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 160;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isFiltering) return;
    const handler = () => {
      const offset = 200;
      for (const cat of menuCategories) {
        const el = sectionRefs.current[cat.id];
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= offset && bottom > offset) { setActiveTab(cat.id); break; }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isFiltering]);

  /* ── Keep active tab visible in tab bar ── */
  useEffect(() => {
    const bar = tabBarRef.current;
    if (!bar) return;
    const el = bar.querySelector(`[data-id="${activeTab}"]`) as HTMLElement | null;
    if (el) {
      const br = bar.getBoundingClientRect();
      const er = el.getBoundingClientRect();
      bar.scrollTo({ left: bar.scrollLeft + er.left - br.left - br.width / 2 + er.width / 2, behavior: "smooth" });
    }
  }, [activeTab]);

  const clearAll = () => { setSearchQuery(""); setBadgeFilter("all"); searchRef.current?.focus(); };

  return (
    <>
      <PageHero
        eyebrow="Explore Our"
        title="Full"
        titleAccent="Menu"
        subtitle="From sizzling steaks to comforting desi favourites — our kitchen travels the world so you don't have to."
      />

      {/* ══ SEARCH + FILTER BAR ══ */}
      <div className="bg-background border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">

          {/* Search input */}
          <div className="relative">
            {/* Icon left */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 10l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>

            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any dish, drink or category…"
              className="w-full bg-card-surface border border-border-subtle text-text-primary pl-10 pr-10 py-3 rounded-xl outline-none transition-all duration-300 font-inter text-sm placeholder:text-text-muted focus:border-gold focus:shadow-[0_0_0_3px_rgba(255,184,0,0.08)]"
            />

            {/* Clear button */}
            <AnimatePresence>
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-border-subtle flex items-center justify-center text-text-muted hover:bg-gold hover:text-background transition-all duration-200"
                  aria-label="Clear search"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Filter pills row */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {badgeFilters.map((f) => (
              <motion.button
                key={f.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setBadgeFilter(f.id)}
                className={`px-4 py-1.5 rounded-full font-inter text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 border ${
                  badgeFilter === f.id
                    ? "bg-gold text-background border-gold shadow-[0_2px_12px_rgba(255,184,0,0.3)]"
                    : "bg-transparent text-text-muted border-border-subtle hover:border-gold/50 hover:text-gold"
                }`}
              >
                {f.label}
              </motion.button>
            ))}

            {/* Results count + clear all */}
            <AnimatePresence>
              {isFiltering && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="ml-auto flex items-center gap-3"
                >
                  <span className="font-inter text-[11px] text-text-muted">
                    <span className="text-gold font-bold">{searchResults.length}</span> result{searchResults.length !== 1 ? "s" : ""}
                  </span>
                  <button
                    onClick={clearAll}
                    className="font-inter text-[10px] font-semibold tracking-widest uppercase text-text-muted hover:text-gold transition-colors border border-border-subtle hover:border-gold/50 px-3 py-1 rounded-full"
                  >
                    Clear
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ══ STICKY CATEGORY TABS (hidden when filtering) ══ */}
      <AnimatePresence>
        {!isFiltering && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="sticky top-[96px] lg:top-[104px] z-30 bg-card-surface border-b border-border-subtle"
          >
            <div
              ref={tabBarRef}
              className="max-w-7xl mx-auto px-6 flex items-center overflow-x-auto py-0"
              style={{ scrollbarWidth: "none" }}
            >
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  data-id={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className={`shrink-0 font-inter text-[10px] font-semibold tracking-widest uppercase px-4 py-4 border-b-2 transition-all duration-200 whitespace-nowrap ${
                    activeTab === cat.id
                      ? "border-gold text-gold"
                      : "border-transparent text-text-muted hover:text-text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══ CONTENT ══ */}
      <div className="bg-background min-h-[50vh]">
        <AnimatePresence mode="wait">

          {/* ─── SEARCH / FILTER RESULTS ─── */}
          {isFiltering ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-6 py-10"
            >
              {searchResults.length === 0 ? (
                /* Empty state */
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <span className="text-5xl mb-4">🔍</span>
                  <h3 className="font-playfair text-2xl text-text-primary mb-2">No dishes found</h3>
                  <p className="font-inter text-sm text-text-muted mb-6">
                    Try a different keyword or clear the filters
                  </p>
                  <button
                    onClick={clearAll}
                    className="border border-gold text-gold px-6 py-2.5 rounded-full font-inter text-xs font-semibold tracking-widest uppercase hover:bg-gold hover:text-background transition-all duration-300"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                /* Group results by category */
                (() => {
                  const grouped: Record<string, SearchResult[]> = {};
                  searchResults.forEach((r) => {
                    if (!grouped[r.categoryLabel]) grouped[r.categoryLabel] = [];
                    grouped[r.categoryLabel].push(r);
                  });
                  return (
                    <div className="space-y-10">
                      {Object.entries(grouped).map(([catLabel, results]) => (
                        <div key={catLabel}>
                          {/* Category label */}
                          <div className="flex items-center gap-3 mb-4">
                            <span className="font-inter text-[10px] font-semibold tracking-[0.25em] uppercase text-gold">
                              {catLabel}
                            </span>
                            <span className="font-inter text-[10px] text-text-muted">
                              ({results.length})
                            </span>
                            <span className="flex-1 h-px bg-border-subtle" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {results.map((r) => (
                              <MenuCard key={`${r.categoryLabel}-${r.item.name}`} item={r.item} index={r.globalIndex} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })()
              )}
            </motion.div>
          ) : (

            /* ─── NORMAL CATEGORY SECTIONS ─── */
            <motion.div
              key="sections"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-7xl mx-auto px-6 py-12 space-y-20"
            >
              {menuCategories.map((cat) => (
                <section
                  key={cat.id}
                  id={cat.id}
                  ref={(el) => { sectionRefs.current[cat.id] = el; }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                  >
                    <h2 className="font-playfair text-3xl text-text-primary mb-1">
                      {cat.label}
                      <span className="block w-10 h-[2px] bg-gold mt-3 rounded-full" />
                    </h2>
                    {cat.note && (
                      <p className="font-inter text-xs text-text-muted mt-4 italic leading-relaxed">
                        {cat.note}
                      </p>
                    )}
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {cat.items.map((item, i) => (
                      <MenuCard key={item.name} item={item} index={i} />
                    ))}
                  </div>
                </section>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
