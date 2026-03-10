"use client";

import { motion } from "framer-motion";
import { Search, Wrench, Zap, Clock } from "lucide-react";

const STEP_ICONS = { search: Search, wrench: Wrench, zap: Zap };
function StepIcon({ name }) {
  const Icon = STEP_ICONS[name];
  return Icon ? <Icon size={18} className="text-electric" /> : null;
}

const steps = [
  {
    number: "01",
    title: "We understand your problem",
    desc: "We start with a free consultation ,  a real conversation about how your business actually works, where you're losing time, and what a solution needs to do.",
    time: "Day 1 ,  Free, no commitment",
    icon: "search",
  },
  {
    number: "02",
    title: "We build your custom system",
    desc: "No templates. We design and develop a platform built around your exact workflow ,  whether that's a management system, a booking platform, or a customer portal.",
    time: "Week 1–3 ,  Depending on scope",
    icon: "wrench",
  },
  {
    number: "03",
    title: "We integrate AI so it runs itself",
    desc: "We embed AI agents that handle the repetitive work ,  customer follow-ups, data processing, reporting, and more. Your system gets smarter over time.",
    time: "Week 3–4 ,  Launch ready",
    icon: "zap",
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
            How it <span className="text-electric">works</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            From our first chat to the day your system is live ,  here's what 
            working with our Kampala team actually feels like.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-6">

          {/* Connecting line ,  desktop only */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#0d1526] rounded-2xl p-6 border border-white/5 hover:border-electric/20 transition-all duration-300 flex flex-col gap-4 relative"
            >
              {/* Step number circle */}
              <div className="w-10 h-10 rounded-full bg-electric/10 border border-electric/30 flex items-center justify-center text-electric font-bold text-sm">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-9 h-9 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center">
                <StepIcon name={step.icon} />
              </div>

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
                <p className="text-electric/70 text-xs font-medium flex items-center gap-1">
                  <Clock size={11} className="text-electric/50" /> {step.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process preview image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-14 rounded-2xl overflow-hidden border border-white/5 shadow-xl"
        >
          <img
            src="/women.jpg"
            alt="Beelio system dashboard"
            className="w-full h-56 md:h-72 object-cover"
          />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm mb-4">
            Ready to see it in action? It's free to try.
          </p>
          <a
            href="https://wa.me/256786367460"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-electric text-[#0a1020] font-semibold px-8 py-3 rounded-full hover:bg-electric/90 transition-colors duration-200"
          >
            Get a Free WhatsApp Demo
          </a>
        </motion.div>

      </div>
    </section>
  );
}