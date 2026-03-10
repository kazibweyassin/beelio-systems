"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    icon: "💬",
    title: "WhatsApp Chatbots",
    outcome: "Reply to 100 customers at once — automatically.",
  },
  {
    icon: "⚙️",
    title: "Business Automation",
    outcome: "Work that used to take hours now happens by itself.",
  },
  {
    icon: "🛠️",
    title: "Custom Software",
    outcome: "Systems built around how your business really works.",
  },
];

export default function Solution() {
  return (
    <section id="services" className="py-20 bg-[#0a1020] text-white">
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
            Our <span className="text-electric">core services</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Only three things we do, and we do them well — WhatsApp chatbots,
            business automation and custom systems built around how you work.
          </p>
        </motion.div>

        {/* Pillar Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#0d1526] rounded-2xl p-6 border border-white/5 hover:border-electric/30 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Icon */}
              <div className="text-3xl">{pillar.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white">
                {pillar.title}
              </h3>

              {/* Outcome */}
              <p className="text-electric text-sm mt-2 flex-1">
                {pillar.outcome}
              </p>
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