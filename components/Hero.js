"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-[#0a1020] text-white px-4 py-28 md:py-32 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-electric/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* ── LEFT: copy ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 z-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-electric/20 rounded-full px-4 py-1 text-xs text-electric mb-6">
            <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
            Kampala-based · WhatsApp Automation
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Still answering customer WhatsApp messages
            <span className="text-electric"> manually?</span>
          </h1>

          <p className="text-base md:text-lg mb-8 text-white/60 leading-relaxed max-w-lg">
            Automate replies, bookings, and follow-ups — so you never lose a sale again.
            We build automation tools for African businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/256786367460"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-electric text-[#0a1020] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-electric/90 transition-colors duration-200 text-center"
            >
              Book Free Demo
            </a>
            <a
              href="#services"
              className="inline-block border border-white/20 text-white px-8 py-3 rounded-full hover:border-electric hover:text-electric transition-colors duration-200 text-center"
            >
              See What We Build
            </a>
          </div>

          {/* Quick trust strip */}
          <div className="mt-8 flex flex-wrap gap-4 text-white/30 text-xs">
            <span>✓ Free demo, no obligation</span>
            <span>✓ Reply within 24 hours</span>
            <span>✓ Based in Kampala</span>
          </div>
        </motion.div>

        {/* ── RIGHT: demo screenshot ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex-1 z-10 w-full"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/interface.jpg"
              alt="Beelio automation interface in action"
              className="w-full h-auto object-cover"
            />
            {/* overlay label */}
            <div className="absolute bottom-4 left-4 bg-[#0a1020]/80 backdrop-blur-sm border border-electric/20 rounded-lg px-3 py-2 text-xs text-electric">
              Live WhatsApp automation dashboard
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}