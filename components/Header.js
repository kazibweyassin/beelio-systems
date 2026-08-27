"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  // Shortened from "Why Beelio Global" — that's fine as a page title, but
  // at nav width it was one of the main things forcing everything to
  // crowd or wrap. The href/page itself is untouched.
  { label: "Why Us", href: "/why-beelio-global" },
  { label: "Industries", href: "/industries" },
  { label: "Growth", href: "/growth" },
  { label: "How It Works", href: "/how-it-works" },
  // Removed: duplicate "Growth" entry (same href appeared twice — beyond
  // crowding the bar, two links sharing key={link.href} will also throw
  // a React key-collision warning).
  // Note: "Contact" and "Book a Consultation" both go to /contact right
  // now — kept both since removing one is a content call, but that's
  // worth a look too if you want to trim further.
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0a1020]/90 backdrop-blur-sm z-50 border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-electric">
            <polygon
              points="16,2 30,9 30,23 16,30 2,23 2,9"
              fill="currentColor"
              opacity="0.7"
            />
          </svg>
          <span className="font-bold text-electric text-lg tracking-tight">
            Beelio
          </span>
        </a>

        {/* Desktop Nav — switches on at lg, not md, so 7 links + CTA never
            have to squeeze into a tablet-width bar */}
        <div className="hidden lg:flex items-center gap-5 text-sm text-white/70 whitespace-nowrap">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`transition-colors duration-200 ${
                isActive(link.href) ? "text-electric font-medium" : "hover:text-electric"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className="hidden lg:inline-block bg-electric text-[#0a1020] font-semibold px-4 py-2 rounded-full text-xs hover:bg-electric/90 transition-colors duration-200 shrink-0"
        >
          Book a Consultation
        </a>

        {/* Menu Toggle — now the fallback below lg, not just below md */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white/70 hover:text-electric transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile / tablet Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a1020] border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-sm transition-colors duration-200 ${
                isActive(link.href) ? "text-electric font-medium" : "text-white/70 hover:text-electric"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="mt-2 text-center bg-electric text-[#0a1020] font-semibold px-4 py-2 rounded-full text-xs hover:bg-electric/90 transition-colors duration-200"
          >
            Book a Consultation
          </a>
        </div>
      )}
    </header>
  );
}