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
  Calendar,
} from "lucide-react";
import EnquiryPreview, { WhatsAppIcon } from "./EnquiryPreview";

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
  {
    title: "Book the next step",
    desc: "Let qualified prospects schedule a consultation so the enquiry does not stall in the chat thread.",
    tags: ["Calendar", "Reminders", "Handoff"],
  },
];

const audiences = [
  "Legal practices",
  "Clinics",
  "Logistics",
  "Consultancies",
  "Property",
  "Agencies",
];

const packages = [
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
    summary: "A professional presence for a Kampala law firm, built around how clients actually enquire.",
    href: "https://www.mcfordadvocates.co.ug/",
  },
  {
    name: "JK Express",
    category: "Logistics & property",
    summary: "A clearer digital front door for logistics and property enquiries.",
    href: "https://jkexpress.vercel.app/",
  },
];

const STEP_ICONS = { search: Search, design: PenTool, connect: Plug, launch: Rocket };

function StepIcon({ name }) {
  const Icon = STEP_ICONS[name];
  return Icon ? <Icon size={18} className="text-electric" /> : null;
}

const process = [
  {
    number: "01",
    title: "Discover",
    desc: "We understand your services, clients and current enquiry process.",
    icon: "search",
  },
  {
    number: "02",
    title: "Design",
    desc: "We shape the content, interface and conversion journey.",
    icon: "design",
  },
  {
    number: "03",
    title: "Connect",
    desc: "We configure WhatsApp, forms, booking and measurement.",
    icon: "connect",
  },
  {
    number: "04",
    title: "Launch",
    desc: "Your team reviews, learns the system and goes live.",
    icon: "launch",
  },
];

const faqs = [
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
  {
    question: "How is this different from a custom software build?",
    answer:
      "Growth is a focused website and WhatsApp client system, typically live in about seven days. Custom platforms, FinTech products and retainers follow a longer scoped engagement — see Services and Pricing if you need that path.",
  },
];

const related = [
  {
    href: "/services",
    label: "Services",
    desc: "AI software, FinTech platforms, and enterprise automation.",
  },
  {
    href: "/pricing",
    label: "Pricing",
    desc: "Project, retainer, and enterprise engagement models.",
  },
  {
    href: "/how-it-works",
    label: "How it works",
    desc: "The 2–4 week process for custom software builds.",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    desc: "Systems we have shipped for operational teams.",
  },
];

function NewTabHint() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}

function PrimaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-electric px-8 py-3 text-sm font-semibold text-[#0a1020] transition-colors duration-200 hover:bg-electric/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-[#080e1a] ${className}`}
    >
      {children}
      <NewTabHint />
    </a>
  );
}

export default function Growth() {
  return (
    <div className="bg-[#080e1a] text-white">
      <section className="relative overflow-hidden px-4 pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-electric/5 blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-white/30 text-xs uppercase tracking-widest mb-3 font-medium">
              Website, WhatsApp intake, and booking
            </p>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-14 max-w-md mx-auto"
          >
            <EnquiryPreview />
          </motion.div>
        </div>
      </section>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 rounded-2xl overflow-hidden border border-white/5 shadow-xl"
          >
            <img
              src="/aerps-com-pp8rmBQC7Yc-unsplash.jpg"
              alt="A service business handling client enquiries"
              className="w-full h-52 md:h-64 object-cover"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 bg-[#0d1526] rounded-2xl p-6 md:p-8 border border-white/5"
          >
            <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Who this is for</p>
            <h3 className="text-xl font-semibold text-white mb-3">
              Service businesses that live on enquiries
            </h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-2xl mb-6">
              Built for teams that need a credible website and a reliable WhatsApp response
              path — not a full custom platform. If you need enterprise software or FinTech
              infrastructure, start with{" "}
              <a href="/services" className="text-electric hover:text-electric/80">
                our core services
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-2">
              {audiences.map((item) => (
                <a
                  key={item}
                  href="/industries"
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70 hover:border-electric/30 hover:text-electric transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="packages" className="py-20 bg-[#0a1020] scroll-mt-24">
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
                  rel="noopener noreferrer"
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
            clearly, without hiding costs. Custom platforms and retainers are on{" "}
            <a href="/pricing" className="text-electric hover:text-electric/80">
              software pricing
            </a>
            .
          </p>
        </div>
      </section>

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
                rel="noopener noreferrer"
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
                <p className="text-white/50 text-sm leading-relaxed mt-3">{item.summary}</p>
                <span className="mt-auto pt-6 flex items-center gap-1.5 text-sm font-semibold text-electric">
                  View website
                  <NewTabHint />
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric hover:text-electric/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded-full px-2 py-1"
            >
              See more systems we have shipped <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

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
              From the first consultation to launch, here is what the Client Growth System looks
              like. Custom software follows a{" "}
              <a href="/how-it-works" className="text-electric hover:text-electric/80">
                2–4 week delivery process
              </a>
              .
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
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric hover:text-electric/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded-full px-2 py-1"
            >
              Ask another question
              <NewTabHint /> <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a1020]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Continue through the <span className="text-electric">rest of Beelio</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base">
              Growth is one offering. Explore custom software, engagement models, and the
              broader delivery process.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group bg-[#0d1526] rounded-2xl p-5 border border-white/5 hover:border-electric/20 transition-colors flex items-start justify-between gap-4"
              >
                <div>
                  <h3 className="text-white font-semibold">{item.label}</h3>
                  <p className="text-white/50 text-sm mt-1">{item.desc}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-electric mt-1 shrink-0 transition-transform group-hover:translate-x-1"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#080e1a]">
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
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryButton href={whatsappUrl()}>
              <WhatsAppIcon className="h-4 w-4" />
              Start a WhatsApp conversation
            </PrimaryButton>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white px-8 py-3 text-sm font-semibold hover:border-electric hover:text-electric transition-colors duration-200"
            >
              <Calendar size={16} />
              Book a consultation
            </a>
          </div>
          <p className="text-white/30 text-xs mt-5">
            No pressure. A focused conversation about what your business actually needs.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
