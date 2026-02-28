"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Ailes Travel",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
    tagline: "Africa-China business travel platform",
    desc: "A full travel experience platform for African entrepreneurs visiting China for trade. Features curated itineraries, trip management, and WhatsApp booking integration.",
    tags: ["Next.js", "Tailwind CSS", "WhatsApp API"],
    link: "https://ailestravel.com",
    live: true,
  },
  {
    name: "Ailes Global",
    image: "https://ailesglobal.com/og?title=Ailes%20Global%20-%20Find%20Scholarships%20First%2C%20Then%20Your%20University&description=Africa%27s%20%231%20scholarship-first%20platform.%20Discover%20fully-funded%20scholarships%2C%20match%20with%20top%20universities%2C%20and%20get%20expert%20guidance%20for%20studying%20abroad.",
    tagline: "Scholarship discovery platform for African students",
    desc: "A platform connecting African students to 500+ scholarships across 50+ countries, with AI-powered matching, application copilot, and university finder.",
    tags: ["Next.js", "Python", "AI Matching"],
    link: "https://ailesglobal.com",
    live: true,
  },
  {
    name: "Beelio Technologies",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    tagline: "Intelligent software company website",
    desc: "This site — built to demonstrate what modern, AI-forward software development looks like for African businesses. Fast, responsive, and conversion-focused.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: null,
    live: false,
  },
];

export default function Portfolio({
  heading = "Our Success Stories",
  subheading = "Real products, built from scratch, serving real users across Africa.",
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
            Our <span className="text-electric">Success Stories</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            {subheading}
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link || '#'}
              target={project.live ? '_blank' : undefined}
              rel={project.live ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group block overflow-hidden rounded-2xl border border-white/5 hover:border-electric/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

                {/* Live badge on image */}
                {project.live && (
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-green-500/20 border border-green-500/30 rounded-full px-2 py-0.5 text-green-400 text-xs backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Live
                  </div>
                )}
              </div>

              {/* Text content */}
              <div className="p-6 bg-[#0d1526] flex flex-col gap-3">
                
                {/* Name */}
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>

                {/* Tagline */}
                <p className="text-electric text-xs font-medium">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 text-white/40 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-3 pt-3 border-t border-white/5">
                  {project.live ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-electric text-sm font-medium hover:underline"
                    >
                      View Live Site →
                    </a>
                  ) : (
                    <span className="text-white/30 text-sm">
                      You're looking at it ↑
                    </span>
                  )}
                </div>
              </div>
            </motion.a>
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
            Tell us your business problem. We'll tell you exactly what we'd build — free, no obligation.
          </p>
          <a
            href="https://wa.me/256786367460"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-electric text-[#0a1020] font-semibold px-8 py-3 rounded-full hover:bg-electric/90 transition-colors duration-200"
          >
            Discuss Your Project
          </a>
        </motion.div>

      </div>
    </section>
  );
}