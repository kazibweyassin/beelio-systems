"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "We understand your problem",
    desc: "We start with a free consultation — a real conversation about how your business actually works, where you're losing time, and what a solution needs to do.",
    time: "Day 1 — Free, no commitment",
    icon: "🔍",
  },
  {
    number: "02",
    title: "We build your custom system",
    desc: "No templates. We design and develop a platform built around your exact workflow — whether that's a management system, a booking platform, or a customer portal.",
    time: "Week 1–3 — Depending on scope",
    icon: "⚙️",
  },
  {
    number: "03",
    title: "We integrate AI so it runs itself",
    desc: "We embed AI agents that handle the repetitive work — customer follow-ups, data processing, reporting, and more. Your system gets smarter over time.",
    time: "Week 3–4 — Launch ready",
    icon: "🚀",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#080e1a] text-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How it <span className="text-[#00e6fe]">works</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            From first conversation to live system — here's exactly what 
            working with Beelio looks like.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-6">

          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-[#00e6fe]/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#0d1526] rounded-2xl p-6 border border-white/5 hover:border-[#00e6fe]/20 transition-all duration-300 flex flex-col gap-4 relative"
            >
              {/* Step number circle */}
              <div className="w-10 h-10 rounded-full bg-[#00e6fe]/10 border border-[#00e6fe]/30 flex items-center justify-center text-[#00e6fe] font-bold text-sm">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-2xl">{step.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed flex-1">
                {step.desc}
              </p>

              {/* Time */}
              <div className="border-t border-white/5 pt-4">
                <p className="text-[#00e6fe]/70 text-xs font-medium">
                  ⏱ {step.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm mb-4">
            Ready to start? Step 1 is completely free.
          </p>
          <a
            href="https://wa.me/256786367460"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00e6fe] text-[#0a1020] font-semibold px-8 py-3 rounded-full hover:bg-[#00c4d8] transition-colors duration-200"
          >
            Start With a Free Consultation
          </a>
        </motion.div>

      </div>
    </section>
  );
}