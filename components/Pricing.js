"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Basic",
    price: "From $199/month",
    features: ["WhatsApp bot", "1 custom workflow", "Email support"],
  },
  {
    name: "Standard",
    price: "From $499/month",
    features: ["Everything in Basic", "API integrations", "Monthly reports"],
  },
  {
    name: "Advanced",
    price: "From $999/month",
    features: ["All features", "Dedicated engineer", "24/7 support"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-[#080e1a] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Easy pricing
            <br />
            <span className="text-electric">for serious people</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Three simple tiers to help you get started without the guesswork.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 rounded-2xl overflow-hidden border border-white/5 shadow-xl"
        >
          <img
            src="/jakub-zerdzicki-9GfR3zLyy6o-unsplash.jpg"
            alt="Simple, transparent pricing"
            className="w-full h-48 md:h-56 object-cover"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#0d1526] rounded-2xl p-6 border border-white/5 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {tier.name}
              </h3>
              <p className="text-electric font-bold mb-4">{tier.price}</p>
              <ul className="text-white/50 text-sm mb-6 space-y-1 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j}>• {f}</li>
                ))}
              </ul>
              <a
                href="https://wa.me/256786367460"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-electric text-[#0a1020] font-semibold px-6 py-3 rounded-full hover:bg-electric/90 transition-colors duration-200"
              >
                Get a Free WhatsApp Demo
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}