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
    title: "We understand your system requirements",
    desc: "We start with a consultation and a clear conversation about how your business operates, where the constraints are, and what the solution needs to achieve.",
    time: "Day 1 ,  Consultation",
    icon: "search",
  },
  {
    number: "02",
    title: "We architect and build your solution",
    desc: "No templates. We design and develop the platform around your exact workflow, whether that means a management system, a FinTech product, or an enterprise portal.",
    time: "Week 1–3 ,  Depending on scope",
    icon: "wrench",
  },
  {
    number: "03",
    title: "We integrate AI and deliver enterprise-grade software",
    desc: "We embed AI agents and automation layers that handle repetitive work, data processing, reporting, and operational handoffs.",
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
            From the first consultation to delivery, here is what working with our team looks like.
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
            Ready to see how we would approach your system? Service businesses looking for a
            7-day website and WhatsApp setup can start with the{" "}
            <a href="/growth" className="text-electric hover:text-electric/80">
              Client Growth System
            </a>
            .
          </p>
          <a
            href="/contact"
            className="inline-block bg-electric text-[#0a1020] font-semibold px-8 py-3 rounded-full hover:bg-electric/90 transition-colors duration-200"
          >
            Book a Consultation
          </a>
        </motion.div>

      </div>
    </section>
  );
}