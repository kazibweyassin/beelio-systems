"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$99/mo",
    note: "For small teams",
    typical: "WhatsApp automation for a single location. Perfect for small salons, clinics, or retailers.",
    popular: false,
    features: [
      "WhatsApp chatbot or automation",
      "1 custom workflow",
      "Basic booking & reminders",
      "Email support",
      "3 months free onboarding",
    ],
  },
  {
    name: "Pro",
    price: "$249/mo",
    note: "For growing businesses",
    typical: "Multi-location, API access, custom branding, and advanced integrations.",
    popular: true,
    features: [
      "Everything in Starter",
      "Multi-location & multi-user support",
      "API access",
      "Custom branding (white-label)",
      "Stripe & Google Calendar integration",
      "Priority onboarding",
      "Live chat support",
    ],
  },
  {
    name: "Enterprise",
    price: "Contact us",
    note: "Custom quote for enterprise",
    typical: "For large organizations needing advanced features, integrations, and support.",
    popular: false,
    features: [
      "Everything in Pro",
      "Multiple WhatsApp lines",
      "Advanced reporting & analytics",
      "Audit logs & compliance",
      "SLA & dedicated success manager",
      "Custom integrations (HubSpot, Shopify, etc.)",
      "24/7 enterprise support",
    ],
    cta: {
      label: "Contact us for enterprise pricing",
      href: "/contact",
    },
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
            Simple pricing
            <br />
            <span className="text-electric">built for growing businesses</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Three transparent tiers so you know exactly what you’re getting before we write a single line of code.
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
              <p className="text-white/30 text-xs mb-1">{tier.note}</p>
              {tier.typical && (
                <p className="text-white/40 text-xs mb-5">{tier.typical}</p>
              )}
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