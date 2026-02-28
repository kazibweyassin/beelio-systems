"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-center bg-[#0a1020] text-white px-4 py-24 relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-electric/20 rounded-full px-4 py-1 text-xs text-electric mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-electric">Intelligent Software.</span>
          <br />
          <span className="text-white">Built for Africa.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-10 text-white/60 max-w-2xl mx-auto leading-relaxed">
          We build custom software systems with AI agents built in — so your 
          business runs smarter, serves customers faster, and scales without 
          hiring more staff.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/256786367460"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-electric text-[#0a1020] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-electric/90 transition-colors duration-200"
          >
            Book Free Consultation
          </a>
          <a
            href="/portfolio"
            className="inline-block border border-white/20 text-white px-8 py-3 rounded-full hover:border-electric hover:text-electric transition-colors duration-200"
          >
            See Our Work
          </a>
        </div>
      </motion.div>

      {/* Bottom SVG line */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 320"
          fill="none"
          className="absolute bottom-0 left-0"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,186.7C1120,213,1280,235,1360,245.3L1440,256"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.15"
          />
        </svg>
      </div>
    </section>
  );
}