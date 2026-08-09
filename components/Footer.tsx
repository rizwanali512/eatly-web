import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { href: "/",             label: "Home" },
  { href: "/menu",         label: "Menu" },
  { href: "/about",        label: "About Us" },
  { href: "/gallery",      label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact",      label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute left-1/4 bottom-0 w-[400px] h-[200px] rounded-full bg-gold/[0.04] blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex flex-col mb-5">
              <div className="flex items-center gap-1 mb-0.5">
                <span className="font-playfair text-3xl font-bold text-gold tracking-wide">Eatly</span>
                <span className="text-gold text-base">✦</span>
              </div>
              <span className="font-inter text-[9px] tracking-[0.3em] uppercase text-white/30">Rooftop Dining</span>
            </div>

            <p className="font-inter text-sm text-white/40 leading-relaxed max-w-sm mb-7">
              Islamabad&apos;s favourite rooftop dining experience. Where city lights meet world-class cuisine under the open sky.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: FaInstagram, href: "https://instagram.com",        label: "Instagram" },
                { Icon: FaFacebook,  href: "https://facebook.com",         label: "Facebook" },
                { Icon: FaWhatsapp,  href: "https://wa.me/923001234567",   label: "WhatsApp", green: true },
              ].map(({ Icon, href, label, green }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                    green
                      ? "border-[#25D366]/20 text-white/40 hover:border-[#25D366]/50 hover:text-[#25D366] hover:bg-[#25D366]/10"
                      : "border-white/8 text-white/40 hover:border-gold/40 hover:text-gold hover:bg-gold/8"
                  }`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter text-[9px] font-bold tracking-[0.3em] uppercase text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/40 hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="block w-3 h-px bg-white/20 group-hover:bg-gold group-hover:w-5 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-[9px] font-bold tracking-[0.3em] uppercase text-gold mb-6">Find Us</h4>
            <div className="space-y-5">
              <div>
                <p className="font-inter text-[9px] font-bold tracking-[0.2em] uppercase text-white/25 mb-1.5">Address</p>
                <p className="font-inter text-sm text-white/40 leading-relaxed">
                  13-S Sharoon Plaza, Rooftop<br />
                  Jinnah Super, F-7 Markaz<br />
                  Islamabad, Pakistan
                </p>
              </div>
              <div>
                <p className="font-inter text-[9px] font-bold tracking-[0.2em] uppercase text-white/25 mb-1.5">Hours</p>
                <p className="font-inter text-sm text-white/40">12:00 PM – 12:00 AM (Daily)</p>
              </div>
              <div>
                <p className="font-inter text-[9px] font-bold tracking-[0.2em] uppercase text-white/25 mb-1.5">Phone</p>
                <a href="tel:+923001234567" className="font-inter text-sm text-white/40 hover:text-gold transition-colors">
                  +92 300 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/25">
            © 2025 Eatly Rooftop. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            <p className="font-inter text-xs text-white/20">
              13-S Sharoon Plaza, Rooftop, F-7 Markaz, Islamabad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
