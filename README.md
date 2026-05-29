# Beelio Technologies

AI Software and FinTech platform development for emerging markets. This repository contains the public-facing website.

## Repository Overview

This is the Next.js website for Beelio Technologies, positioned as an AI Software & FinTech development company. The site has been repositioned from a "WhatsApp automation for African SMEs" brand to an enterprise-grade AI and financial technology development company.

For current website positioning, see [app/page.js](app/page.js) and the components in `/components`.

## Quick Start

### 1. Install Dependencies
```bash
# Frontend
npm install

# Backend
cd backend
npm install
```

### 2. Environment Setup
```bash
# Backend
cd backend
cp .env.example .env
# Edit .env with your credentials
```

### 3. Database Setup
```bash
# Start MongoDB
mongod

# Seed database
npm run seed
```

### 4. Start Services
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
npm run dev
```

## Project Structure

```
beelio-systems/
├── app/                         # Next.js App Router
│   ├── layout.js               # Root layout with metadata
│   ├── page.js                 # Homepage
│   ├── contact/                # Contact page
│   ├── pricing/                # Pricing page
│   ├── services/               # Services page
│   ├── industries/             # Industries page
│   ├── how-it-works/           # Process page
│   ├── results/                # Results & case studies
│   ├── portfolio/              # Case studies
│   ├── why-beelio-global/      # Why Beelio page
│   ├── blog/                   # Blog posts
│   ├── head.js                 # Metadata
│   └── api/
│       └── whatsapp.js         # WhatsApp webhook (legacy)
├── components/                 # React components
│   ├── Hero.js                 # Homepage hero
│   ├── Solution.js             # Services section
│   ├── Industries.js           # Industries section
│   ├── CompanySnapshot.js      # About section
│   ├── Pricing.js              # Pricing section
│   ├── HowItWorks.js           # Process section
│   ├── Portfolio.js            # Case studies
│   ├── CTASection.js           # CTA section
│   ├── FAQ.js                  # FAQ section
│   ├── Header.js               # Navigation
│   ├── Footer.js               # Footer
│   ├── WhyBeelio.js            # Differentiators
│   ├── Problem.js              # Problem statement
│   ├── Chatbot.js              # Chatbot widget
│   └── Layout.js               # Page wrapper
├── lib/                        # Utilities
├── public/                     # Static assets
├── beeflow/                    # Separate Next.js project
├── whatsapp-bot/               # Legacy WhatsApp bot (can be removed)
└── styles/                     # Global styles
```

## Current Website Positioning

**Brand:** Beelio Technologies — AI Software & FinTech Development for Emerging Markets

**Key Services:**
- AI-Powered Software & FinTech Platforms
- Enterprise Business Automation
- Custom Software Development
- Customer & Support Automation

**Target Audience:**
- FinTech companies and digital finance platforms
- Banking and microfinance institutions
- Enterprise and corporate teams
- Healthcare technology providers
- Logistics and supply chain operators
- Government and public sector programs

**Engagement Model:**
- Consultation-led sales approach
- Project-based builds (from $2,500)
- Retainer engagements (from $1,500/month)
- Enterprise custom quotes

## Recent Repositioning (May 2026)

The website was repositioned from "WhatsApp automation for African SMEs" to "AI Software & FinTech Development for Emerging Markets." All homepage copy, services, industries, pricing, and metadata have been updated to reflect this new positioning.

Legacy references to WhatsApp-first messaging, salon/restaurant/retail industry focus, and low-price subscription models have been removed from the public-facing site.

## MongoDB Schemas

### Conversation
```javascript
{
  customerPhone: String,
  customerName: String,
  status: ['active', 'booked', 'completed'],
  currentStep: String,
  messages: [{
    type: ['text', 'button', 'list'],
    content: String,
    sender: ['customer', 'bot'],
    timestamp: Date
  }],
  bookingId: ObjectId,
  salonId: ObjectId
}
```

### Booking
```javascript
{
  customerPhone: String,
  customerName: String,
  service: ['haircut', 'color', 'styling', 'treatment', 'beard-trim'],
  date: Date,
  time: String,
  duration: Number,
  price: Number,
  status: ['pending', 'confirmed', 'cancelled', 'completed'],
  salonId: ObjectId
}
```

## Twilio Setup

1. Create Twilio account
2. Get WhatsApp Sandbox credentials
3. Update `.env` with:
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN` 
   - `TWILIO_PHONE_NUMBER`
4. Configure webhook URL: `https://your-domain.com/webhook`

## Deployment

### Backend (Render/Railway)
- Node.js environment
- MongoDB add-on
- Environment variables set

### Frontend (Vercel/Netlify)
- Static Next.js build
- API rewrites to backend

## Development Notes

- In-memory session store (upgrade to Redis for production)
- Basic authentication (add JWT for production)
- No rate limiting on webhook (add for production)
- Single salon support (multi-tenant for V2)

## MVP Timeline: 2-3 Weeks ✅

- Week 1: Backend API, MongoDB schemas, Twilio integration
- Week 2: Conversation flow, booking logic, dashboard UI
- Week 3: Testing, deployment, demo preparation
