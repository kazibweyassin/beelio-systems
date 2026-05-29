"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-[#080e1a] text-white relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-electric/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Left: photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <img
                src="/youversion-G3Rqy_OT8uw-unsplash.jpg"
                alt="Team planning an enterprise software engagement"
                className="w-full h-72 object-cover"
              />
            </div>
          </motion.div>

          {/* Right: copy */}
          <div className="flex-1 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
            >
              Discuss your next
              <span className="text-electric"> software build.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/50 text-base mb-8 leading-relaxed"
            >
              Tell us what you are building and the constraints you need to solve.
              We will map the requirements, define the delivery approach, and show you what we would build.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="https://wa.me/256786367460"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-electric text-[#0a1020] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-electric/90 transition-colors duration-200"
              >
                Book a Consultation
              </a>
            </motion.div>

            <div className="flex flex-wrap gap-4 text-white/30 text-xs mt-6">
              <span>&#10003; Consultation-led</span>
              <span>&#10003; Clear scope and delivery plan</span>
              <span>&#10003; Support options available</span>
              <span>&#10003; Fast response from the team</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}