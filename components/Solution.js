"use client";

import { motion } from "framer-motion";
import { MessageSquare, Settings, Code2, Headset, BrainCircuit } from "lucide-react";

const SOLUTION_ICONS = { chat: MessageSquare, gear: Settings, code: Code2, support: Headset, ai: BrainCircuit };
function SolutionIcon({ name }) {
  const Icon = SOLUTION_ICONS[name];
  return Icon ? <Icon size={22} className="text-electric" /> : null;
}

const pillars = [
  {
    icon: "ai",
    title: "AI-Powered Software & FinTech Platforms",
    outcome: "Custom intelligent systems for financial services and enterprise teams.",
    detail:
      "We build intelligent systems that automate decisions, analyse data, and streamline operations — including AI agents, machine learning pipelines, and LLM-powered tools for finance and enterprise clients.",
    features: [
      "AI agent development and integration",
      "FinTech platform development",
      "LLM-powered financial and enterprise tools",
      "Data pipelines, analytics, and reporting systems",
    ],
  },
  {
    icon: "gear",
    title: "Enterprise Business Automation",
    outcome: "End-to-end workflow automation for operational teams.",
    detail:
      "We build the systems that remove repetitive manual work across operations, approvals, reporting, and internal processes.",
    features: [
      "End-to-end workflow automation",
      "ERP and management system integrations",
      "Automated reporting and operational dashboards",
      "Multi-branch and multi-user system architecture",
    ],
  },
  {
    icon: "code",
    title: "Custom Software Development",
    outcome: "Web, mobile, and API systems built around your business model.",
    detail:
      "Best for teams moving from disconnected tools to a single, robust software platform designed from scratch.",
    features: [
      "Web applications and management portals",
      "Mobile apps (iOS and Android)",
      "Payment integrations and digital wallet systems",
      "API development and third-party integrations",
    ],
  },
  {
    icon: "support",
    title: "Customer Support Automation",
    outcome: "Automate support routing and routine responses.",
    detail:
      "Best for businesses that want faster responses, better escalation handling, and less time spent on repetitive support work.",
    features: [
      "Intelligent support routing",
      "Automated response systems",
      "After-hours handling and escalation flows",
      "Human handoff for complex issues",
    ],
  },
];

export default function Solution() {
  return (
    <section id="services" className="relative overflow-hidden py-20 bg-[#0a1020] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(94,211,255,0.12),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(94,211,255,0.08),_transparent_38%)]" />
      <div className="relative max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="inline-flex items-center rounded-full border border-electric/20 bg-electric/10 px-4 py-1 text-xs font-medium tracking-[0.18em] uppercase text-electric mb-5">
            Core services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-electric">core services</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            We build intelligent systems across financial technology, enterprise automation, custom software, and support orchestration.
          </p>
        </motion.div>

        {/* Visual: AI image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 rounded-[1.75rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/20 ring-1 ring-white/5"
        >
          <img
            src="/ai.jpg"
            alt="AI-powered business automation"
            className="w-full h-64 md:h-80 object-cover"
          />
        </motion.div>

        {/* Pillar Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-electric/30 hover:bg-white/[0.05]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent opacity-60" />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-electric/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />

              {/* Icon */}
              <div className="w-11 h-11 rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center shadow-inner shadow-electric/10">
                <SolutionIcon name={pillar.icon} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {pillar.title}
              </h3>

              {/* Outcome */}
              <p className="text-electric text-sm font-medium leading-relaxed">
                {pillar.outcome}
              </p>

              {/* Detail */}
              <p className="text-white/55 text-sm leading-relaxed">
                {pillar.detail}
              </p>

              {/* Features */}
              <ul className="grid gap-2 pt-2 sm:grid-cols-2">
                {pillar.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 rounded-xl border border-white/5 bg-black/10 px-3 py-2 text-white/70 text-xs leading-snug">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0" />
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
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-electric/20 bg-electric px-8 py-3 font-semibold text-[#0a1020] shadow-lg shadow-electric/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-electric/90"
          >
            Book a Consultation
          </a>
        </motion.div>

      </div>
    </section>
  );
}