"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    icon: "📊",
    title: "Still using spreadsheets?",
    desc: "You're spending hours every week entering data by hand — and one mistake costs you a client or your entire month's records.",
  },
  {
    icon: "💬",
    title: "Losing customers to slow follow-ups?",
    desc: "A customer messages you at 9pm. Nobody replies until morning. By then they've already called your competitor.",
  },
  {
    icon: "👥",
    title: "Paying staff to do repetitive work?",
    desc: "You have people doing the same tasks every single day — tasks that a well-built system could handle automatically, 24/7.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 bg-[#080e1a] text-white">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Sound <span className="text-electric">familiar?</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Most Ugandan businesses are losing time and money to problems 
            that the right software can solve completely.
          </p>
        </motion.div>

        {/* Pain Point Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#0d1526] rounded-2xl p-6 border border-white/5 hover:border-electric/20 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{point.icon}</div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 text-white">
                {point.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom bridge to solution */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-white/40 text-sm mt-10"
        >
          These aren't small problems. They compound every single day. 
          <span className="text-electric"> Here's how we fix them. ↓</span>
        </motion.p>

      </div>
    </section>
  );
}