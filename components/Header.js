"use client";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0a1020]/90 backdrop-blur-sm z-50 border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <polygon
              points="16,2 30,9 30,23 16,30 2,23 2,9"
              fill="#00e6fe"
              opacity="0.7"
            />
          </svg>
          <span className="font-bold text-[#00e6fe] text-lg tracking-tight">
            Beelio
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#00e6fe] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/256786367460"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-[#00e6fe] text-[#0a1020] font-semibold px-4 py-2 rounded-full text-xs hover:bg-[#00c4d8] transition-colors duration-200"
        >
          Book Free Consultation
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white/70 hover:text-[#00e6fe] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1020] border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-[#00e6fe] text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/256786367460"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center bg-[#00e6fe] text-[#0a1020] font-semibold px-4 py-2 rounded-full text-xs hover:bg-[#00c4d8] transition-colors duration-200"
          >
            Book Free Consultation
          </a>
        </div>
      )}
    </header>
  );
}