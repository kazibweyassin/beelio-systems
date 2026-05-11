"use client";

import { motion } from "framer-motion";

const industries = [
  { title: "Clinics & Pharmacies" },
  { title: "Restaurants & Food Delivery" },
  { title: "Schools & Training Centres" },
  { title: "Logistics & Transport" },
  { title: "Retail Shops" },
  {
    title: "FinTech & Financial Services",
    description:
      "SACCOs, microfinance institutions, digital wallets, and payment platforms. We build loan management systems, mobile money integrations, member portals, and automated financial reporting tools for East African financial service providers.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-[#0a1020] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            We work with
            <br />
            <span className="text-electric">these industries</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Our tools are built for businesses who live and breathe WhatsApp.
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
            src="/restuarant.jpg"
            alt="African businesses powered by automation"
            className="w-full h-56 md:h-64 object-cover"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0d1526] rounded-xl p-6 border border-white/5 text-center text-electric font-medium"
            >
              <div>{item.title}</div>
              {item.description ? (
                <p className="mt-3 text-sm leading-relaxed text-white/60 font-normal">
                  {item.description}
                </p>
              ) : null}
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