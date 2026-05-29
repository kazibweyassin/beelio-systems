"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, Package } from "lucide-react";

const projects = [
  {
    img: "/vagaro-Rz9_wnuHyA0-unsplash.jpg",
    industry: "Operational workflow automation",
    problem: "Teams lose time when approvals, reporting, and follow-ups are handled manually.",
    built: "Structured workflow automation, dashboards, and task routing.",
    result: "Clearer handling, fewer manual errors, and stronger operational visibility.",
    metric: "Efficiency gain",
    icon: Clock,
  },
  {
    img: "/carlos-gil-nyYvpVt8OlU-unsplash.jpg",
    industry: "Financial operations platform",
    problem: "Finance teams need reliable systems for records, approvals, and status tracking.",
    built: "A secure operations platform with reporting, workflow controls, and integration points.",
    result: "Better visibility, fewer bottlenecks, and more predictable delivery.",
    metric: "Control layer",
    icon: TrendingUp,
  },
  {
    img: "/detail-co-MnamLwFl1d8-unsplash.jpg",
    industry: "Enterprise reporting system",
    problem: "Leadership teams need consistent reporting across departments and locations.",
    built: "Centralised dashboards, reporting automation, and system-level audit trails.",
    result: "Faster reporting cycles and cleaner decision-making.",
    metric: "Reporting speed",
    icon: Package,
  },
  {
    img: "/igor-omilaev-gVQLAbGVB6Q-unsplash.jpg",
    industry: "[FinTech client case study — coming soon]",
    problem: "A placeholder for a live FinTech implementation and outcome story.",
    built: "Custom financial infrastructure, AI-assisted workflows, and enterprise controls.",
    result: "Placeholder for a measurable business outcome once the case study is published.",
    metric: "Coming soon",
    icon: Users,
  },
];

export default function Portfolio({
  heading = "Real systems. Real results.",
  subheading = "Every project we ship solves a real problem. Here's proof.",
}) {
  return (
    <section className="py-20 bg-[#0a1020] text-white" id="portfolio">
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
            {heading}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            {subheading}
          </p>
        </motion.div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0d1526] rounded-2xl overflow-hidden border border-white/5 hover:border-electric/30 transition-all duration-300 flex flex-col"
            >
              {/* Image + metric overlay */}
              <div className="relative h-44 overflow-hidden">
                <img src={project.img} alt={project.industry} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-electric/90 text-[#0a1020] text-xs font-bold px-3 py-1 rounded-full">{project.industry}</span>
                <div className="absolute bottom-3 right-3 bg-[#0a1020]/80 backdrop-blur-sm border border-electric/30 rounded-lg px-3 py-1.5 flex items-center gap-2">
                  <project.icon size={12} className="text-electric" />
                  <span className="text-electric text-xs font-bold">{project.metric}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-1">The Problem</p>
                  <p className="text-white/70 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-1">What We Built</p>
                  <p className="text-white/70 text-sm leading-relaxed">{project.built}</p>
                </div>
                <div className="bg-electric/5 border border-electric/15 rounded-xl px-4 py-3 mt-auto">
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-1">The Result</p>
                  <p className="text-electric text-sm font-medium leading-relaxed">{project.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom invite */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center bg-[#0d1526] border border-white/5 rounded-2xl p-8"
        >
          <p className="text-white font-semibold text-lg mb-2">
            Your business could be next.
          </p>
          <p className="text-white/40 text-sm mb-6">
            Tell us your problem. We'll tell you what we would build and how we would scope it.
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