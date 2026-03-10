"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "From UGX 2.5M",
    note: "One-off project fee",
    popular: false,
    features: [
      "WhatsApp chatbot or automation",
      "1 custom workflow",
      "Mobile money integration",
      "3 months free support",
      "WhatsApp support line",
    ],
  },
  {
    name: "Business",
    price: "From UGX 4M",
    note: "One-off project fee",
    popular: true,
    features: [
      "Everything in Starter",
      "Full management system or web app",
      "Staff and admin dashboard",
      "Reports and analytics",
      "API and third-party integrations",
      "3 months free support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom quote",
    note: "For complex or multi-branch builds",
    popular: false,
    features: [
      "Everything in Business",
      "Multi-branch or multi-role systems",
      "Mobile app (iOS and Android)",
      "Dedicated engineer throughout",
      "Priority 24/7 support",
      "Ongoing monthly retainer available",
    ],
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
              className={`bg-[#0d1526] rounded-2xl p-6 border flex flex-col relative ${
                tier.popular
                  ? "border-electric/50 shadow-lg shadow-electric/10"
                  : "border-white/5"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-electric text-[#0a1020] text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-1 text-white">
                {tier.name}
              </h3>
              <p className="text-electric font-bold text-lg mb-1">{tier.price}</p>
              <p className="text-white/30 text-xs mb-5">{tier.note}</p>
              <ul className="text-white/60 text-sm mb-6 space-y-2 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric mt-1.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/256786367460"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-block font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-center ${
                  tier.popular
                    ? "bg-electric text-[#0a1020] hover:bg-electric/90"
                    : "border border-electric/30 text-electric hover:bg-electric/10"
                }`}
              >
                {tier.name === "Enterprise" ? "Request a Quote" : "Get Started"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}