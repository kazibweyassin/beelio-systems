"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send } from "lucide-react";

const BOT_NAME = "Bee";
const WHATSAPP = "https://wa.me/256786367460";

const scriptedFlow = [
  {
    id: "welcome",
    bot: "Hey 👋 I'm Bee, Beelio's AI assistant. What kind of business do you run?",
    options: [
      { label: "School / Education", next: "education" },
      { label: "Retail / Shop", next: "retail" },
      { label: "Logistics / Delivery", next: "logistics" },
      { label: "SACCO / Finance", next: "finance" },
      { label: "Other", next: "other" },
    ],
  },
  {
    id: "education",
    bot: "Schools usually need student management systems, fee tracking, and parent communication tools. We can automate all of that and add an AI assistant for parents. What's your biggest headache right now?",
    options: [
      { label: "Managing student records", next: "qualify" },
      { label: "Collecting fees", next: "qualify" },
      { label: "Communicating with parents", next: "qualify" },
    ],
  },
  {
    id: "retail",
    bot: "For retail businesses we typically build inventory management, sales tracking, and customer follow-up automation. Which problem is costing you the most right now?",
    options: [
      { label: "Tracking inventory", next: "qualify" },
      { label: "Following up with customers", next: "qualify" },
      { label: "Managing orders", next: "qualify" },
    ],
  },
  {
    id: "logistics",
    bot: "Logistics companies love our delivery tracking systems with automated customer updates and route optimization. What's slowing you down?",
    options: [
      { label: "Tracking deliveries", next: "qualify" },
      { label: "Updating customers", next: "qualify" },
      { label: "Managing drivers", next: "qualify" },
    ],
  },
  {
    id: "finance",
    bot: "For SACCOs we build loan management systems, automated repayment reminders, and member portals. What do you need most?",
    options: [
      { label: "Loan tracking", next: "qualify" },
      { label: "Repayment reminders", next: "qualify" },
      { label: "Member management", next: "qualify" },
    ],
  },
  {
    id: "other",
    bot: "No problem — we work with all kinds of businesses. Can you describe the main problem you want software to solve?",
    options: [
      { label: "Save time on manual work", next: "qualify" },
      { label: "Automate customer follow-ups", next: "qualify" },
      { label: "Build a custom platform", next: "qualify" },
    ],
  },
  {
    id: "qualify",
    bot: "That's exactly the kind of problem we solve. 🎯 We can build a custom system with AI built in — and give you a free consultation with no obligation. Want to talk to the team?",
    options: [
      { label: "Yes, let's talk on WhatsApp", next: "whatsapp" },
      { label: "I have more questions", next: "more" },
    ],
  },
  {
    id: "more",
    bot: "Of course! We build with Next.js, Python, and integrate AI agents using the latest tools. Projects typically take 2–4 weeks and are priced for African businesses. Anything specific you want to know?",
    options: [
      { label: "How much does it cost?", next: "pricing" },
      { label: "How long does it take?", next: "timeline" },
      { label: "Talk to the team", next: "whatsapp" },
    ],
  },
  {
    id: "pricing",
    bot: "Pricing depends on scope — but we're significantly more affordable than international agencies. A typical project starts from 3M UGX. The best way to get an accurate quote is a quick chat with our team.",
    options: [
      { label: "Let's chat on WhatsApp", next: "whatsapp" },
      { label: "How long does it take?", next: "timeline" },
    ],
  },
  {
    id: "timeline",
    bot: "Most projects are live within 2–4 weeks. We start with a free consultation, agree on scope, then build fast. You'll see progress every few days.",
    options: [
      { label: "Let's get started", next: "whatsapp" },
      { label: "How much does it cost?", next: "pricing" },
    ],
  },
  {
    id: "whatsapp",
    bot: "Perfect! Click below to chat with our team on WhatsApp. We reply within 24 hours. 🚀",
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
            className="fixed bottom-24 right-4 md:right-8 w-[340px] max-h-[520px] bg-[#0d1526] border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0a1020] border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-electric/20 border border-electric/30 flex items-center justify-center text-sm">
                  🤖
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
                  💬 Chat on WhatsApp
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