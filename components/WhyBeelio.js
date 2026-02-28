"use client";

import { motion } from 'framer-motion';

const differentiators = [
  'Local team that understands African business context',
  'Full stack MERN + Python + AI',
  'Fast delivery',
  'Affordable compared to international agencies',
];

export default function WhyBeelio() {
  return (
    <section className="py-16 bg-navy text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-accent text-center"
        >
          Why Beelio?
        </motion.h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {differentiators.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-[#111827] rounded-xl p-6 shadow-lg border border-electric/10 text-electric font-medium"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
