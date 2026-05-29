"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, MessageCircle, Globe, Phone, Sparkles } from "lucide-react";

const headlines = [
  {
    heading: (
      <>
        AI Software & FinTech Development
        <span className="text-electric"> for Emerging Markets</span>
      </>
    ),
    sub: "We build intelligent financial systems, AI-powered platforms, and custom enterprise software for FinTech companies and scaling businesses across Africa and beyond.",
  },
  {
    heading: (
      <>
        Built for complex systems
        <span className="text-electric">, not templates</span>
      </>
    ),
    sub: "We map your operating model first, then design the automation, reporting, integrations, and controls around how your team actually works.",
  },
  {
    heading: (
      <>
        Enterprise software
        <span className="text-electric"> with AI built in</span>
      </>
    ),
    sub: "From AI agents to payment infrastructure and operations platforms, we build systems that are clear, robust, and easy to maintain.",
  },
  {
    heading: (
      <>
        A technical partner
        <span className="text-electric"> for regulated growth</span>
      </>
    ),
    sub: "Beelio focuses on delivery, architectural clarity, and support after launch.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % headlines.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = headlines[index];

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
          {/* Vision line */}
          <p className="text-white/30 text-xs uppercase tracking-widest mb-3 font-medium">
            AI software, FinTech platforms, and custom enterprise systems
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-electric/20 rounded-full px-4 py-1 text-xs text-electric mb-6">
            <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
            Emerging Markets Expertise | Enterprise Grade
          </div>


          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight min-h-[120px] md:min-h-[140px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
                className="block"
              >
                {current.heading}
              </motion.span>
            </AnimatePresence>
          </h1>

          {/* New value proposition line */}
          <div className="text-lg md:text-xl font-semibold text-electric mb-4">
            Build intelligent systems that improve operations, controls, and delivery.
          </div>

          <div className="text-base md:text-lg mb-8 text-white/60 leading-relaxed max-w-lg min-h-[64px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={index + "-sub"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {current.sub}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-block bg-electric text-[#0a1020] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-electric/90 transition-colors duration-200 text-center"
            >
              See What We Build
            </a>
            <a
              href="/contact"
              className="inline-block border border-white/20 text-white px-8 py-3 rounded-full hover:border-electric hover:text-electric transition-colors duration-200 text-center"
            >
              Book a Consultation
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-4 text-xs md:text-sm text-white/40">
            Founded and led from Kampala for clients across Africa and international markets.
          </p>

          {/* Channel pills */}
          <div className="flex flex-wrap gap-2 mt-7">
            {[
              { label: 'AI Agents', icon: MessageCircle,  iconColor: 'text-[#25D366]' },
              { label: 'Platforms', icon: MessageSquare,  iconColor: 'text-blue-400'  },
              { label: 'Web',       icon: Globe,          iconColor: 'text-purple-400'},
              { label: 'Voice',     icon: Phone,          iconColor: 'text-orange-400'},
              { label: 'Custom',    icon: Sparkles,       iconColor: 'text-pink-400'  },
            ].map((ch) => (
              <span
                key={ch.label}
                className="inline-flex items-center gap-2 bg-[#111827] border border-white/8 rounded-full px-4 py-1.5 text-xs font-medium text-white/80 hover:border-white/20 transition-colors duration-200"
              >
                <ch.icon size={13} className={ch.iconColor} />
                {ch.label}
              </span>
            ))}
          </div>

          {/* Slide dots */}
          <div className="flex gap-2 mt-5">
            {headlines.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === index ? "bg-electric w-5" : "bg-white/20"
                }`}
              />
            ))}
          </div>

          {/* Credibility bar */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-white font-semibold text-sm">Custom-built systems</p>
              <p className="text-white/40 text-xs mt-1">Designed around your workflow, not a template.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-white font-semibold text-sm">Emerging markets focus</p>
              <p className="text-white/40 text-xs mt-1">Built for financial infrastructure, enterprise workflows, and scale.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-white font-semibold text-sm">Support after launch</p>
              <p className="text-white/40 text-xs mt-1">We stay reachable and help after go-live.</p>
            </div>
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
              src="/recover.svg"
              alt="Beelio automation interface in action"
              className="w-full h-auto object-cover"
            />
            {/* overlay label */}
            <div className="absolute bottom-4 left-4 bg-[#0a1020]/80 backdrop-blur-sm border border-electric/20 rounded-lg px-3 py-2 text-xs text-electric">
              Live enterprise software dashboard
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}