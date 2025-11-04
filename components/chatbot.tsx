"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Sender = "bot" | "user";
type Message = {
  id: string;
  sender: Sender;
  text: string;
  time?: string;
  // optional: whether this message is a quick-reply seed (UI-only)
  meta?: { quick?: boolean };
};

const BOT_NAME = "Afri Bot";

// Hardcoded bot replies for quick replies
const QUICK_REPLY_MAP: Record<string, string> = {
  services:
    "AfriTech offers comprehensive digital solutions: 1) Custom Software Development (Web, Mobile, Enterprise Systems) 2) Fintech Solutions (Digital Wallets, Payment Gateways, Blockchain) 3) ERP & Business Systems (Inventory, HR, CRM) 4) IT Consulting & System Integration 5) Training & Capacity Building 6) Technology Infrastructure (Cloud, Networking, Security) 7) Innovation Labs & R&D. Ready to transform your business?",
  support:
    "Contact us: 📧 afritech2050@gmail.com | 📞 +251 91 104 1620 | 🌐 www.afritechplc.com | 📍 Mexico Sengatera, Traders Union Building, 8th Floor. Our team is ready to help with your project needs!",
  about:
    "AfriTech Group PLC: Building digital experiences that transform ideas into impact. A next-generation tech company accelerating Africa's digital transformation. Our mission: accelerate Africa's digital transformation through accessible, secure, scalable solutions. Vision: build Africa's digital backbone where every business thrives. Led by Esmael Beshir (CEO), Natnael Solomon (CTO), Natnael Mahteme (COO), Fuad Kedir (CFO), and expert teams in development, design, QA, and operations. We blend cutting-edge tech with local market knowledge.",
};

function id() {
  return Math.random().toString(36).slice(2, 9);
}

// MessageBubble — reusable
function MessageBubble({ message }: { message: Message }) {
  const isBot = message.sender === "bot";
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className={`max-w-[85%] break-words text-sm`}
    >
      <div
        className={`px-3 py-2 rounded-2xl shadow-sm inline-block ${
          isBot
            ? "bg-[#2C5241] text-white rounded-bl-none" // bot: dark green
            : "bg-white border border-[#A18136] text-[#333333] rounded-br-none" // user: white with gold border
        }`}
      >
        {message.text}
      </div>
    </motion.div>
  );
}

// Typing animated dots component
function TypingDots() {
  return (
    <div className="w-16 flex items-center justify-center gap-1">
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="w-2 h-2 rounded-full bg-white opacity-90"
      />
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear", delay: 0.12 }}
        className="w-2 h-2 rounded-full bg-white opacity-90"
      />
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear", delay: 0.24 }}
        className="w-2 h-2 rounded-full bg-white opacity-90"
      />
    </div>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto-greet when opened first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // small delay so animation looks natural
      queueBotMessage(
        "👋 Hello! I'm Afri Bot, your virtual assistant for AfriTech Group PLC. Building digital experiences that transform ideas into impact. We're a next-generation technology company dedicated to accelerating Africa's digital transformation. How can I help you today?",
        600
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Auto-scroll on changes
  useEffect(() => {
    scrollToBottom();
  }, [messages, isBotTyping]);

  function scrollToBottom() {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    // smooth scroll
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }

  function pushMessage(sender: Sender, text: string, meta?: Message["meta"]) {
    const m: Message = {
      id: id() + Date.now(),
      sender,
      text,
      time: new Date().toISOString(),
      meta,
    };
    setMessages((s) => [...s, m]);
  }

  // Simulate typing and then push a bot response
  function queueBotMessage(text: string, delay = 900) {
    setIsBotTyping(true);
    const typingTime = Math.min(1200 + text.length * 8, 2200); // dynamic-ish
    setTimeout(() => {
      setIsBotTyping(false);
      pushMessage("bot", text);
    }, delay + typingTime);
  }

  // Function to analyze user input and provide intelligent responses
  function getResponseForUserInput(userInput: string): string {
    const lowerInput = userInput.toLowerCase().trim();

    // Check for greetings
    if (
      lowerInput.includes("hello") ||
      lowerInput.includes("hi") ||
      lowerInput.includes("hey") ||
      lowerInput.includes("greetings") ||
      lowerInput === "hi" ||
      lowerInput === "hello" ||
      lowerInput === "hey"
    ) {
      return "Hello! 👋 I'm Afri Bot, your virtual assistant for AfriTech Group PLC. How can I help you today? You can ask about our services, contact information, what makes us different, or learn more about our company.";
    }

    // Check for thank you
    if (
      lowerInput.includes("thank") ||
      lowerInput.includes("thanks") ||
      lowerInput.includes("appreciate")
    ) {
      return "You're welcome! 😊 If you have any other questions about AfriTech Group PLC, feel free to ask. You can also contact us directly at afritech2050@gmail.com or +251 91 104 1620.";
    }

    // Check for services-related questions (expanded)
    if (
      lowerInput.includes("service") ||
      lowerInput.includes("what do you offer") ||
      lowerInput.includes("what can you do") ||
      lowerInput.includes("what do you provide") ||
      lowerInput.includes("offerings") ||
      lowerInput.includes("solutions") ||
      lowerInput.includes("software development") ||
      lowerInput.includes("fintech") ||
      lowerInput.includes("erp") ||
      lowerInput.includes("mobile app") ||
      lowerInput.includes("web development") ||
      lowerInput.includes("what services") ||
      lowerInput.includes("your services") ||
      lowerInput.includes("do you offer") ||
      lowerInput.includes("can you help") ||
      lowerInput.includes("can you build") ||
      lowerInput.includes("do you develop") ||
      lowerInput.includes("do you create") ||
      lowerInput.includes("what kind of") ||
      lowerInput.includes("what types of")
    ) {
      return QUICK_REPLY_MAP.services;
    }

    // Check for support/contact-related questions (expanded)
    if (
      lowerInput.includes("contact") ||
      lowerInput.includes("support") ||
      lowerInput.includes("email") ||
      lowerInput.includes("phone") ||
      lowerInput.includes("reach") ||
      lowerInput.includes("address") ||
      lowerInput.includes("location") ||
      lowerInput.includes("where are you") ||
      lowerInput.includes("how to contact") ||
      lowerInput.includes("get in touch") ||
      lowerInput.includes("call") ||
      lowerInput.includes("number") ||
      lowerInput.includes("help") ||
      lowerInput.includes("how can i reach") ||
      lowerInput.includes("how can i contact") ||
      lowerInput.includes("where can i find") ||
      lowerInput.includes("what is your") && (lowerInput.includes("email") || lowerInput.includes("phone") || lowerInput.includes("address"))
    ) {
      return QUICK_REPLY_MAP.support;
    }

    // Check for company/about-related questions (expanded)
    if (
      lowerInput.includes("about") ||
      lowerInput.includes("company") ||
      lowerInput.includes("who are you") ||
      lowerInput.includes("tell me about") ||
      lowerInput.includes("what is") ||
      lowerInput.includes("mission") ||
      lowerInput.includes("vision") ||
      lowerInput.includes("ceo") ||
      lowerInput.includes("founder") ||
      lowerInput.includes("team") ||
      lowerInput.includes("history") ||
      lowerInput.includes("background") ||
      lowerInput.includes("who is") ||
      lowerInput.includes("what is afritech") ||
      lowerInput.includes("introduce") ||
      lowerInput.includes("describe") ||
      lowerInput.includes("explain") ||
      lowerInput.includes("learn more")
    ) {
      return QUICK_REPLY_MAP.about;
    }

    // Check for privacy/terms/legal-related questions
    if (
      lowerInput.includes("privacy") ||
      lowerInput.includes("privacy policy") ||
      lowerInput.includes("terms") ||
      lowerInput.includes("terms of service") ||
      lowerInput.includes("terms and conditions") ||
      lowerInput.includes("legal") ||
      lowerInput.includes("cookie") ||
      lowerInput.includes("cookie policy") ||
      lowerInput.includes("data protection") ||
      lowerInput.includes("gdpr") ||
      lowerInput.includes("policies") ||
      lowerInput.includes("agreement") ||
      lowerInput.includes("disclaimer")
    ) {
      return "For detailed information about our Privacy Policy, Terms & Conditions, and Cookie Policy, please visit our Legal page at www.afritechplc.com/legal. Our legal documents outline how we collect, use, and protect your data, as well as the terms of using our services. If you have specific legal questions, please contact us at afritech2050@gmail.com or +251 91 104 1620.";
    }

    // Check for what makes you different / unique / competitive advantage
    if (
      lowerInput.includes("what makes you different") ||
      lowerInput.includes("what makes you unique") ||
      lowerInput.includes("what sets you apart") ||
      lowerInput.includes("competitive advantage") ||
      lowerInput.includes("why choose you") ||
      lowerInput.includes("why should i choose") ||
      lowerInput.includes("difference") ||
      lowerInput.includes("what differentiates") ||
      lowerInput.includes("what distinguishes") ||
      lowerInput.includes("why you") ||
      lowerInput.includes("why afritech") ||
      lowerInput.includes("advantages")
    ) {
      return "What makes AfriTech different: 1) **Expert Multidisciplinary Team** - Design, engineering, and strategy experts working together. 2) **End-to-End Digital Solutions** - From idea to launch and beyond, we handle everything. 3) **Innovation-Driven** - We leverage emerging technologies to build future-proof systems. 4) **Client-Centered Approach** - We deliver what truly matters to your business. 5) **Sustainable Impact** - Solutions built for long-term growth and scalability. 6) **Local Market Knowledge** - We blend cutting-edge tech with deep understanding of African markets. 7) **Comprehensive Services** - Technology, finance, and business solutions all in one place. Ready to experience the difference? Contact us at afritech2050@gmail.com or +251 91 104 1620.";
    }

    // Check for pricing/cost questions
    if (
      lowerInput.includes("price") ||
      lowerInput.includes("cost") ||
      lowerInput.includes("how much") ||
      lowerInput.includes("pricing") ||
      lowerInput.includes("quote") ||
      lowerInput.includes("budget") ||
      lowerInput.includes("affordable") ||
      lowerInput.includes("expensive") ||
      lowerInput.includes("fee")
    ) {
      return "We provide customized pricing based on your specific project requirements and scope. Our solutions are designed to be cost-effective and deliver value. To get an accurate quote for your project, please contact us at afritech2050@gmail.com or +251 91 104 1620. We'll discuss your needs and provide a tailored proposal. You can also visit www.afritechplc.com for more information.";
    }

    // Check for projects/portfolio questions
    if (
      lowerInput.includes("project") ||
      lowerInput.includes("portfolio") ||
      lowerInput.includes("work") ||
      lowerInput.includes("case study") ||
      lowerInput.includes("examples") ||
      lowerInput.includes("previous") ||
      lowerInput.includes("past") ||
      lowerInput.includes("clients") ||
      lowerInput.includes("show me") ||
      lowerInput.includes("what have you done")
    ) {
      return "We've successfully delivered 50+ projects across various industries including FinanceFlow ERP, EcoTrade Platform, Agribank Mobile, and many more. Our portfolio includes custom software development, fintech solutions, ERP systems, and digital transformation projects. Visit our Projects page at www.afritechplc.com/projects to see detailed case studies. For specific examples relevant to your industry, contact us at afritech2050@gmail.com or +251 91 104 1620.";
    }

    // Check for partnership/collaboration questions
    if (
      lowerInput.includes("partner") ||
      lowerInput.includes("collaborate") ||
      lowerInput.includes("work together") ||
      lowerInput.includes("partnership") ||
      lowerInput.includes("collaboration") ||
      lowerInput.includes("join")
    ) {
      return "We welcome partnerships and collaborations! AfriTech partners with businesses, startups, and organizations to deliver innovative solutions. Our partnerships bring together expertise in technology, finance, and business. To discuss partnership opportunities, please contact us at afritech2050@gmail.com or +251 91 104 1620. Visit www.afritechplc.com/partners to learn more about why businesses choose to partner with us.";
    }

    // Check for experience/expertise questions
    if (
      lowerInput.includes("experience") ||
      lowerInput.includes("expertise") ||
      lowerInput.includes("how long") ||
      lowerInput.includes("years") ||
      lowerInput.includes("established") ||
      lowerInput.includes("founded") ||
      lowerInput.includes("when did you start") ||
      lowerInput.includes("how experienced")
    ) {
      return "AfriTech Group PLC is a next-generation technology company with expertise across multiple domains. Our leadership team includes Esmael Beshir (CEO), Natnael Solomon (CTO), Natnael Mahteme (COO), and Fuad Kedir (CFO), bringing together extensive experience in technology, finance, and business. We've completed 50+ projects, served 10+ clients, and operate across 5+ countries. Our multidisciplinary team combines cutting-edge technology knowledge with deep local market insights. Learn more at www.afritechplc.com/about or contact us at afritech2050@gmail.com.";
    }

    // Check for process/workflow questions
    if (
      lowerInput.includes("process") ||
      lowerInput.includes("workflow") ||
      lowerInput.includes("how do you work") ||
      lowerInput.includes("methodology") ||
      lowerInput.includes("approach") ||
      lowerInput.includes("how does it work") ||
      lowerInput.includes("steps")
    ) {
      return "Our process is client-centered and collaborative. We start by understanding your business needs, then design and develop tailored solutions using agile methodologies. Our approach includes: 1) Discovery & Planning 2) Design & Architecture 3) Development & Integration 4) Testing & Quality Assurance 5) Deployment & Launch 6) Ongoing Support & Maintenance. We ensure transparent communication throughout. To discuss your specific project needs and our detailed process, contact us at afritech2050@gmail.com or +251 91 104 1620.";
    }

    // Check for technology/tech stack questions
    if (
      lowerInput.includes("technology") ||
      lowerInput.includes("tech stack") ||
      lowerInput.includes("programming") ||
      lowerInput.includes("framework") ||
      lowerInput.includes("tools") ||
      lowerInput.includes("platform") ||
      lowerInput.includes("languages")
    ) {
      return "We work with a wide range of modern technologies and platforms depending on your project needs. Our expertise includes web technologies (React, Next.js, Node.js), mobile development (iOS, Android), cloud platforms (AWS, Azure), databases, APIs, and emerging technologies like blockchain for fintech solutions. We choose the best technology stack for each project to ensure scalability, security, and performance. For specific technology questions about your project, contact us at afritech2050@gmail.com or +251 91 104 1620.";
    }

    // Check for location/geography questions
    if (
      lowerInput.includes("where") ||
      lowerInput.includes("location") ||
      lowerInput.includes("based") ||
      lowerInput.includes("office") ||
      lowerInput.includes("ethiopia") ||
      lowerInput.includes("africa")
    ) {
      return "AfriTech Group PLC is based in Addis Ababa, Ethiopia, with our office at Mexico Sengatera, Traders Union Building, 8th Floor. While we're headquartered in Ethiopia, we serve clients across Africa and beyond. Our solutions are designed with local market understanding while leveraging global best practices. Visit us or contact us at afritech2050@gmail.com or +251 91 104 1620. You can also visit www.afritechplc.com/contact for more details.";
    }

    // Check for time/duration questions
    if (
      lowerInput.includes("how long") ||
      lowerInput.includes("duration") ||
      lowerInput.includes("timeline") ||
      lowerInput.includes("when") ||
      lowerInput.includes("deadline") ||
      lowerInput.includes("delivery")
    ) {
      return "Project timelines vary based on scope, complexity, and requirements. We provide realistic timelines after understanding your specific needs. Our agile approach allows for iterative delivery and faster time-to-market for core features. To get an estimated timeline for your project, please contact us at afritech2050@gmail.com or +251 91 104 1620 with your project details. We'll provide a detailed project plan including milestones and delivery dates.";
    }

    // Check for general business/inquiry questions
    if (
      lowerInput.includes("how") ||
      lowerInput.includes("can you") ||
      lowerInput.includes("do you") ||
      lowerInput.includes("are you") ||
      lowerInput.includes("is it possible") ||
      lowerInput.includes("help me") ||
      lowerInput.includes("need") ||
      lowerInput.includes("looking for")
    ) {
      return "Yes, we can help! AfriTech Group PLC offers comprehensive digital solutions including custom software development, fintech solutions, ERP systems, IT consulting, and more. Whether you need web applications, mobile apps, business systems, or digital transformation services, we're here to assist. Tell us more about your specific needs, or contact us directly at afritech2050@gmail.com or +251 91 104 1620. Visit www.afritechplc.com to explore our services.";
    }

    // More intelligent fallback - analyze the input for any relevant keywords
    const hasQuestionWords = lowerInput.includes("?") || 
                            lowerInput.includes("what") || 
                            lowerInput.includes("who") || 
                            lowerInput.includes("where") || 
                            lowerInput.includes("when") || 
                            lowerInput.includes("why") || 
                            lowerInput.includes("how");

    if (hasQuestionWords || lowerInput.length > 5) {
      return "I'm here to help! Could you please rephrase your question? You can ask about: 📋 Our services (custom software, fintech, ERP, etc.) 📞 Contact information 📍 Our location 💼 What makes us different 🏢 About our company 🤝 Partnerships 📝 Projects and portfolio 💰 Pricing and quotes. For immediate assistance, contact us at afritech2050@gmail.com or +251 91 104 1620. Visit www.afritechplc.com for more information.";
    }

    // Final fallback for very short or unclear inputs
    return "Hi! I'm Afri Bot. How can I assist you today? Ask me about our services, contact information, what makes us different, or learn more about AfriTech Group PLC. For direct contact: afritech2050@gmail.com or +251 91 104 1620. Visit www.afritechplc.com for more details.";
  }

  function handleSend() {
    if (!input.trim()) return;
    const txt = input.trim();
    pushMessage("user", txt);
    setInput("");
    // Get intelligent response based on user input
    const response = getResponseForUserInput(txt);
    queueBotMessage(response);
  }

  function handleQuickReply(key: keyof typeof QUICK_REPLY_MAP) {
    const userText =
      key === "services"
        ? "💼 Learn about our services"
        : key === "support"
        ? "📞 Contact support"
        : "ℹ️ About the company";

    // push user selection visually
    pushMessage("user", userText, { quick: true });

    // bot reply mapped
    queueBotMessage(QUICK_REPLY_MAP[key]);
  }

  // Small helper to toggle open state
  function toggleOpen() {
    setIsOpen((v) => !v);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating bubble */}
      {!isOpen && (
        <button
          onClick={toggleOpen}
          aria-label="Open chat"
          title="Open chat"
          className="group relative bg-white rounded-full shadow-2xl p-3 flex items-center justify-center ring-0 transform transition-transform duration-200 hover:scale-105"
        >
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2C5241] text-white">
            {/* chat icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="currentColor" />
            </svg>
          </span>
          {/* subtle accent ring */}
          <span className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      )}

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-[340px] md:w-96 h-[520px] md:h-[560px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/90 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#2C5241] flex items-center justify-center text-white font-medium">
                  A
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2C5241]">{BOT_NAME}</div>
                  <div className="text-xs text-gray-500">Online · How can I help?</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setMessages([]);
                  }}
                  className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
                  title="Clear chat"
                >
                  Clear
                </button>
                <button
                  onClick={toggleOpen}
                  aria-label="Close chat"
                  className="text-lg text-gray-500 px-2 py-1 rounded-md hover:bg-gray-50"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Quick replies */}
            <div className="px-4 py-3 bg-white border-b border-gray-50">
              <div className="text-xs text-gray-500 mb-2">Quick actions</div>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => handleQuickReply("services")}
                  className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-white hover:shadow-sm"
                >
                  💼 Learn about our services
                </button>
                <button
                  onClick={() => handleQuickReply("support")}
                  className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-white hover:shadow-sm"
                >
                  📞 Contact support
                </button>
                <button
                  onClick={() => handleQuickReply("about")}
                  className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-white hover:shadow-sm"
                >
                  ℹ️ About the company
                </button>
              </div>
            </div>

            {/* Messages area */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto">
              <div className="flex flex-col gap-3">
                <AnimatePresence initial={false}>
                  {messages.map((m) => (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className={`flex ${m.sender === "bot" ? "justify-start" : "justify-end"}`}
                    >
                      <MessageBubble message={m} />
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing indicator */}
                {isBotTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="flex justify-start"
                  >
                    <div className="px-3 py-2 rounded-2xl shadow-sm inline-block bg-[#2C5241] text-white">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Input area */}
            <div className="px-4 py-3 border-t bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2 items-center"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2C5241] placeholder:text-gray-400 bg-white text-[#333333]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#A18136] hover:brightness-95 text-white"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M4 12l16-8-8 16-2.7-6.1L4 12z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-xs hidden sm:inline">Send</span>
                </button>
              </form>
              <div className="mt-2 text-[11px] text-gray-400">Tip: Try the quick actions above for instant replies.</div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}

