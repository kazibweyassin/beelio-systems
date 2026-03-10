"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Clock, Users } from "lucide-react";

const PROBLEM_ICONS = { grid: LayoutGrid, clock: Clock, users: Users };
function ProblemIcon({ name }) {
  const Icon = PROBLEM_ICONS[name];
  return Icon ? <Icon size={22} className="text-electric" /> : null;
}

const painPoints = [
  {
    icon: "grid",
    title: "Still using spreadsheets?",
    desc: "You're spending hours every week entering data by hand ,  and one mistake costs you a client or your entire month's records.",
  },
  {
    icon: "clock",
    title: "Losing customers to slow follow-ups?",
    desc: "A customer messages you at 9pm. Nobody replies until morning. By then they've already called your competitor.",
  },
  {
    icon: "users",
    title: "Paying staff to do repetitive work?",
    desc: "You have people doing the same tasks every single day ,  tasks that a well-built system could handle automatically, 24/7.",
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
            Lots of businesses are wasting hours and cash on issues
            that a simple system could fix once and for all.
          </p>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 rounded-2xl overflow-hidden border border-white/5 shadow-xl"
        >
          <img
            src="/aerps-com-pp8rmBQC7Yc-unsplash.jpg"
            alt="Business owner managing customer messages"
            className="w-full h-52 md:h-64 object-cover"
          />
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
              <div className="w-10 h-10 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center mb-4">
                <ProblemIcon name={point.icon} />
              </div>
              
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
          These things stack up fast. <span className="text-electric">Here's how we sort them out. ↓</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-8"
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