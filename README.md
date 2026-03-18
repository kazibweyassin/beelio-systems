# Beelio - WhatsApp Automation for Hair Salons

MVP for WhatsApp-based appointment booking and customer management for hair salons.

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
├── backend/                    # Node.js API server
│   ├── models/                # MongoDB schemas
│   │   ├── Conversation.js    # Chat conversations
│   │   ├── Booking.js         # Appointments
│   │   └── Salon.js           # Business info
│   ├── routes/                # API endpoints
│   │   ├── webhook.js         # WhatsApp webhook
│   │   └── dashboard.js       # Dashboard API
│   ├── services/              # Business logic
│   │   └── conversationFlow.js # Booking flow
│   ├── scripts/
│   │   └── seed.js           # Demo data
│   └── server.js             # Express server
├── pages/dashboard/           # Salon owner dashboard
├── components/               # React components
└── whatsapp-bot/            # Legacy bot (can be removed)
```

## Core Features

### 1. Auto-Reply System
- Instant responses to WhatsApp messages
- Service menu presentation
- Business hours information

### 2. Appointment Booking Flow
- Service selection (Haircut, Color, Styling, Treatment, Beard Trim)
- Date picker (DD/MM format)
- Time slot selection (9AM-5PM)
- Customer name collection
- Booking confirmation

### 3. Salon Dashboard
- Real-time statistics
- Conversation history
- Booking management
- Status updates (confirm/cancel/complete)

## Conversation Flow

```
Customer: "book"
Bot: Shows service menu
Customer: "1" (Haircut)
Bot: Asks for date (DD/MM)
Customer: "25/12"
Bot: Shows available times
Customer: "2:00 PM"
Bot: Asks for name
Customer: "John Smith"
Bot: Shows booking summary
Customer: "confirm"
Bot: Confirms booking ✅
```

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
