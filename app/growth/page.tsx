"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Plug,
  Rocket,
  Check,
  ArrowRight,
  MapPin,
} from "lucide-react";
import Hero from "@/components/Hero";
const WHATSAPP_NUMBER = "256786367460";

const whatsappUrl = (
  message = "I would like to discuss the Website + WhatsApp Client System.",
) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Beelio, ${message}`,
  )}`;

const stats = [
  { value: "7 days", label: "Typical delivery" },
  { value: "WhatsApp-first", label: "Built around real enquiries" },
  { value: "60 days", label: "Support with Growth" },
  { value: "UGX 1.2m", label: "Packages start from" },
];

const problems = [
  {
    title: "Capture the right details",
    desc: "Guide prospects through a short intake instead of beginning every conversation from zero.",
    tags: ["Name", "Service", "Contact"],
  },
  {
    title: "Answer common questions",
    desc: "Handle routine FAQs instantly while keeping sensitive or complex matters with your team.",
    tags: ["Pricing", "Availability", "Process"],
  },
];

type Package = {
  id: "essential" | "growth";
  label: string;
  tagline: string;
  priceUGX: string;
  depositNote: string;
  features: string[];
  recommended?: boolean;
};

const packages: Package[] = [
  {
    id: "essential",
    label: "Essential",
    tagline: "A credible online foundation for a growing service business.",
    priceUGX: "1.2m",
    depositNote: "UGX 720,000 to begin",
    features: [
      "Five-page professional website",
      "Mobile-first design",
      "WhatsApp and contact forms",
      "Google Maps and basic SEO",
      "First-year domain and hosting",
      "30 days of post-launch support",
    ],
  },
  {
    id: "growth",
    label: "Growth",
    tagline: "A connected conversion and response system for an active team.",
    priceUGX: "2.5m",
    depositNote: "UGX 1,500,000 to begin",
    recommended: true,
    features: [
      "Everything in Essential",
      "Custom content and visual design",
      "Consultation booking",
      "Client-intake automation",
      "WhatsApp FAQs and lead qualification",
      "Google Business and analytics setup",
      "Staff training and 60 days of support",
    ],
  },
];

const work = [
  {
    name: "McFord Advocates",
    category: "Legal services",
    href: "https://www.mcfordadvocates.co.ug/",
  },
  {
    name: "JK Express",
    category: "Logistics & property",
    href: "https://jkexpress.vercel.app/",
  },
];

const STEP_ICONS = { search: Search, design: PenTool, connect: Plug, launch: Rocket };
function StepIcon({ name }: { name: keyof typeof STEP_ICONS }) {
  const Icon = STEP_ICONS[name];
  return Icon ? <Icon size={18} className="text-electric" /> : null;
}

const process = [
  {
    number: "01",
    title: "Discover",
    desc: "We understand your services, clients and current enquiry process.",
    icon: "search" as const,
  },
  {
    number: "02",
    title: "Design",
    desc: "We shape the content, interface and conversion journey.",
    icon: "design" as const,
  },
  {
    number: "03",
    title: "Connect",
    desc: "We configure WhatsApp, forms, booking and measurement.",
    icon: "connect" as const,
  },
  {
    number: "04",
    title: "Launch",
    desc: "Your team reviews, learns the system and goes live.",
    icon: "launch" as const,
  },
];

export const faqs = [
  {
    question: "Do I need an existing website?",
    answer:
      "No. We can build from the ground up or improve an existing website while keeping the parts that still serve your business.",
  },
  {
    question: "What do you need from me?",
    answer:
      "Your logo, services, contact details and available photos. We guide you through the content so the project keeps moving.",
  },
  {
    question: "How does payment work?",
    answer:
      "A 60% deposit starts the project. The remaining 40% is paid after approval and before the system goes live.",
  },
  {
    question: "Will automation replace my team?",
    answer:
      "No. It handles repetitive first questions, captures lead details and makes follow-up easier. Your team remains in control of every relationship.",
  },
];

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  // Kept as a bespoke SVG rather than lucide's generic MessageCircle —
  // this is a WhatsApp-specific funnel, so the mark should read as WhatsApp
  // at a glance, not as a generic chat icon.
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.4 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4-.1.6.5 1.1 1.4 2 2.5 2.5.2.1.4.1.6-.1l.7-.8c.2-.2.4-.3.7-.1l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.3-.6 1.7-.5.5-1.3.7-2.1.6-1-.1-2.5-.6-4.1-2-1.3-1.2-2.2-2.7-2.5-3.8-.3-1.1 0-2.2.5-2.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function NewTabHint() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}

// Shared pill button — every primary CTA on the page uses this exact
// treatment so the "what do I click" pattern stays consistent end to end.
function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-electric px-8 py-3 text-sm font-semibold text-[#0a1020] transition-colors duration-200 hover:bg-electric/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-[#080e1a] ${className}`}
    >
      {children}
      <NewTabHint />
    </a>
  );
}

export default function GrowthPageClient() {
  return (
    <main className="bg-[#080e1a] text-white">
      {/* Mobile floating WhatsApp CTA — this is a WhatsApp-first funnel, so
          on small screens the primary action stays reachable without
          scrolling back up. */}
      
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-electric text-[#0a1020] shadow-xl transition-colors duration-200 hover:bg-electric/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:hidden"
        aria-label="Start a WhatsApp conversation with Beelio (opens in a new tab)"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>

      {/* Hero */}
      <section className="px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/10 px-4 py-1.5 text-xs font-medium text-electric mb-6">
              Beelio Client Growth System
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white">
              Your website should start <span className="text-electric">conversations.</span>
            </h1>
            <p className="text-white/50 max-w-xl mx-auto text-base md:text-lg mt-6">
              We connect a polished business website with WhatsApp intake, automated FAQs and
              consultation booking, so every enquiry has a clear next step.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryButton href={whatsappUrl()}>
                <WhatsAppIcon className="h-4 w-4" />
                Request a free consultation
              </PrimaryButton>
              <a
                href="#packages"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white transition-colors rounded-full px-3 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
              >
                View packages <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* WhatsApp preview card — one restrained visual instead of a
              layered mockup collage, in keeping with the rest of the site. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-14 max-w-md mx-auto bg-[#0d1526] rounded-2xl p-6 border border-white/5"
            aria-hidden="true"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-electric/10 border border-electric/30 text-electric">
                <WhatsAppIcon className="h-4 w-4" />
              </span>
              <div>
                <strong className="block text-xs text-white">New enquiry</strong>
                <small className="text-[10px] text-white/40">Just now</small>
              </div>
              <span className="ml-auto rounded-full bg-electric/10 border border-electric/20 px-2.5 py-1 text-[10px] font-medium text-electric">
                Qualified
              </span>
            </div>
            <div className="mt-4 rounded-xl rounded-bl-sm bg-white/5 p-3 text-xs leading-5 text-white/70">
              Hi, I need help with a business website.
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-4">
              {[0, 1, 2].map((step) => (
                <span
                  key={step}
                  className={`h-1.5 flex-1 rounded-full ${step < 2 ? "bg-electric" : "bg-white/10"}`}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-white/30">
              <span>Visit</span>
              <span>Capture</span>
              <span>Follow-up</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof stats */}
      <section className="py-16 bg-[#0a1020]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0d1526] rounded-2xl p-5 border border-white/5"
            >
              <strong className="block text-lg font-bold text-white">{stat.value}</strong>
              <span className="text-white/50 text-xs mt-1 block">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The real problem */}
      <section className="py-20 bg-[#080e1a]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A website alone is not <span className="text-electric">a client system</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base">
              Traffic has little value when enquiries are missed, responses are slow, or the
              next step is unclear.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-[#0d1526] rounded-2xl p-6 border border-white/5 hover:border-electric/20 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mt-3">{problem.desc}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {problem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 bg-[#0a1020]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start where your business is <span className="text-electric">today</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base">
              Both packages give clients a professional way to discover, understand and contact
              your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex flex-col rounded-2xl p-7 md:p-8 border ${
                  pkg.recommended
                    ? "bg-[#0d1526] border-electric/30"
                    : "bg-[#0d1526] border-white/5"
                }`}
              >
                {pkg.recommended && (
                  <span className="absolute right-6 top-6 rounded-full bg-electric px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0a1020]">
                    Recommended
                  </span>
                )}
                <span className="text-xs font-bold uppercase tracking-widest text-electric">
                  {pkg.label}
                </span>
                <p className="text-white/50 text-sm leading-6 mt-4 min-h-12 max-w-xs">
                  {pkg.tagline}
                </p>
                <div className="mt-6 flex items-start gap-2">
                  <span className="mt-2 text-xs font-bold text-white/40">UGX</span>
                  <strong className="text-5xl font-bold tracking-tight text-white">
                    {pkg.priceUGX}
                  </strong>
                </div>
                <span className="text-white/40 text-xs mt-2">{pkg.depositNote}</span>

                <ul className="flex flex-col gap-3 mt-7 pt-7 border-t border-white/5">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="mt-0.5 flex-shrink-0">
                        <Check size={16} className="text-electric" strokeWidth={2.5} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl(`I'm interested in the ${pkg.label} package.`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric ${
                    pkg.recommended
                      ? "bg-electric text-[#0a1020] hover:bg-electric/90"
                      : "border border-white/15 text-white hover:bg-white/5"
                  }`}
                >
                  Choose {pkg.label} <ArrowRight size={16} />
                  <NewTabHint />
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-white/40 text-xs max-w-2xl mx-auto mt-8">
            Need a different scope? We can remove features and quote the smaller project
            clearly, without hiding costs.
          </p>
        </div>
      </section>

      {/* Selected work */}
      <section className="py-20 bg-[#080e1a]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real businesses. <span className="text-electric">Clearer digital experiences.</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base">
              Every project is shaped around the client journey, business model and actions that
              matter most.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {work.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group bg-[#0d1526] rounded-2xl p-6 border border-white/5 hover:border-electric/20 transition-all duration-300 flex flex-col"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-electric/10 border border-electric/20 text-electric">
                  <MapPin size={16} />
                </span>
                <span className="text-white/40 text-xs font-medium mt-5">{item.category}</span>
                <h3 className="text-lg font-semibold text-white mt-1">{item.name}</h3>
                <span className="mt-auto pt-6 flex items-center gap-1.5 text-sm font-semibold text-electric">
                  View website<NewTabHint />
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Process — same numbered-circle + icon + connecting-line pattern as HowItWorks */}
      <section className="py-20 bg-[#0a1020]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A focused <span className="text-electric">seven-day process.</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base">
              From the first consultation to launch, here is what working with Beelio looks
              like.
            </p>
          </motion.div>

          <ol className="relative grid md:grid-cols-4 gap-6">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />
            {process.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-[#0d1526] rounded-2xl p-6 border border-white/5 hover:border-electric/20 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-electric/10 border border-electric/30 flex items-center justify-center text-electric font-bold text-sm">
                  {step.number}
                </div>
                <div className="w-9 h-9 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center">
                  <StepIcon name={step.icon} />
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1">{step.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#080e1a]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Know what you are <span className="text-electric">buying.</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.details
                key={faq.question}
                open={i === 0}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-[#0d1526] rounded-2xl border border-white/5 open:border-electric/20 px-6"
              >
                <summary className="flex items-center justify-between gap-5 py-5 text-sm font-semibold text-white cursor-pointer list-none focus:outline-none focus-visible:ring-2 focus-visible:ring-electric [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 text-electric text-base font-normal transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="text-white/50 text-sm leading-relaxed pb-5">{faq.answer}</p>
              </motion.details>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={whatsappUrl("I have a question about the client system.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric hover:text-electric/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded-full px-2 py-1"
            >
              Ask another question<NewTabHint /> <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0a1020]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Give every enquiry a better next step.
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base mt-5">
            Tell us what you sell and how clients contact you today. We&apos;ll recommend the
            right starting package.
          </p>
          <div className="mt-8">
            <PrimaryButton href={whatsappUrl()}>
              <WhatsAppIcon className="h-4 w-4" />
              Start a WhatsApp conversation
            </PrimaryButton>
          </div>
          <p className="text-white/30 text-xs mt-5">
            No pressure. A focused conversation about what your business actually needs.
          </p>
        </motion.div>
      </section>
    </main>
  );
}