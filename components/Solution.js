"use client";

import { motion } from "framer-motion";
import { MessageSquare, Settings, Code2 } from "lucide-react";

const SOLUTION_ICONS = { chat: MessageSquare, gear: Settings, code: Code2 };
function SolutionIcon({ name }) {
  const Icon = SOLUTION_ICONS[name];
  return Icon ? <Icon size={22} className="text-electric" /> : null;
}

const pillars = [
  {
    icon: "chat",
    title: "WhatsApp Chatbots",
    outcome: "Reply to 100 customers simultaneously, 24 hours a day.",
    detail:
      "Best for clinics, restaurants and retail businesses that live on WhatsApp and can’t afford to miss a single enquiry.",
    features: [
      "Instant automated replies",
      "Appointment booking & reminders",
      "Order taking and confirmation",
      "Lead capture and follow-up",
    ],
  },
  {
    icon: "gear",
    title: "Business Automation",
    outcome: "Cut hours of manual work down to seconds.",
    detail:
      "Best for teams drowning in spreadsheets, phone calls and manual reports that never quite match.",
    features: [
      "Invoice and billing automation",
      "Staff and shift management",
      "Inventory alerts and reordering",
      "Automated reporting and dashboards",
    ],
  },
  {
    icon: "code",
    title: "Custom Software",
    outcome: "A system built for exactly how your business works.",
    detail:
      "Best for businesses ready to move from patchwork tools to a single, robust system designed from scratch.",
    features: [
      "Web apps and management portals",
      "Mobile apps (iOS and Android)",
      "POS and payment integrations",
      "MTN MoMo and Airtel Money support",
    ],
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
            We focus on three things, and we do them extremely well: WhatsApp chatbots,
            business process automation, and custom systems built around how you work.
          </p>
        </motion.div>

        {/* Visual: AI image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 rounded-2xl overflow-hidden border border-white/5 shadow-xl"
        >
          <img
            src="/ai.jpg"
            alt="AI-powered business automation"
            className="w-full h-64 md:h-80 object-cover"
          />
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
              <div className="w-10 h-10 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center">
                <SolutionIcon name={pillar.icon} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white">
                {pillar.title}
              </h3>

              {/* Outcome */}
              <p className="text-electric text-sm font-medium">
                {pillar.outcome}
              </p>

              {/* Detail */}
              <p className="text-white/50 text-sm leading-relaxed">
                {pillar.detail}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-1.5 mt-1">
                {pillar.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-white/60 text-xs">
                    <span className="w-1 h-1 rounded-full bg-electric flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
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