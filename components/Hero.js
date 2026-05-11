"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, MessageCircle, Globe, Phone, Sparkles } from "lucide-react";

const headlines = [
  {
    heading: (
      <>
        AI software and WhatsApp automation
        <span className="text-electric"> for African businesses</span>
      </>
    ),
    sub: "We design practical systems for clinics, schools, retailers, SACCOs, and service teams that need cleaner operations and faster responses.",
  },
  {
    heading: (
      <>
        Built for real workflows
        <span className="text-electric">, not templates</span>
      </>
    ),
    sub: "We map your business process first, then build the automation, reporting, and integrations around how your team actually works.",
  },
  {
    heading: (
      <>
        Practical software
        <span className="text-electric"> with ongoing support</span>
      </>
    ),
    sub: "From AI agents to member portals and payment integrations, we build systems that are clear, useful, and easy to maintain.",
  },
  {
    heading: (
      <>
        A credible partner
        <span className="text-electric"> for business automation</span>
      </>
    ),
    sub: "Beelio focuses on deliverable systems, straightforward communication, and support after launch.",
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
            AI software, WhatsApp automation, and custom systems for East African businesses
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-electric/20 rounded-full px-4 py-1 text-xs text-electric mb-6">
            <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
            Practical software for real operations
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
            Build clearer workflows, better customer handling, and less manual work.
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

          {/* Trust line */}
          <p className="mt-4 text-xs md:text-sm text-white/40">
            Built in Uganda for businesses across East Africa.
          </p>

          {/* Channel pills */}
          <div className="flex flex-wrap gap-2 mt-7">
            {[
              { label: 'WhatsApp', icon: MessageCircle,  iconColor: 'text-[#25D366]' },
              { label: 'SMS',      icon: MessageSquare,  iconColor: 'text-blue-400'  },
              { label: 'Website',  icon: Globe,          iconColor: 'text-purple-400'},
              { label: 'Voice',    icon: Phone,          iconColor: 'text-orange-400'},
              { label: 'Custom',   icon: Sparkles,       iconColor: 'text-pink-400'  },
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
              <p className="text-white font-semibold text-sm">East African market focus</p>
              <p className="text-white/40 text-xs mt-1">Useful for clinics, SACCOs, retailers, and service teams.</p>
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
              Live WhatsApp automation dashboard
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}