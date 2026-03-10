"use client";

import { motion } from 'framer-motion';
import { Check } from "lucide-react";

const differentiators = [
  'Local team that understands African business context',
  'Full stack MERN + Python + AI',
  'Fast delivery',
  'Affordable compared to international agencies',
];

export default function WhyBeelio() {
  return (
    <section className="py-16 bg-[#0a1020] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-white text-center"
        >
          Why work with us?
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Team photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <img
                src="/carlos.jpg"
                alt="Beelio team"
                className="w-full h-72 md:h-80 object-cover"
              />
            </div>
            <p className="text-white/30 text-xs mt-3 text-center">Our team</p>
          </motion.div>

          {/* Differentiators */}
          <div className="flex-1">
            <ul className="flex flex-col gap-4">
              {differentiators.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex items-start gap-3 bg-[#0d1526] rounded-xl p-4 border border-electric/10"
                >
                  <span className="mt-0.5 flex-shrink-0"><Check size={18} className="text-electric" strokeWidth={2.5} /></span>
                  <span className="text-white/80 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8"
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
        </div>
      </div>
    </section>
  );
}
