"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import EnquiryPreview from "./EnquiryPreview";

export default function GrowthPreview() {
  return (
    <section id="growth" className="py-20 bg-[#080e1a] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/30 text-xs uppercase tracking-widest mb-3 font-medium">
              Client Growth System
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
              Need a website that starts <span className="text-electric">WhatsApp conversations?</span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-6">
              For service businesses that need a professional site connected to WhatsApp intake,
              FAQs, and booking — typically live in seven days, from UGX 1.2m.
            </p>
            <ul className="flex flex-col gap-2 text-sm text-white/70 mb-8">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0" />
                Essential and Growth packages with clear UGX pricing
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0" />
                Intake, FAQs, and consultation booking on WhatsApp
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0" />
                A focused path, separate from custom enterprise builds
              </li>
            </ul>
            <a
              href="/growth"
              className="inline-flex items-center gap-2 bg-electric text-[#0a1020] font-semibold px-8 py-3 rounded-full hover:bg-electric/90 transition-colors duration-200"
            >
              Explore the Growth System <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md md:ml-auto"
          >
            <EnquiryPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
