"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const headlines = [
  {
    heading: (
      <>
        Still answering customer WhatsApp messages
        <span className="text-electric"> manually?</span>
      </>
    ),
    sub: "Automate replies, bookings, and follow-ups so you never lose a sale again. We build automation tools for African businesses.",
  },
  {
    heading: (
      <>
        Your competitors reply in seconds.
        <span className="text-electric"> You reply in hours.</span>
      </>
    ),
    sub: "A WhatsApp bot built for your business replies instantly, books appointments, and follows up, 24 hours a day.",
  },
  {
    heading: (
      <>
        Losing customers because
        <span className="text-electric"> no one follows up?</span>
      </>
    ),
    sub: "We build systems that automatically follow up with every lead, remind every client, and recover every lost sale.",
  },
  {
    heading: (
      <>
        Still managing your business
        <span className="text-electric"> on spreadsheets?</span>
      </>
    ),
    sub: "Custom software built around how your business actually works. Not a template. Built for you, here in Kampala.",
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-electric/20 rounded-full px-4 py-1 text-xs text-electric mb-6">
            <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
            Built for Business Growth
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

          {/* Slide dots */}
          <div className="flex gap-2 mt-6">
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

          {/* Stats bar */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div>
              <p className="text-electric font-bold text-2xl md:text-3xl">40+</p>
              <p className="text-white/40 text-xs mt-1">Businesses automated</p>
            </div>
            <div>
              <p className="text-electric font-bold text-2xl md:text-3xl">&lt;2min</p>
              <p className="text-white/40 text-xs mt-1">Avg. first reply time</p>
            </div>
            <div>
              <p className="text-electric font-bold text-2xl md:text-3xl">24/7</p>
              <p className="text-white/40 text-xs mt-1">Always-on automation</p>
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
              src="/Real-Time-Analytics.png"
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