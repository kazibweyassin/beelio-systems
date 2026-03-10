"use client";

import { motion } from "framer-motion";

const projects = [
  {
    img: "/vagaro-Rz9_wnuHyA0-unsplash.jpg",
    label: "Clinic",
    text: "Clinic reduced customer response time from 4 hours to instant \u2014 and increased bookings by 40%.",
  },
  {
    img: "/restuarant.jpg",
    label: "Restaurant",
    text: "Restaurant cut order errors by 90% with a WhatsApp bot \u2014 sales jumped 25%.",
  },
  {
    img: "/detail-co-MnamLwFl1d8-unsplash.jpg",
    label: "Retail",
    text: "Retail shop automates stock alerts and freed two staff for sales ,  revenue grew 15%.",
  },
];

export default function Portfolio({
  heading = "Our Success Stories",
  subheading = "Real results from real businesses.",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#0d1526] rounded-2xl overflow-hidden border border-white/5 hover:border-electric/30 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={project.img} alt={project.label} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-electric/90 text-[#0a1020] text-xs font-semibold px-3 py-1 rounded-full">{project.label}</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed flex-1 p-6">
                {project.text}
              </p>
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
            Have a project in mind?
          </p>
          <p className="text-white/40 text-sm mb-6">
            Tell us your business problem. We'll tell you exactly what we'd build ,  free, no obligation.
          </p>
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