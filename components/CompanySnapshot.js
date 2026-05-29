"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Users, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: BrainCircuit,
    title: "What we build",
    text: "AI-powered software, FinTech platforms, enterprise automation, reporting tools, and integrations that reduce manual work.",
  },
  {
    icon: Users,
    title: "Who we work with",
    text: "FinTech companies, financial institutions, enterprises, and scaling businesses across Africa and internationally.",
  },
  {
    icon: ShieldCheck,
    title: "How we work",
    text: "We scope the system clearly, architect around the business process, test before launch, and stay available after go-live.",
  },
];

export default function CompanySnapshot() {
  return (
    <section className="py-20 bg-[#080e1a] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-white/30 text-xs uppercase tracking-widest mb-3">
            Company Snapshot
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            AI software and FinTech systems for serious businesses
          </h2>
          <p className="text-white/55 text-base leading-relaxed">
            Beelio Technologies is an AI software and FinTech development company building intelligent systems for emerging markets.
          </p>
          <p className="text-white/55 text-base leading-relaxed mt-4">
            We design and deliver custom financial platforms, AI agents, and enterprise automation tools for FinTech companies, financial institutions, and scaling businesses across Africa and internationally.
          </p>
          <p className="text-white/55 text-base leading-relaxed mt-4">
            Our work sits at the intersection of financial technology, artificial intelligence, and operational infrastructure — solving complex problems that generic software cannot.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#0d1526] rounded-2xl p-6 border border-white/5"
            >
              <div className="w-11 h-11 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center mb-4">
                <item.icon size={22} className="text-electric" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 bg-[#0d1526] rounded-2xl p-6 border border-electric/15 text-white/80"
        >
          <p className="text-white font-semibold">Founded by Yassin Kazibwe, Founder &amp; CEO</p>
          <p className="text-white/55 text-sm mt-2">LinkedIn: https://www.linkedin.com/in/yassin-kazibwe-95625613b/</p>
          <p className="text-white/55 text-sm mt-1">Kampala, Uganda | [Second city placeholder]</p>
        </motion.div>
      </div>
    </section>
  );
}