"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const timeSlots = [
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM",
  "10:00 PM", "11:00 PM",
];

const occasions = ["None", "Birthday", "Anniversary", "Business Dinner", "Other"];

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  requests: string;
}

export default function ReservationForm() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "None",
    requests: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mb-5 text-2xl">🎉</div>
        <h3 className="font-playfair text-2xl text-gold mb-3">Reservation Received!</h3>
        <p className="font-inter text-sm text-white/55 leading-relaxed">
          Thank you, <span className="text-white">{form.fullName}</span>. We&apos;ll confirm your table via WhatsApp shortly.
        </p>
        <p className="font-inter text-xs text-white/30 mt-2">
          {form.date} at {form.time} — Party of {form.guests}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 border border-gold/40 text-gold px-6 py-2.5 rounded-full font-inter text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-background transition-all duration-300"
        >
          Make Another Reservation
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-inter text-[9px] font-bold tracking-[0.3em] uppercase text-white/35 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="Your full name"
            value={form.fullName}
            onChange={set("fullName")}
            className="input-dark"
          />
        </div>
        <div>
          <label className="block font-inter text-[9px] font-bold tracking-[0.3em] uppercase text-white/35 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+92 300 000 0000"
            value={form.phone}
            onChange={set("phone")}
            className="input-dark"
          />
        </div>
      </div>

      <div>
        <label className="block font-inter text-xs tracking-widest uppercase text-text-muted mb-2">
          Email Address
        </label>
        <input
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={set("email")}
          className="input-dark"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-inter text-[9px] font-bold tracking-[0.3em] uppercase text-white/35 mb-2">
            Date *
          </label>
          <input
            type="date"
            required
            value={form.date}
            onChange={set("date")}
            min={new Date().toISOString().split("T")[0]}
            className="input-dark [color-scheme:dark]"
          />
        </div>
        <div>
          <label className="block font-inter text-[9px] font-bold tracking-[0.3em] uppercase text-white/35 mb-2">
            Time *
          </label>
          <select required value={form.time} onChange={set("time")} className="input-dark">
            <option value="">Select time</option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-inter text-[9px] font-bold tracking-[0.3em] uppercase text-white/35 mb-2">
            Number of Guests *
          </label>
          <select required value={form.guests} onChange={set("guests")} className="input-dark">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-inter text-[9px] font-bold tracking-[0.3em] uppercase text-white/35 mb-2">
            Occasion
          </label>
          <select value={form.occasion} onChange={set("occasion")} className="input-dark">
            {occasions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block font-inter text-xs tracking-widest uppercase text-text-muted mb-2">
          Special Requests
        </label>
        <textarea
          rows={4}
          placeholder="Dietary requirements, special setups, or anything else we should know..."
          value={form.requests}
          onChange={set("requests")}
          className="input-dark resize-none"
        />
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full bg-gold text-background font-inter text-sm font-bold tracking-wider uppercase py-4 rounded-xl shadow-[0_4px_20px_rgba(255,184,0,0.3)] hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {loading ? "Sending Reservation..." : "Reserve Table"}
      </motion.button>

      <p className="font-inter text-xs text-text-muted text-center">
        We&apos;ll confirm your reservation via WhatsApp within 30 minutes.
      </p>
    </form>
  );
}
