"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is this right for my type of business?",
    a: "If your business gets customer enquiries on WhatsApp — bookings, orders, questions, complaints — then yes. We've built systems for clinics, restaurants, retail shops, schools, and logistics companies across Kampala. If you're not sure, message us and we'll tell you honestly within 24 hours.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "We build every system around your specific workflow, not a generic template. Before we write a single line of code we map out exactly how your business operates. If after the demo you feel it's not the right fit, there's zero obligation — the consultation is free.",
  },
  {
    q: "How is this different from just hiring someone to reply messages?",
    a: "A person sleeps, gets sick, asks for a salary increase, and can only handle one conversation at a time. Our chatbot replies to 100 customers simultaneously, at 3am, for a flat monthly fee. It never misses a lead.",
  },
  {
    q: "How long until I see results?",
    a: "Most clients go live within 1–2 weeks. You'll see the first automated replies within days of launch. Measurable changes — faster response times, more bookings — typically show up in the first 30 days.",
  },
  {
    q: "What's the catch? Why is the demo free?",
    a: "No catch. We offer a free demo because we know that once you see your own business running on automation, you'll want to keep it. We'd rather show you than pitch you. No hard sell, no hidden fees.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 bg-[#0a1020] text-white">
      <div className="max-w-3xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Questions we get <span className="text-electric">all the time</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Straight answers — no fluff.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#0d1526] rounded-xl border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors duration-200"
              >
                <span className="font-medium text-white text-sm md:text-base">
                  {faq.q}
                </span>
                <span className={`text-electric text-xl flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm mb-4">Still got a question?</p>
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
