"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send, Bot } from "lucide-react";

const BOT_NAME = "Bee";
const WHATSAPP = "https://wa.me/256786367460";

const scriptedFlow = [

  // ── WELCOME ────────────────────────────────────────────────────────────
  {
    id: "welcome",
    bot: "Hi, I'm Bee — Beelio's assistant. What kind of business do you run?",
    options: [
      { label: "Clinic / Pharmacy / Hospital", next: "clinic" },
      { label: "Restaurant / Food Business", next: "restaurant" },
      { label: "School / Training Centre", next: "school" },
      { label: "Retail / Shop / Supermarket", next: "retail" },
      { label: "Logistics / Transport / Delivery", next: "logistics" },
      { label: "SACCO / Microfinance / Finance", next: "finance" },
      { label: "Other type of business", next: "other" },
    ],
  },

  // ── CLINIC ─────────────────────────────────────────────────────────────
  {
    id: "clinic",
    bot: "Clinics and pharmacies come to us for patient management, appointment booking, billing automation, and WhatsApp reminders. What's your biggest challenge?",
    options: [
      { label: "Patient records are in files or spreadsheets", next: "clinic_records" },
      { label: "Too many missed appointments", next: "clinic_appointments" },
      { label: "Billing and payments are a mess", next: "clinic_billing" },
      { label: "Staff waste too much time on admin", next: "clinic_admin" },
    ],
  },
  {
    id: "clinic_records",
    bot: "Paper records and spreadsheets get lost, take time to find, and can't scale. We build digital patient management systems with quick search, full medical history, and secure role-based access — accessible from a phone or laptop.",
    options: [
      { label: "Can it work offline too?", next: "offline_support" },
      { label: "How much does it cost?", next: "pricing" },
      { label: "How long to build?", next: "timeline" },
      { label: "Let's discuss our needs", next: "whatsapp" },
    ],
  },
  {
    id: "clinic_appointments",
    bot: "Missed appointments mean lost revenue — sometimes 20–30% of your bookings. We build WhatsApp reminder bots that automatically message patients 24 hours and 2 hours before their slot. No-shows drop significantly.",
    options: [
      { label: "Can patients reschedule via WhatsApp?", next: "clinic_reschedule" },
      { label: "What does this cost?", next: "pricing" },
      { label: "Talk to the team", next: "whatsapp" },
    ],
  },
  {
    id: "clinic_reschedule",
    bot: "Yes — patients reply to the WhatsApp reminder and the system handles rescheduling automatically, updating your calendar and notifying staff. No manual coordination needed.",
    options: [
      { label: "That's exactly what we need", next: "qualify" },
      { label: "What's the full price?", next: "pricing" },
      { label: "Start the conversation", next: "whatsapp" },
    ],
  },
  {
    id: "clinic_billing",
    bot: "Billing chaos is common in clinics. We integrate invoicing directly into your patient system — auto-generating bills after each visit, tracking outstanding payments, and sending polite WhatsApp reminders. Supports MTN MoMo and Airtel Money.",
    options: [
      { label: "Does it support mobile money?", next: "mobile_money" },
      { label: "How much does this system cost?", next: "pricing" },
      { label: "Talk to the Beelio team", next: "whatsapp" },
    ],
  },
  {
    id: "clinic_admin",
    bot: "Repetitive admin — filling forms, copying data between registers, generating reports — eats hours every week. We automate these workflows so your staff focus on patients, not paperwork.",
    options: [
      { label: "Give me a specific example", next: "how_it_works" },
      { label: "What would this cost?", next: "pricing" },
      { label: "Book a free consultation", next: "whatsapp" },
    ],
  },

  // ── RESTAURANT ─────────────────────────────────────────────────────────
  {
    id: "restaurant",
    bot: "Restaurants and food businesses use our systems for digital ordering, customer loyalty automation, and kitchen management. What's slowing your business down?",
    options: [
      { label: "Taking orders is chaotic and error-prone", next: "restaurant_orders" },
      { label: "Customers don't come back enough", next: "restaurant_loyalty" },
      { label: "I want WhatsApp ordering for customers", next: "restaurant_whatsapp" },
      { label: "Managing staff, shifts and costs", next: "restaurant_staff" },
    ],
  },
  {
    id: "restaurant_orders",
    bot: "We build digital order management systems for dine-in, takeaway, and delivery. Orders flow to a kitchen display screen, reducing mistakes and wait times. Waiters take orders on tablets — everything tracked in real time.",
    options: [
      { label: "We do dine-in and delivery both", next: "qualify" },
      { label: "Mainly delivery orders", next: "qualify" },
      { label: "What does this cost?", next: "pricing" },
    ],
  },
  {
    id: "restaurant_loyalty",
    bot: "Customer retention is cheaper than new acquisition. We build WhatsApp loyalty bots that reward repeat customers automatically, send personalised birthday offers, and re-engage customers who haven't visited in a while. One Kampala café increased repeat visits by 40%.",
    options: [
      { label: "I want something like that", next: "qualify" },
      { label: "How does it work technically?", next: "how_it_works" },
      { label: "What's the price?", next: "pricing" },
    ],
  },
  {
    id: "restaurant_whatsapp",
    bot: "Your customers browse your menu and order directly inside WhatsApp — no app download required. Orders arrive on your phone or POS immediately. Works for pickup and delivery.",
    options: [
      { label: "Can it handle payment too?", next: "mobile_money" },
      { label: "How long to set this up?", next: "timeline" },
      { label: "Let's build this", next: "whatsapp" },
    ],
  },
  {
    id: "restaurant_staff",
    bot: "We build staff management modules — shift scheduling, attendance tracking, and daily cost summaries. Managers get a clear picture of labour costs vs revenue every day, without manual calculations.",
    options: [
      { label: "Does it track daily sales too?", next: "qualify" },
      { label: "What does it cost?", next: "pricing" },
      { label: "Talk to the team", next: "whatsapp" },
    ],
  },

  // ── SCHOOL ─────────────────────────────────────────────────────────────
  {
    id: "school",
    bot: "Schools and training centres use our systems for student management, fee collection, exam results, and parent communication via WhatsApp. What's your biggest pain?",
    options: [
      { label: "Student records and results management", next: "school_records" },
      { label: "Collecting and tracking school fees", next: "school_fees" },
      { label: "Communicating with parents is hard", next: "school_parents" },
      { label: "Managing timetables and staff", next: "school_admin" },
    ],
  },
  {
    id: "school_records",
    bot: "We build full student information systems — enrolment, class assignment, exam result entry, transcript generation, and end-of-term reports. Everything is digital, searchable, and printable.",
    options: [
      { label: "Can parents view results online?", next: "school_parents" },
      { label: "How much does this cost?", next: "pricing" },
      { label: "Book a free demo", next: "whatsapp" },
    ],
  },
  {
    id: "school_fees",
    bot: "Fee tracking is a major headache in schools. We build systems that record every payment, flag defaulters automatically, and send WhatsApp reminders to parents — saving your bursar hours every week. Integrates with MTN MoMo.",
    options: [
      { label: "Does it integrate with mobile money?", next: "mobile_money" },
      { label: "Can it generate fee statements?", next: "qualify" },
      { label: "What's the cost?", next: "pricing" },
    ],
  },
  {
    id: "school_parents",
    bot: "We build parent communication portals that send term fees reminders, result slips, and event notices via WhatsApp — to hundreds of parents at once. Parents can also check their child's balance and attendance online.",
    options: [
      { label: "How many parents can it handle?", next: "qualify" },
      { label: "How long to build?", next: "timeline" },
      { label: "Talk to the team", next: "whatsapp" },
    ],
  },
  {
    id: "school_admin",
    bot: "Our school management system includes timetable generation, staff attendance, leave tracking, and payroll summaries — giving administrators a complete picture from one dashboard.",
    options: [
      { label: "Can it handle multiple campuses?", next: "qualify" },
      { label: "What does it cost?", next: "pricing" },
      { label: "Book a free demo", next: "whatsapp" },
    ],
  },

  // ── RETAIL ─────────────────────────────────────────────────────────────
  {
    id: "retail",
    bot: "Retail shops and supermarkets use our systems for inventory control, sales tracking, supplier management, and customer loyalty programs. What's your main problem?",
    options: [
      { label: "Stock goes missing or runs out unexpectedly", next: "retail_stock" },
      { label: "I can't track daily sales properly", next: "retail_sales" },
      { label: "Customer follow-up and loyalty is weak", next: "retail_loyalty" },
      { label: "Managing multiple branches is complex", next: "retail_branches" },
    ],
  },
  {
    id: "retail_stock",
    bot: "Our inventory systems track every item in real time — alerting you when stock is low, recording every sale and purchase, and generating reorder suggestions automatically. No more guessing what's in your store.",
    options: [
      { label: "Can it work with a barcode scanner?", next: "qualify" },
      { label: "What does it cost?", next: "pricing" },
      { label: "See a live demo", next: "whatsapp" },
    ],
  },
  {
    id: "retail_sales",
    bot: "We build simple POS systems with daily sales reports, profit and loss summaries, and staff performance tracking — all accessible from your phone at the end of each day.",
    options: [
      { label: "Does it work without internet?", next: "offline_support" },
      { label: "How much does a POS system cost?", next: "pricing" },
      { label: "Talk to the team", next: "whatsapp" },
    ],
  },
  {
    id: "retail_loyalty",
    bot: "We build WhatsApp loyalty programs that give customers points per purchase, send personalised discount offers, and automatically re-engage customers who haven't shopped in a while.",
    options: [
      { label: "How does it work technically?", next: "how_it_works" },
      { label: "What's the cost?", next: "pricing" },
      { label: "Let's build this", next: "whatsapp" },
    ],
  },
  {
    id: "retail_branches",
    bot: "Multi-branch management is one of our specialities. All branches feed into one central dashboard — compare performance, transfer stock between branches, and manage pricing from one place.",
    options: [
      { label: "We have 3 branches — what would that cost?", next: "pricing" },
      { label: "How long to set up?", next: "timeline" },
      { label: "Discuss with the team", next: "whatsapp" },
    ],
  },

  // ── LOGISTICS ──────────────────────────────────────────────────────────
  {
    id: "logistics",
    bot: "Logistics and transport businesses use our systems for delivery tracking, automated customer updates, driver management, and billing. What's your biggest challenge?",
    options: [
      { label: "I can't track where deliveries are in real time", next: "logistics_tracking" },
      { label: "Customers keep calling for delivery updates", next: "logistics_updates" },
      { label: "Managing drivers and vehicles is manual", next: "logistics_drivers" },
      { label: "Billing clients and tracking payments", next: "logistics_billing" },
    ],
  },
  {
    id: "logistics_tracking",
    bot: "We build real-time delivery tracking systems — drivers update status from their phones, customers see live updates, and your operations team has a full view of all active deliveries.",
    options: [
      { label: "Can customers track on WhatsApp?", next: "logistics_updates" },
      { label: "What does this cost?", next: "pricing" },
      { label: "Talk to the team", next: "whatsapp" },
    ],
  },
  {
    id: "logistics_updates",
    bot: "Yes — customers receive a WhatsApp message when their order is picked up, when it's en route, and when it's delivered. No more inbound calls asking 'where's my package?'",
    options: [
      { label: "That would save us a lot of time", next: "qualify" },
      { label: "How long to build?", next: "timeline" },
      { label: "Let's talk pricing", next: "pricing" },
    ],
  },
  {
    id: "logistics_drivers",
    bot: "We build driver management dashboards — assign trips, track hours, record fuel expenses, and monitor performance. Drivers use a simple mobile app. Management sees everything from a web dashboard.",
    options: [
      { label: "We have a fleet of 10+ vehicles", next: "qualify" },
      { label: "What does this cost?", next: "pricing" },
      { label: "Speak to the team", next: "whatsapp" },
    ],
  },
  {
    id: "logistics_billing",
    bot: "We automate client billing — generate invoices per delivery, track which clients have paid, and send WhatsApp reminders for overdue balances. Integrates with mobile money.",
    options: [
      { label: "Does it support MTN MoMo?", next: "mobile_money" },
      { label: "What does it cost?", next: "pricing" },
      { label: "Book a free consultation", next: "whatsapp" },
    ],
  },

  // ── FINANCE ────────────────────────────────────────────────────────────
  {
    id: "finance",
    bot: "SACCOs, microfinance institutions, and investment clubs come to us for loan management, member portals, automated repayment reminders, and reporting. What do you need most?",
    options: [
      { label: "Managing loans and repayments", next: "finance_loans" },
      { label: "Member registration and contributions", next: "finance_members" },
      { label: "Sending repayment reminders", next: "finance_reminders" },
      { label: "Financial reports and compliance", next: "finance_reports" },
    ],
  },
  {
    id: "finance_loans",
    bot: "Our loan management systems track disbursements, calculate interest automatically, record repayments, and flag overdue accounts. Loan officers can access everything from their phones in the field.",
    options: [
      { label: "Can it handle group loans?", next: "qualify" },
      { label: "How much does it cost?", next: "pricing" },
      { label: "Book a free demo", next: "whatsapp" },
    ],
  },
  {
    id: "finance_members",
    bot: "We build member portals where individuals can register, view their contribution history, apply for loans, and receive monthly statements — all via a simple web link or WhatsApp.",
    options: [
      { label: "We have 500+ members — can it scale?", next: "qualify" },
      { label: "What does it cost?", next: "pricing" },
      { label: "Talk to the team", next: "whatsapp" },
    ],
  },
  {
    id: "finance_reminders",
    bot: "Chasing late payers manually is exhausting. We build WhatsApp reminder bots that send personalised payment reminders automatically — 7 days before due, on the due date, and 3 days after. Recovery rates improve significantly.",
    options: [
      { label: "How does the bot get set up?", next: "how_it_works" },
      { label: "What's the cost?", next: "pricing" },
      { label: "Let's build this", next: "whatsapp" },
    ],
  },
  {
    id: "finance_reports",
    bot: "We build automated reporting dashboards — portfolio at risk, delinquency rates, income statements, and member contribution summaries. All exportable to PDF and Excel for audits.",
    options: [
      { label: "Does it meet Bank of Uganda requirements?", next: "qualify" },
      { label: "What does it cost?", next: "pricing" },
      { label: "Speak to the team", next: "whatsapp" },
    ],
  },

  // ── OTHER ──────────────────────────────────────────────────────────────
  {
    id: "other",
    bot: "No problem — we work with all kinds of businesses across Uganda and East Africa. What is the main problem you want software to solve?",
    options: [
      { label: "Save time on manual and repetitive work", next: "other_automation" },
      { label: "Automate customer follow-ups", next: "other_crm" },
      { label: "Build a custom web platform or portal", next: "other_platform" },
      { label: "Add a WhatsApp chatbot to my business", next: "other_chatbot" },
    ],
  },
  {
    id: "other_automation",
    bot: "We identify the most time-consuming tasks in your workflow and build automation around them — generating reports, processing orders, sending notifications, or syncing data between systems.",
    options: [
      { label: "Can you give me a specific example?", next: "how_it_works" },
      { label: "What does this cost?", next: "pricing" },
      { label: "Let's talk", next: "whatsapp" },
    ],
  },
  {
    id: "other_crm",
    bot: "We build customer follow-up systems that automatically message customers after a purchase, re-engage inactive ones, and send personalised offers — all via WhatsApp, without you lifting a finger.",
    options: [
      { label: "How does the setup work?", next: "how_it_works" },
      { label: "What's the price?", next: "pricing" },
      { label: "Talk to the team", next: "whatsapp" },
    ],
  },
  {
    id: "other_platform",
    bot: "We build custom web platforms — booking systems, member portals, admin dashboards, e-commerce, or internal tools. Built to your exact workflow, not a template.",
    options: [
      { label: "How long does it take to build?", next: "timeline" },
      { label: "What does a platform cost?", next: "pricing" },
      { label: "Discuss my project", next: "whatsapp" },
    ],
  },
  {
    id: "other_chatbot",
    bot: "We build WhatsApp chatbots that handle customer queries, take orders, book appointments, and collect leads — 24 hours a day. The bot hands off to a human only when truly necessary.",
    options: [
      { label: "How does the bot learn my business?", next: "how_it_works" },
      { label: "What does a chatbot cost?", next: "pricing" },
      { label: "Let's build one", next: "whatsapp" },
    ],
  },

  // ── CROSS-CUTTING NODES ────────────────────────────────────────────────
  {
    id: "qualify",
    bot: "Based on what you've described, we've built something similar for businesses here in Uganda. We offer a free 30-minute consultation — no obligation — to map out exactly what you need and give you a realistic quote.",
    options: [
      { label: "Book the free consultation", next: "whatsapp" },
      { label: "What will it cost?", next: "pricing" },
      { label: "How long will it take?", next: "timeline" },
      { label: "Can I see past work?", next: "case_study" },
      { label: "I'm not ready yet", next: "not_ready" },
    ],
  },
  {
    id: "pricing",
    bot: "Pricing depends on scope. Here's a rough guide:\n\n• WhatsApp Chatbot — from UGX 2.5M\n• Business Automation — from UGX 4M\n• Full Custom System — from UGX 8M\n\nAll prices include 3 months of free support after launch. We're significantly more affordable than international agencies — and we're right here in Kampala.",
    options: [
      { label: "That's within budget — let's talk", next: "whatsapp" },
      { label: "How long does it take?", next: "timeline" },
      { label: "Do you offer a payment plan?", next: "payment_plan" },
      { label: "What's included in support?", next: "maintenance" },
    ],
  },
  {
    id: "timeline",
    bot: "Here's a realistic timeline:\n\n• WhatsApp Chatbot — 1–2 weeks\n• Business Automation — 2–3 weeks\n• Full Custom System — 3–6 weeks\n\nWe work in short sprints — you see real progress every few days, not just at the end.",
    options: [
      { label: "That's fast — let's get started", next: "whatsapp" },
      { label: "What does it cost?", next: "pricing" },
      { label: "How does the process work?", next: "how_it_works" },
    ],
  },
  {
    id: "how_it_works",
    bot: "Here's how we work:\n\n1. Free 30-min consultation — we map your workflow\n2. We send a proposal: scope, price and timeline\n3. You approve and we start building\n4. You review progress every few days\n5. We go live — and stay on for support\n\nNo payment until you've approved the proposal.",
    options: [
      { label: "That sounds straightforward — let's start", next: "whatsapp" },
      { label: "What does it cost?", next: "pricing" },
      { label: "What happens after launch?", next: "maintenance" },
    ],
  },
  {
    id: "mobile_money",
    bot: "Yes — we integrate MTN Mobile Money and Airtel Money into all our systems. Customers pay directly, payments are recorded automatically, and your accounts update in real time. No manual reconciliation.",
    options: [
      { label: "That's perfect — let's discuss our project", next: "whatsapp" },
      { label: "What does the full system cost?", next: "pricing" },
      { label: "How long to build?", next: "timeline" },
    ],
  },
  {
    id: "offline_support",
    bot: "Yes — we build systems that work offline and sync automatically when internet is restored. Important for businesses in areas with unreliable connectivity. Your data stays safe locally until it can sync.",
    options: [
      { label: "That's important for us — let's talk", next: "whatsapp" },
      { label: "What does this cost?", next: "pricing" },
      { label: "How long to build?", next: "timeline" },
    ],
  },
  {
    id: "maintenance",
    bot: "Every system we build includes:\n\n• 3 months free support after launch\n• Bug fixes and minor updates included\n• Ongoing support from UGX 500K/month after that\n• WhatsApp support line — you message us, we respond same day\n\nYou're never left on your own after launch.",
    options: [
      { label: "Good to know — let's talk", next: "whatsapp" },
      { label: "What does the full project cost?", next: "pricing" },
      { label: "How does the build process work?", next: "how_it_works" },
    ],
  },
  {
    id: "payment_plan",
    bot: "Yes — we offer flexible payment schedules:\n\n• 30% to start (after proposal approval)\n• 40% at mid-project review\n• 30% on final delivery\n\nFor ongoing systems we also offer monthly subscription pricing. We want to be accessible to African businesses, not just big corporates.",
    options: [
      { label: "That works for us — let's start", next: "whatsapp" },
      { label: "What's included in maintenance?", next: "maintenance" },
      { label: "How long does it take?", next: "timeline" },
    ],
  },
  {
    id: "case_study",
    bot: "Here are a few real examples:\n\n• A Kampala clinic — patient system that cut admin time by 60%\n• A restaurant chain — WhatsApp loyalty bot that increased repeat visits by 40%\n• A local SACCO — loan management system for 800+ members with automated reminders\n\nWant to see the full portfolio?",
    options: [
      { label: "Yes, show me the portfolio page", next: "portfolio_link" },
      { label: "My business is similar — let's talk", next: "whatsapp" },
      { label: "What would something like this cost?", next: "pricing" },
    ],
  },
  {
    id: "portfolio_link",
    bot: "Visit the Case Studies section on our homepage at beelio.tech — each one shows the problem, what we built, and the outcome. If you see something similar to your business, that's a good starting point for our conversation.",
    options: [
      { label: "I've seen enough — let's talk", next: "whatsapp" },
      { label: "What does a project cost?", next: "pricing" },
    ],
  },
  {
    id: "not_ready",
    bot: "No rush at all — that's completely fine. The free consultation is just a conversation with no pressure. You don't have to commit to anything. It's often useful just to understand what's possible and what it would cost.",
    options: [
      { label: "OK, I'll book the free call", next: "whatsapp" },
      { label: "Can you send me more information?", next: "email_info" },
      { label: "How much does it typically cost?", next: "pricing" },
    ],
  },
  {
    id: "email_info",
    bot: "Of course — send us a message on WhatsApp and we'll send you our service overview and pricing guide. It's a short PDF with everything you need. No spam, just the information you asked for.",
    options: [
      { label: "OK, I'll message on WhatsApp", next: "whatsapp" },
    ],
  },

  // ── TERMINAL ───────────────────────────────────────────────────────────
  {
    id: "whatsapp",
    bot: "Click below to open a WhatsApp conversation with our team. Just tell them what you discussed with Bee — we reply within a few hours, usually much faster.",
    options: [],
    whatsapp: true,
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState("welcome");
  const [hasGreeted, setHasGreeted] = useState(false);
  const bottomRef = useRef(null);

  // Load welcome message
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      const welcome = scriptedFlow.find((s) => s.id === "welcome");
      setMessages([{ from: "bot", text: welcome.bot, options: welcome.options }]);
      setHasGreeted(true);
    }
  }, [isOpen]);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOption = (option) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      { from: "user", text: option.label },
    ]);

    // Find next step
    const next = scriptedFlow.find((s) => s.id === option.next);
    if (!next) return;

    setCurrentStep(next.id);

    // Bot replies with slight delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: next.bot,
          options: next.options,
          whatsapp: next.whatsapp,
        },
      ]);
    }, 600);
  };

  const lastMessage = messages[messages.length - 1];

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 md:right-8 w-[350px] max-h-[580px] bg-[#0d1526] border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0a1020] border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-electric/20 border border-electric/30 flex items-center justify-center">
                  <Bot size={16} className="text-electric" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{BOT_NAME}</p>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/40 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-electric text-[#0a1020] font-medium rounded-br-sm"
                        : "bg-white/5 text-white/80 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Options */}
              {lastMessage?.from === "bot" && lastMessage?.options?.length > 0 && (
                <div className="flex flex-col gap-2 mt-1">
                  {lastMessage.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleOption(opt)}
                      className="text-left text-sm px-4 py-2 rounded-xl border border-electric/20 text-electric hover:bg-electric/10 transition-colors duration-200"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}

              {/* WhatsApp CTA */}
              {lastMessage?.whatsapp && (
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-center bg-green-500 text-white font-semibold px-4 py-2.5 rounded-xl hover:bg-green-600 transition-colors duration-200 text-sm"
                >
                  <MessageCircle size={14} className="inline mr-1.5" /> Chat on WhatsApp
                </a>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-white/5 text-center">
              <p className="text-white/20 text-xs">Powered by Beelio AI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-4 md:right-8 w-14 h-14 bg-electric text-[#0a1020] rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-electric/90 transition-colors duration-200"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}