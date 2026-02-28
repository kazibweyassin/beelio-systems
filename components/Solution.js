"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    icon: "🧠",
    title: "Custom Software Development",
    problem: "Tired of spreadsheets and manual processes?",
    desc: "We design and build platforms tailored exactly to how your business works — no templates, no shortcuts, no generic tools that half-fit your needs.",
    outcome: "A system built for you, owned by you, forever.",
  },
  {
    icon: "🤖",
    title: "AI Agent Integration",
    problem: "Losing customers to slow responses?",
    desc: "We embed AI agents directly into your software — they answer customer queries, follow up on leads, process requests, and handle repetitive tasks 24/7 without a salary.",
    outcome: "Your business stays open even when you're asleep.",
  },
  {
    icon: "⚡",
    title: "Business Automation",
    problem: "Paying staff to do work a system could do?",
    desc: "From onboarding new clients to generating monthly reports, we map your workflows and automate everything that doesn't need a human touch.",
    outcome: "Less manual work. Lower costs. Faster operations.",
  },
];

export default function Solution() {
  return (
    <section className="py-20 bg-[#0a1020] text-white">
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
            This is how we{" "}
            <span className="text-[#00e6fe]">fix it.</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            We combine custom software with embedded AI — so your business 
            runs smarter, responds faster, and scales without growing your payroll.
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
              className="bg-[#0d1526] rounded-2xl p-6 border border-white/5 hover:border-[#00e6fe]/30 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Icon */}
              <div className="text-3xl">{pillar.icon}</div>

              {/* Problem echo */}
              <p className="text-[#00e6fe] text-xs font-medium uppercase tracking-wider">
                {pillar.problem}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed flex-1">
                {pillar.desc}
              </p>

              {/* Outcome */}
              <div className="border-t border-white/5 pt-4">
                <p className="text-[#00e6fe] text-sm font-medium">
                  ✓ {pillar.outcome}
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
          <a
            href="https://wa.me/256786367460"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00e6fe] text-[#0a1020] font-semibold px-8 py-3 rounded-full hover:bg-[#00c4d8] transition-colors duration-200"
          >
            Let's Build Your System
          </a>
        </motion.div>

      </div>
    </section>
  );
}