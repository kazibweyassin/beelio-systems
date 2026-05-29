"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is this right for my type of business?",
    a: "If your business needs financial workflows, internal automation, customer operations, or custom software, then yes. We work with FinTech companies, financial institutions, enterprises, and scaling businesses across Africa and beyond. If you're not sure, we will tell you honestly within 24 hours.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "We build every system around your specific workflow, not a generic template. Before we write a single line of code we map out exactly how your business operates. If after the demo you feel it's not the right fit, there's zero obligation. The consultation is free.",
  },
  {
    q: "How is this different from just hiring someone to reply messages?",
    a: "A manual process is slow, inconsistent, and hard to scale. We design systems that handle workflows reliably, integrate with your tools, and support growth without adding avoidable operational overhead.",
  },
  {
    q: "Can Beelio handle customer support too?",
    a: "Yes. We can automate FAQs, booking changes, order updates, complaint routing, and after-hours responses. For anything complex, the conversation can hand off to a human at the right time.",
  },
  {
    q: "How long until I see results?",
    a: "Most clients go live within 1 to 2 weeks. You'll see the first automated replies within days of launch. Measurable changes like faster response times and more bookings typically show up in the first 30 days.",
  },
  {
    q: "What's the catch? Why is the demo free?",
    a: "No catch. We start with a consultation because clarity matters before any build begins. We would rather map the requirements properly than force a vague sales conversation.",
  },
  {
    q: "What happens after the project launches?",
    a: "Every project includes a defined support period after launch. Bug fixes, minor updates, and guidance are included, and we can continue on a retainer if the project needs ongoing development.",
  },
  {
    q: "Do you work with businesses outside Uganda?",
    a: "Yes. We can support remote projects across East Africa, and our systems are designed to work with the tools, workflows, and mobile money needs common in the region.",
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
            Straight, practical answers so you can decide if this is right for your business.
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
