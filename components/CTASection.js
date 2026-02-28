"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-[#080e1a] text-white relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#00e6fe]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-[#00e6fe]/20 rounded-full px-4 py-1 text-xs text-[#00e6fe] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#00e6fe] animate-pulse" />
          Available for new projects
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
        >
          Ready to build something{" "}
          <span className="text-[#00e6fe]">intelligent?</span>
        </motion.h2>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-base md:text-lg mb-10 leading-relaxed"
        >
          Tell us your business problem. We'll design a solution, 
          give you a clear scope, and show you exactly what we'd build — 
          completely free, no obligation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <a
            href="https://wa.me/256786367460"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00e6fe] text-[#0a1020] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#00c4d8] transition-colors duration-200"
          >
            Book Free Consultation
          </a>
          <a
            href="mailto:beeliotechnologies@gmail.com"
            className="inline-block border border-white/20 text-white px-8 py-3 rounded-full hover:border-[#00e6fe] hover:text-[#00e6fe] transition-colors duration-200"
          >
            Send Us an Email
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 text-white/30 text-xs"
        >
          <span>✓ Free consultation</span>
          <span>✓ No commitment required</span>
          <span>✓ Reply within 24 hours</span>
          <span>✓ Based in Kampala, Uganda</span>
        </motion.div>

      </div>
    </section>
  );
}