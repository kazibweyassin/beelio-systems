
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';


const WHATSAPP_NUMBER = "256786367460";

const whatsappUrl = (
  message = "I would like to discuss the Website + WhatsApp Client System.",
) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Beelio, ${message}`,
  )}`;

const essentialFeatures = [
  "Five-page professional website",
  "Mobile-first design",
  "WhatsApp and contact forms",
  "Google Maps and basic SEO",
  "First-year domain and hosting",
  "30 days of post-launch support",
];

const growthFeatures = [
  "Everything in Essential",
  "Custom content and visual design",
  "Consultation booking",
  "Client-intake automation",
  "WhatsApp FAQs and lead qualification",
  "Google Business and analytics setup",
  "Staff training and 60 days of support",
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your services, clients and current enquiry process.",
  },
  {
    number: "02",
    title: "Design",
    text: "We shape the content, interface and conversion journey.",
  },
  {
    number: "03",
    title: "Connect",
    text: "We configure WhatsApp, forms, booking and measurement.",
  },
  {
    number: "04",
    title: "Launch",
    text: "Your team reviews, learns the system and goes live.",
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
];

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="m5 10 3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4 10h11M11 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
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

export default function BeelioGrowthPage() {
  return (
    <main className="overflow-hidden bg-[#f4f6f1] text-[#081510] selection:bg-[#c9ff5a] selection:text-[#081510]">
      {/* Hero */}
       <JsonLd
              data={breadcrumbSchema([
                { name: 'Home', href: '/' },
                { name: 'Growth', href: '/growth' },
              ])}
            />
      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#06110d] px-6 py-16 text-white shadow-[0_28px_90px_rgba(6,17,13,0.18)] sm:px-10 lg:min-h-[650px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-[#c9ff5a]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 right-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/65">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#c9ff5a]/10 text-[#c9ff5a]">
                ✦
              </span>
              Beelio Client Growth System
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.065em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Your website should start{" "}
              <span className="text-[#c9ff5a]">conversations.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              We connect a polished business website with WhatsApp intake,
              automated FAQs and consultation booking—so every enquiry has a
              clear next step.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-[#c9ff5a] px-6 py-3.5 text-sm font-extrabold text-[#081510] shadow-[0_16px_40px_rgba(201,255,90,0.15)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(201,255,90,0.23)] focus:outline-none focus:ring-2 focus:ring-[#c9ff5a] focus:ring-offset-2 focus:ring-offset-[#06110d]"
              >
                <WhatsAppIcon />
                Request a free consultation
              </a>
              <a
                href="#beelio-packages"
                className="inline-flex items-center justify-center gap-2 px-3 py-3 text-sm font-bold text-white/80 transition hover:text-white"
              >
                View packages <ArrowIcon />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-7">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#06110d] bg-[#c9ff5a] text-[10px] font-black text-[#081510]">
                  JK
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#06110d] bg-white text-[10px] font-black text-[#081510]">
                  MF
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#06110d] bg-[#173329] text-xs font-black text-[#76efb1]">
                  +
                </span>
              </div>
              <p className="text-xs leading-5 text-white/45">
                <strong className="block text-white/80">
                  Built for service businesses
                </strong>
                that need faster, organised follow-up.
              </p>
            </div>
          </div>

          {/* Product-style visual, built only with Tailwind */}
          <div className="relative z-10 mt-14 min-h-[430px] lg:mt-0">
            <div className="absolute right-0 top-2 w-[92%] rotate-[1.5deg] overflow-hidden rounded-3xl border border-white/15 bg-[#edf1e9] shadow-2xl sm:w-[86%]">
              <div className="flex h-11 items-center justify-between bg-white px-4 text-[10px] text-slate-500">
                <span className="flex gap-1.5">
                  <i className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                  <i className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                  <i className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                </span>
                yourbusiness.com
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <div className="relative min-h-[300px] overflow-hidden p-7 text-[#081510]">
                <div className="absolute -right-14 -top-16 h-52 w-52 rounded-full bg-[#c9ff5a]/70 blur-2xl" />
                <div className="relative flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#081510] text-[10px] font-black text-[#c9ff5a]">
                    YB
                  </span>
                  <span className="flex gap-2">
                    <i className="h-1 w-7 rounded-full bg-[#081510]/15" />
                    <i className="h-1 w-7 rounded-full bg-[#081510]/15" />
                    <i className="h-1 w-7 rounded-full bg-[#081510]/15" />
                  </span>
                </div>
                <div className="relative mt-14 text-[10px] font-black uppercase tracking-[0.14em] text-[#081510]/45">
                  Professional service. Clear next step.
                </div>
                <div className="relative mt-4 space-y-2.5">
                  <i className="block h-5 w-4/5 rounded-full bg-[#081510]" />
                  <i className="block h-5 w-3/5 rounded-full bg-[#081510]" />
                </div>
                <div className="relative mt-6 space-y-2">
                  <i className="block h-1.5 w-3/4 rounded-full bg-[#081510]/15" />
                  <i className="block h-1.5 w-2/3 rounded-full bg-[#081510]/15" />
                  <i className="block h-1.5 w-1/2 rounded-full bg-[#081510]/15" />
                </div>
                <div className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-[#081510] px-4 py-2.5 text-[10px] font-bold text-white">
                  Start on WhatsApp <ArrowIcon className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>

            <div className="absolute left-0 top-44 w-[260px] rounded-2xl border border-white/15 bg-[#0a2018]/95 p-4 shadow-2xl backdrop-blur sm:w-[280px]">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-400 text-[#062c16]">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <strong className="block text-xs">New enquiry</strong>
                  <small className="text-[10px] text-white/40">Just now</small>
                </div>
                <span className="ml-auto h-2 w-2 rounded-full bg-[#c9ff5a] ring-4 ring-[#c9ff5a]/10" />
              </div>
              <div className="my-4 rounded-xl rounded-bl-sm bg-white/10 p-3 text-[11px] leading-5 text-white/75">
                Hi, I need help with a business website.
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <small className="block text-[9px] text-white/35">Service</small>
                  <strong className="text-[10px] font-semibold text-white/75">
                    Website &amp; automation
                  </strong>
                </div>
                <span className="rounded-full bg-[#c9ff5a]/10 px-2 py-1 text-[9px] font-bold text-[#c9ff5a]">
                  Qualified
                </span>
              </div>
            </div>

            <div className="absolute bottom-0 right-1 w-[240px] -rotate-1 rounded-2xl bg-white p-4 text-[#081510] shadow-2xl">
              <p className="text-[11px] font-bold">Lead journey</p>
              <div className="mt-4 flex items-center">
                {[1, 2].map((step) => (
                  <div className="contents" key={step}>
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#081510] text-[#c9ff5a]">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <i className="h-px flex-1 bg-slate-200" />
                  </div>
                ))}
                <span className="grid h-6 w-6 place-items-center rounded-full border border-emerald-400 text-[9px] font-black text-emerald-700 ring-4 ring-emerald-50">
                  3
                </span>
              </div>
              <div className="mt-2 flex justify-between text-[9px] text-slate-400">
                <span>Visit</span><span>Capture</span><span>Follow-up</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="mx-auto grid max-w-7xl grid-cols-2 border-b border-[#081510]/10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {[
          ["7 days", "Typical delivery"],
          ["WhatsApp-first", "Built around real enquiries"],
          ["60 days", "Support with Growth"],
          ["UGX 1.2m", "Packages start from"],
        ].map(([value, label], index) => (
          <div
            key={value}
            className={`flex min-h-28 flex-col justify-center border-[#081510]/10 px-4 py-6 sm:px-7 ${
              index % 2 === 0 ? "border-r" : ""
            } ${index < 2 ? "border-b lg:border-b-0" : ""} ${
              index !== 3 ? "lg:border-r" : ""
            }`}
          >
            <strong className="text-base tracking-tight">{value}</strong>
            <span className="mt-1 text-xs text-[#081510]/50">{label}</span>
          </div>
        ))}
      </section>

      {/* System */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-emerald-800">
              The real problem
            </span>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              A website alone is not a client system.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#081510]/55 sm:text-base">
            Traffic has little value when enquiries are missed, responses are
            slow, or the next step is unclear. We design the full path from first
            visit to your team&apos;s follow-up.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl bg-[#06110d] p-8 text-white sm:p-10">
            <span className="absolute right-8 top-8 font-mono text-[10px] text-white/35">01</span>
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#c9ff5a]/10 text-[#c9ff5a]">
              <WhatsAppIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-24 text-2xl font-semibold tracking-[-0.04em]">
              Capture the right details
            </h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/50">
              Guide prospects through a short intake instead of beginning every
              conversation from zero.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Name", "Service", "Contact"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-[10px] text-white/55">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-[#081510]/10 bg-white/60 p-8 sm:p-10">
            <span className="absolute right-8 top-8 font-mono text-[10px] text-[#081510]/35">02</span>
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-800">✦</span>
            <h3 className="mt-24 text-2xl font-semibold tracking-[-0.04em]">
              Answer common questions
            </h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#081510]/50">
              Handle routine FAQs instantly while keeping sensitive or complex
              matters with your team.
            </p>
            <div className="absolute -bottom-4 right-0 w-1/2 rounded-tl-2xl bg-[#e5ebe3] p-6 shadow-xl">
              <i className="block h-1.5 w-full rounded-full bg-[#081510]/15" />
              <i className="mt-2 block h-1.5 w-4/5 rounded-full bg-[#081510]/15" />
              <i className="mt-2 block h-1.5 w-1/2 rounded-full bg-emerald-400" />
            </div>
          </article>
        </div>
      </section>

      {/* Packages */}
      <section id="beelio-packages" className="border-y border-[#081510]/5 bg-[#e8ece4] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-emerald-800">Simple packages</span>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Start where your business is today.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#081510]/50 sm:text-base">
              Both packages give clients a professional way to discover,
              understand and contact your business.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-2">
            <article className="flex flex-col rounded-3xl border border-[#081510]/10 bg-white/75 p-7 sm:p-10">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-emerald-800">Essential</span>
              <p className="mt-4 min-h-12 text-sm leading-6 text-[#081510]/50">
                A credible online foundation for a growing service business.
              </p>
              <div className="mt-7 flex items-start gap-2">
                <span className="mt-2 text-xs font-bold text-[#081510]/45">UGX</span>
                <strong className="text-6xl font-semibold tracking-[-0.065em]">1.2m</strong>
              </div>
              <span className="mt-2 text-xs text-[#081510]/45">UGX 720,000 to begin</span>
              <ul className="my-8 space-y-4 border-t border-[#081510]/10 pt-8">
                {essentialFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-[#081510]/65">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl("I'm interested in the Essential package.")}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#081510]/15 px-6 py-4 text-sm font-extrabold transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
              >
                Choose Essential <ArrowIcon />
              </a>
            </article>

            <article className="relative flex flex-col rounded-3xl bg-[#06110d] p-7 text-white shadow-[0_30px_80px_rgba(8,21,16,0.16)] sm:p-10">
              <span className="absolute right-6 top-6 rounded-full bg-[#c9ff5a] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.12em] text-[#081510] sm:right-8 sm:top-8">
                Recommended
              </span>
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#76efb1]">Growth</span>
              <p className="mt-4 min-h-12 max-w-xs text-sm leading-6 text-white/50">
                A connected conversion and response system for an active team.
              </p>
              <div className="mt-7 flex items-start gap-2">
                <span className="mt-2 text-xs font-bold text-white/35">UGX</span>
                <strong className="text-6xl font-semibold tracking-[-0.065em]">2.5m</strong>
              </div>
              <span className="mt-2 text-xs text-white/40">UGX 1,500,000 to begin</span>
              <ul className="my-8 space-y-4 border-t border-white/10 pt-8">
                {growthFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/65">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#c9ff5a]/10 text-[#c9ff5a]">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl("I'm interested in the Growth package.")}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#c9ff5a] px-6 py-4 text-sm font-extrabold text-[#081510] transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(201,255,90,0.18)] focus:outline-none focus:ring-2 focus:ring-[#c9ff5a] focus:ring-offset-2 focus:ring-offset-[#06110d]"
              >
                Choose Growth <ArrowIcon />
              </a>
            </article>
          </div>

          <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-5 text-[#081510]/45">
            Need a different scope? We can remove features and quote the smaller
            project clearly—without hiding costs.
          </p>
        </div>
      </section>

      {/* Work */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-emerald-800">Selected work</span>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Real businesses. Clearer digital experiences.
            </h2>
          </div>
          <p className="text-sm leading-7 text-[#081510]/50 sm:text-base">
            Every project is shaped around the client journey, business model
            and actions that matter most.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <a
            href="https://www.mcfordadvocates.co.ug/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl bg-[#20292a] p-8 text-white transition hover:-translate-y-1 sm:p-10"
          >
            <span className="text-[10px] font-black tracking-[0.18em] text-white/60">McFORD</span>
            <div className="mt-24 rounded-2xl bg-white p-6 text-[#081510] shadow-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-700">Legal services</span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">McFord Advocates</h3>
              <div className="mt-8 space-y-2"><i className="block h-2 w-3/4 rounded-full bg-slate-200" /><i className="block h-2 w-1/2 rounded-full bg-slate-200" /></div>
            </div>
            <span className="mt-6 flex items-center justify-between text-sm font-bold">View website <ArrowIcon className="h-5 w-5 transition group-hover:translate-x-1" /></span>
          </a>

          <a
            href="https://jkexpress.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl bg-[#ffd76a] p-8 text-[#081510] transition hover:-translate-y-1 sm:p-10"
          >
            <span className="text-[10px] font-black tracking-[0.18em]">JK EXPRESS</span>
            <div className="mt-24 rounded-2xl bg-[#081510] p-6 text-white shadow-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#c9ff5a]">Logistics &amp; property</span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">JK Express</h3>
              <div className="mt-8 flex items-center gap-2"><i className="h-3 w-3 rounded-full bg-[#c9ff5a]" /><i className="h-px flex-1 border-t border-dashed border-white/30" /><i className="h-3 w-3 rounded-full bg-[#c9ff5a]" /></div>
            </div>
            <span className="mt-6 flex items-center justify-between text-sm font-bold">View website <ArrowIcon className="h-5 w-5 transition group-hover:translate-x-1" /></span>
          </a>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#06110d] px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#76efb1]">From brief to launch</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-6xl">A focused seven-day process.</h2>
          </div>
          <div className="mt-14 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <article key={step.number} className={`min-h-60 border-white/10 py-8 sm:px-7 ${index % 2 === 0 ? "sm:border-r" : ""} ${index > 1 ? "sm:border-t lg:border-t-0" : ""} ${index !== 3 ? "lg:border-r" : ""} ${index === 0 || index === 2 ? "sm:pl-0" : ""}`}>
                <span className="font-mono text-[10px] text-[#c9ff5a]">{step.number}</span>
                <h3 className="mt-20 text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-emerald-800">Questions, answered</span>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl">Know what you are buying.</h2>
            <a href={whatsappUrl("I have a question about the client system.")} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 border-b border-[#081510]/20 pb-1 text-sm font-bold">Ask another question <ArrowIcon /></a>
          </div>
          <div>
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0} className="group border-t border-[#081510]/10 last:border-b">
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-5 text-base font-bold tracking-tight [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#081510]/10 text-lg font-normal transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pb-7 pr-12 text-sm leading-7 text-[#081510]/55">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-[#06110d] px-6 py-20 text-center text-white">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 bg-emerald-400/5 blur-sm" />
          <div className="relative z-10">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#76efb1]">Ready when you are</span>
            <h2 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">Give every enquiry<br />a better next step.</h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base">Tell us what you sell and how clients contact you today. We&apos;ll recommend the right starting package.</p>
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#c9ff5a] px-7 py-4 text-sm font-extrabold text-[#081510] transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(201,255,90,0.18)] focus:outline-none focus:ring-2 focus:ring-[#c9ff5a] focus:ring-offset-2 focus:ring-offset-[#06110d]"><WhatsAppIcon /> Start a WhatsApp conversation</a>
            <small className="mt-5 block text-[10px] text-white/30">No pressure. A focused conversation about what your business actually needs.</small>
          </div>
        </div>
      </section>
    </main>
  );
}
