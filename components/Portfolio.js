"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, Package } from "lucide-react";

const projects = [
  {
    img: "/vagaro-Rz9_wnuHyA0-unsplash.jpg",
    industry: "Salon Chain (UK)",
    problem: "Missed bookings and no-shows due to manual WhatsApp replies. Staff spent hours on admin.",
    built: "Automated WhatsApp booking, reminders, and payment integration.",
    result: "Missed bookings reduced by 45%. No-shows down 60%. Staff time saved: 20 hours/month.",
    metric: "-60% no-shows",
    icon: Clock,
  },
  {
    img: "/carlos-gil-nyYvpVt8OlU-unsplash.jpg",
    industry: "Clinic Group (US)",
    problem: "Manual appointment scheduling and follow-up. High admin workload.",
    built: "WhatsApp automation for appointment booking, reminders, and digital patient records.",
    result: "Admin time cut by 30%. Patient satisfaction up. 24/7 instant replies.",
    metric: "-30% admin time",
    icon: TrendingUp,
  },
  {
    img: "/detail-co-MnamLwFl1d8-unsplash.jpg",
    industry: "Retailer (EU)",
    problem: "Stockouts and lost sales due to manual inventory tracking.",
    built: "Inventory management with WhatsApp low-stock alerts and automated reordering.",
    result: "Zero surprise stockouts. Revenue up 15%. Staff focused on sales, not counting.",
    metric: "+15% revenue",
    icon: Package,
  },
  {
    img: "/igor-omilaev-gVQLAbGVB6Q-unsplash.jpg",
    industry: "Multi-location Spa (UK)",
    problem: "Multiple locations, inconsistent customer experience, manual bookings.",
    built: "Multi-location WhatsApp automation, branded booking flows, and reporting dashboard.",
    result: "Consistent experience across all branches. Management has real-time visibility. Bookings up 25%.",
    metric: "+25% bookings",
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
            Tell us your problem. We'll tell you exactly what we'd build and what it would cost. Free.
          </p>
          <a
            href="https://wa.me/256786367460"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-electric text-[#0a1020] font-semibold px-8 py-3 rounded-full hover:bg-electric/90 transition-colors duration-200"
          >
            Get a Free Consultation
          </a>
        </motion.div>

      </div>
    </section>
  );
}