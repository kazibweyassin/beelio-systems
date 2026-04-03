Beelio Technologies
WhatsApp Bot Template Marketplace
Technical Specification for Claude Code
Version	1.0 — March 2026

Stack	Next.js 14 (App Router), Node.js, MongoDB, WhatsApp Business API, Stripe

Scope	Full-stack build: marketplace UI, template engine, install system, billing, admin dashboard

Audience	Claude Code — implement this spec top-to-bottom as a production-ready codebase

1. Project Overview
Beelio is a WhatsApp automation platform for SMEs globally. This document specifies the full build of the Beelio Bot Template Marketplace — a self-serve system where businesses can discover, preview, purchase, and install pre-built WhatsApp chatbot templates in minutes, without any manual work from Beelio staff.

The marketplace has two sides:
•	Client-facing: browse, preview, purchase, and install templates into their WhatsApp Business account
•	Contributor-facing: developers and agencies submit templates, set pricing, and earn revenue share
•	Admin-facing: Beelio staff approve templates, manage payouts, view platform metrics

1.1 Core Design Principles
•	Zero manual work per install — every template installs via config clone, not code deployment
•	Global-first — USD pricing, multi-language support (EN, PT, ES, AR), timezone-aware
•	Mobile-first UI — most clients are on mobile in emerging markets
•	WhatsApp-native — all bot previews simulate real WhatsApp UI
•	Revenue-share ready — 70/30 split (contributor/Beelio) from day one

2. System Architecture
2.1 Tech Stack
Layer	Technology	Rationale
Frontend	Next.js 14 (App Router)	SSR for SEO, RSC for performance
Styling	Tailwind CSS + shadcn/ui	Rapid build, accessible components
Backend API	Next.js Route Handlers	Unified repo, edge-compatible
Database	MongoDB Atlas	Flexible schema for bot configs
ODM	Mongoose	Schema validation and type safety
Auth	NextAuth.js v5	JWT sessions, Google + email magic link
Payments	Stripe	Subscriptions + Connect for payouts
WhatsApp	Meta Cloud API (v18+)	Official WhatsApp Business API
File Storage	Cloudflare R2	Template assets, screenshots
Email	Resend	Transactional emails
Deployment	Vercel	Edge network, zero-config Next.js

2.2 Repository Structure
// Monorepo — single Next.js app
beelio/
├── app/
│   ├── (auth)/              # Login, register, magic link
│   ├── (dashboard)/         # Client dashboard post-login
│   │   ├── marketplace/     # Browse & install templates
│   │   ├── bots/            # Installed bots management
│   │   ├── analytics/       # Conversation stats
│   │   └── billing/         # Subscription management
│   ├── (contributor)/       # Template submission portal
│   ├── (admin)/             # Internal Beelio admin
│   └── api/                 # Route handlers
│       ├── webhooks/        # WhatsApp + Stripe webhooks
│       ├── templates/       # CRUD for templates
│       ├── installs/        # Install/uninstall flows
│       └── billing/         # Stripe checkout + portal
├── components/
│   ├── marketplace/         # TemplateCard, PreviewModal, FilterBar
│   ├── bot-builder/         # Flow editor components
│   └── whatsapp/            # WhatsApp chat simulator
├── lib/
│   ├── db/                  # MongoDB connection + models
│   ├── whatsapp/            # Meta API client
│   ├── stripe/              # Stripe helpers
│   └── bot-engine/          # Template interpreter
└── models/                  # Mongoose schemas

3. Database Models
All models use MongoDB via Mongoose. Use TypeScript interfaces alongside each schema.

3.1 BotTemplate
The core unit of the marketplace. Each template is a JSON configuration that fully describes a chatbot's conversation logic, integrations, and metadata.

// models/BotTemplate.ts
interface BotTemplate {
  _id: ObjectId
  slug: string                    // URL-safe unique ID e.g. 'salon-booking-v1'
  name: string                    // Display name
  category: TemplateCategory      // enum (see 3.5)
  description: string             // Short (160 char max)
  longDescription: string         // Markdown, shown on detail page
  price: {
    model: 'free' | 'monthly' | 'one_time'
    amount: number                // USD cents (0 for free)
    stripePriceId?: string        // Required for paid templates
  }
  contributor: {
    userId: ObjectId
    displayName: string
    stripeAccountId?: string      // For payouts
    revenueSharePct: number       // 0.70 = 70% to contributor
  }
  flow: BotFlow                  // Full conversation config (see 3.2)
  languages: string[]            // ['en', 'pt', 'es', 'ar']
  integrations: string[]         // ['shopify', 'woocommerce', 'google_calendar']
  screenshots: string[]          // R2 URLs
  previewFlow: BotFlow          // Simplified flow for in-browser preview
  stats: {
    installs: number
    activeInstalls: number
    avgRating: number
    reviewCount: number
  }
  status: 'draft' | 'review' | 'live' | 'suspended'
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

3.2 BotFlow — Conversation Config Schema
BotFlow is the JSON structure that defines the entire conversation logic. The bot engine reads this to handle every incoming WhatsApp message.

// types/BotFlow.ts
interface BotFlow {
  version: '1.0'
  initialNodeId: string
  nodes: Record<string, FlowNode>
}

interface FlowNode {
  id: string
  type: 'message' | 'options' | 'input' | 'action' | 'condition' | 'handoff'
  message?: string               // Supports {{variables}} and *bold*
  options?: FlowOption[]         // Button options (max 10 for WhatsApp)
  input?: {
    key: string                  // Stores user input as this variable
    validation?: 'phone' | 'email' | 'number' | 'text'
    errorMessage?: string
  }
  action?: {
    type: 'api_call' | 'save_lead' | 'send_email' | 'webhook' | 'calendar_book'
    config: Record<string, any>
  }
  condition?: {
    variable: string
    operator: 'eq' | 'gt' | 'lt' | 'contains' | 'in'
    value: any
    trueNodeId: string
    falseNodeId: string
  }
  nextNodeId?: string            // For linear nodes
}

interface FlowOption {
  label: string
  value: string
  nextNodeId: string
}

3.3 Installation
When a client installs a template, an Installation document is created. This is the live, customised copy of the template config running for that client.

// models/Installation.ts
interface Installation {
  _id: ObjectId
  templateId: ObjectId          // Source template
  templateSlug: string          // Snapshot at install time
  clientId: ObjectId            // The business owner
  whatsappPhoneNumberId: string // Their WhatsApp Business number
  flow: BotFlow                 // Cloned + customised flow
  customVariables: Record<string, string>  // Brand name, prices, etc.
  language: string              // Active language
  status: 'active' | 'paused' | 'uninstalled'
  billing: {
    subscriptionId?: string     // Stripe subscription ID
    currentPeriodEnd?: Date
  }
  stats: {
    totalConversations: number
    totalLeads: number
    lastActiveAt: Date
  }
  installedAt: Date
  updatedAt: Date
}

3.4 User
// models/User.ts
interface User {
  _id: ObjectId
  email: string
  name: string
  role: 'client' | 'contributor' | 'admin'
  whatsapp: {
    businessAccountId?: string
    phoneNumberId?: string
    accessToken?: string        // Encrypted at rest
    verified: boolean
  }
  billing: {
    stripeCustomerId?: string
    plan: 'free' | 'starter' | 'pro' | 'enterprise'
  }
  contributor?: {
    stripeAccountId: string     // Stripe Connect
    payoutsEnabled: boolean
    totalEarnings: number       // USD cents
  }
  createdAt: Date
}

3.5 Enums
Enum	Values
TemplateCategory	ecommerce, hospitality, health, services, finance, logistics, education, real_estate
SupportedLanguage	en, pt, es, ar, fr, sw
Integration	shopify, woocommerce, hubspot, google_calendar, google_sheets, notion, zapier
BillingPlan	free (0), starter ($9/mo), pro ($19/mo), enterprise (custom)

4. API Endpoints
4.1 Templates
Method	Route	Auth	Description
GET	/api/templates	None	List templates with filter/sort/paginate
GET	/api/templates/[slug]	None	Get single template detail
POST	/api/templates	Contributor	Submit new template
PATCH	/api/templates/[slug]	Contributor/Admin	Update template
POST	/api/templates/[slug]/review	Admin	Approve or reject template
GET	/api/templates/[slug]/preview	None	Get preview flow (safe subset)

4.2 Installs
Method	Route	Auth	Description
GET	/api/installs	Client	List client's installed bots
POST	/api/installs	Client	Install a template
GET	/api/installs/[id]	Client	Get single installation
PATCH	/api/installs/[id]	Client	Update custom variables, language
DELETE	/api/installs/[id]	Client	Uninstall / cancel subscription
POST	/api/installs/[id]/toggle	Client	Pause or resume bot

4.3 Webhooks
Method	Route	Description
GET/POST	/api/webhooks/whatsapp	Meta webhook verification + message handler
POST	/api/webhooks/stripe	Stripe subscription lifecycle events

4.4 GET /api/templates — Query Parameters
Param	Type	Example	Description
category	string	ecommerce	Filter by TemplateCategory
price	string	free | paid	Filter free vs paid
language	string	pt	Filter by supported language
integration	string	shopify	Filter by integration
sort	string	installs | rating | newest	Sort order
q	string	salon booking	Full-text search
page	number	1	Pagination page
limit	number	12	Results per page (max 48)

5. Bot Engine
The bot engine is the core runtime that processes incoming WhatsApp messages and produces responses based on an installation's BotFlow config. It runs inside the WhatsApp webhook handler.

5.1 Message Processing Flow
•	Incoming message arrives at POST /api/webhooks/whatsapp
•	Extract phone number, message body, and WhatsApp phone number ID
•	Look up active Installation where whatsappPhoneNumberId matches
•	Load or create session from Redis/MongoDB (keyed by contact phone + installationId)
•	Pass message to BotEngine.process(session, message, flow)
•	BotEngine traverses nodes, evaluates conditions, runs actions
•	Returns array of WhatsApp message payloads to send
•	Send payloads via Meta Cloud API
•	Persist updated session state

5.2 Session State
// lib/bot-engine/session.ts
interface BotSession {
  installationId: string
  contactPhone: string
  currentNodeId: string
  variables: Record<string, any>  // Accumulated user inputs
  history: string[]               // Node IDs visited
  startedAt: Date
  lastMessageAt: Date
  ttl: number                     // Session expires after 24h of inactivity
}

5.3 Variable Interpolation
Messages support {{variable}} syntax. Before sending, the engine replaces all variables:

•	{{client.name}} — from Installation.customVariables
•	{{user.input}} — from session.variables captured during input nodes
•	{{system.time}} — current time in client's timezone
•	{{action.result}} — response from an action node API call

5.4 Action Node Types
Action Type	What it does	Config required
save_lead	Saves contact + variables to Leads collection	fields: string[]
send_email	Sends email via Resend to business owner	to, subject, template
api_call	HTTP request to external endpoint	url, method, headers, body
webhook	POST to client's webhook URL	url, secret
calendar_book	Creates Google Calendar event	calendarId, duration, summary
handoff	Sends conversation to human agent via WhatsApp	agentPhone

6. Template Install Flow
This is the most critical user journey. It must complete in under 60 seconds for a free template and under 3 minutes including Stripe checkout for a paid template.

6.1 Free Template Install
•	Client clicks Install on template detail page
•	System checks: is client's WhatsApp number verified? If not, redirect to verification flow
•	System checks: does client already have this template installed? If yes, show 'Already installed' state
•	POST /api/installs — body: { templateId, language }
•	Server: clone template.flow into new Installation document
•	Server: register webhook with Meta API for client's phone number ID
•	Server: set Installation.status = 'active'
•	Client: redirect to /dashboard/bots/[installId]/customize
•	Client completes customization form (business name, custom messages, etc.)
•	PATCH /api/installs/[id] — save customVariables
•	Bot is live — confirm screen shown with test instructions

6.2 Paid Template Install
•	All steps from 6.1, but before creating Installation:
•	POST /api/billing/checkout — creates Stripe Checkout Session
•	Include metadata: { templateId, clientId, language }
•	Redirect client to Stripe Checkout
•	On success: Stripe fires checkout.session.completed webhook
•	Webhook handler creates Installation and activates bot
•	Client redirected to customization page via success_url

6.3 Customization Form
After install, the client fills in template-specific variables. Each BotTemplate defines its required customVariables schema:

// Example: Salon Booking Template
customVariables: {
  business_name: { label: 'Salon name', required: true },
  booking_url: { label: 'Online booking link', type: 'url', required: true },
  working_hours: { label: 'Working hours', default: 'Mon-Sat 9am-6pm' },
  cancellation_policy: { label: 'Cancellation notice (hours)', type: 'number', default: '24' }
}

Render this as a dynamic form using react-hook-form + zod validation. On submit, PATCH /api/installs/[id].

7. Marketplace UI
7.1 Pages
Route	Component	Description
/dashboard/marketplace	MarketplacePage	Grid of templates with filter sidebar
/dashboard/marketplace/[slug]	TemplateDetailPage	Full detail + preview + install CTA
/dashboard/bots	InstalledBotsPage	List of client's installations
/dashboard/bots/[id]	BotManagePage	Stats, customize, pause/delete
/dashboard/bots/[id]/customize	CustomizeForm	Post-install variable configuration
/contributor/submit	SubmitTemplatePage	Template submission form
/contributor/dashboard	ContributorDashboard	Earnings, submissions, stats
/admin/templates	AdminTemplateQueue	Review queue for new submissions

7.2 TemplateCard Component
The primary unit on the marketplace grid. Must include:
•	Template name (bold, 15px)
•	Category badge (pill, colored by category)
•	One-line description (truncated at 80 chars)
•	Star rating + install count
•	Price (Free badge in green, or $X/mo in blue)
•	Hot badge if installs > 500 in last 30 days
•	Preview button (opens modal, does not navigate away)
•	Install / Get button (initiates install flow)
•	Contributor name (muted, 11px)

7.3 WhatsApp Preview Modal
Clicking Preview opens a modal that renders the template's previewFlow as a simulated WhatsApp conversation. The user can tap through the flow interactively. This is the highest-converting element on the detail page — build it well.

•	Render a phone-frame UI using the WhatsApp green color scheme (#075E54 header, #f0ece4 chat bg)
•	Messages animate in with a typing indicator before each bot reply (800ms delay)
•	Option buttons render below bot messages as tappable chips
•	User taps a chip — it shows as a user message, next bot node plays
•	Session is purely in-memory (useState), no API calls during preview
•	Show a 'Install this bot' CTA at the end of the preview flow

7.4 Filter System
Left sidebar on marketplace page. Filters are applied client-side for instant feedback, with URL params synced for shareability:

•	Category — checkbox group (All, E-commerce, Hospitality, Health, Services, etc.)
•	Price — toggle (All / Free / Paid)
•	Language — multi-select (EN, PT, ES, AR)
•	Integrations — multi-select (Shopify, WooCommerce, etc.)
•	Sort — select (Most installed, Highest rated, Newest)
•	Search — text input with 300ms debounce, queries /api/templates?q=

8. Contributor Portal
8.1 Template Submission
Contributors submit templates via a multi-step form. Validate all fields with zod before allowing submission.

•	Step 1 — Basic info: name, category, description, tags, languages, integrations
•	Step 2 — Pricing: free vs paid, amount, billing model
•	Step 3 — Flow builder: JSON editor with live preview (use Monaco Editor)
•	Step 4 — Preview flow: simplified version of the full flow for the preview modal
•	Step 5 — Screenshots: upload up to 5 images to R2
•	Step 6 — Review and submit — status becomes 'review'

8.2 Revenue Share
Paid template revenue flows through Stripe Connect. Build this exactly:

•	Contributor onboarding: POST /api/contributor/connect — creates Stripe Connect account, redirects to Stripe onboarding
•	On subscription created: Stripe fires invoice.paid webhook
•	Webhook handler: calculate split (contributor.revenueSharePct * amount)
•	Create Stripe Transfer to contributor's connected account
•	Log payout in Payout collection for reporting
•	Default split: 70% contributor, 30% Beelio — configurable per template by admin

9. WhatsApp Business API Integration
9.1 Client Onboarding
Clients must connect their WhatsApp Business number before installing any template. Use Meta's Embedded Signup flow:

•	Render Meta's JavaScript SDK Embedded Signup button on /dashboard/settings/whatsapp
•	On completion: receive code from Meta, exchange for user access token via /api/auth/whatsapp
•	Store encrypted access token + phone number ID on User document
•	Verify the number is active by sending a test message to the client's own number

9.2 Webhook Handler
// app/api/webhooks/whatsapp/route.ts
GET handler — Meta webhook verification:
•	Check query params: hub.mode === 'subscribe', hub.verify_token matches env var
•	Return hub.challenge as plain text response

POST handler — Incoming messages:
•	Verify X-Hub-Signature-256 header using HMAC SHA-256 with app secret
•	Parse body: extract entry[0].changes[0].value
•	Handle message types: text, interactive (button reply), location
•	Ignore status updates (delivered, read) — return 200 immediately
•	Find Installation by metadata.phone_number_id
•	Call BotEngine.process() — get response payloads
•	Send each payload via Meta Graph API /messages endpoint
•	Return 200 OK — Meta retries if any non-200 is returned

9.3 Sending Messages
All outbound messages go through lib/whatsapp/client.ts. Support these message types:

•	Text — simple text with optional preview URL
•	Interactive List — for option menus with more than 3 choices
•	Interactive Buttons — for 2-3 quick reply options (preferred for most templates)
•	Template Messages — for proactive outreach (requires pre-approval from Meta)

10. Billing
10.1 Stripe Setup
Object	Usage
Customer	Created per User on first paid action
Price	One per paid template, monthly recurring
Subscription	Created on install of paid template
Connect Account	Created per Contributor for payouts
Transfer	Created per invoice.paid event to pay contributors
Portal Session	Allows clients to manage/cancel subscriptions self-serve

10.2 Stripe Webhook Events to Handle
Event	Action
checkout.session.completed	Create Installation, activate bot
invoice.paid	Extend subscription, log payout, transfer to contributor
invoice.payment_failed	Pause Installation, send client email
customer.subscription.deleted	Set Installation status to 'uninstalled'
account.updated	Sync Contributor payouts_enabled status

11. Admin Dashboard
Accessible at /admin — protected by role: admin middleware. Build with shadcn/ui DataTable components.

11.1 Screens
•	Template Queue — paginated list of templates in 'review' status. Actions: Approve, Reject (with reason), Request changes
•	All Templates — full list with status filter, search, bulk actions
•	Clients — user list with install count, MRR, last active
•	Contributors — earnings, pending payouts, Stripe Connect status
•	Platform Metrics — total installs, MRR, churn, top templates (use Recharts)

11.2 Template Review
Admin reviews submitted templates via /admin/templates/[slug]/review. The review screen shows:
•	All template metadata
•	Live preview using the PreviewModal component
•	Full BotFlow JSON with syntax highlighting
•	Approve button — sets status to 'live', triggers contributor notification email
•	Reject button — opens modal to enter reason, sets status to 'draft', emails contributor

12. Environment Variables
Variable	Description
MONGODB_URI	MongoDB Atlas connection string
NEXTAUTH_SECRET	NextAuth JWT signing secret
NEXTAUTH_URL	App URL (https://beelio.tech)
GOOGLE_CLIENT_ID	Google OAuth for social login
GOOGLE_CLIENT_SECRET	Google OAuth secret
META_APP_SECRET	WhatsApp webhook signature verification
META_VERIFY_TOKEN	WhatsApp webhook verification token
META_SYSTEM_ACCESS_TOKEN	Meta Graph API access token
STRIPE_SECRET_KEY	Stripe secret key
STRIPE_WEBHOOK_SECRET	Stripe webhook signing secret
STRIPE_CONNECT_CLIENT_ID	Stripe Connect application ID
RESEND_API_KEY	Resend email API key
R2_ACCOUNT_ID	Cloudflare R2 account
R2_ACCESS_KEY_ID	R2 credentials
R2_SECRET_ACCESS_KEY	R2 credentials
R2_BUCKET_NAME	R2 bucket for template assets
ENCRYPTION_KEY	32-byte key for encrypting WhatsApp tokens at rest

12.1 Deployment Checklist
•	Deploy to Vercel — connect GitHub repo, set all env vars in Vercel dashboard
•	Set up MongoDB Atlas — enable IP allowlist for 0.0.0.0/0 (Vercel uses dynamic IPs)
•	Register Meta webhook — point to https://beelio.tech/api/webhooks/whatsapp
•	Subscribe to webhook fields: messages, message_deliveries, messaging_postbacks
•	Create Stripe webhook endpoint pointing to https://beelio.tech/api/webhooks/stripe
•	Subscribe to all events listed in section 10.2
•	Set up Cloudflare R2 bucket with public read access for screenshots
•	Configure Resend domain (beelio.tech) for transactional email sending

13. Recommended Build Order for Claude Code
Follow this sequence. Each phase is independently testable before moving to the next.

Phase A — Foundation (Days 1–3)
•	Scaffold Next.js 14 app with TypeScript, Tailwind, shadcn/ui
•	Set up MongoDB connection + all Mongoose models (section 3)
•	Configure NextAuth.js with Google + email magic link providers
•	Build auth pages: login, register, magic link confirmation
•	Create base layout: sidebar nav, header, mobile-responsive shell

Phase B — Template Engine (Days 4–6)
•	Implement BotFlow types and BotEngine class (section 5)
•	Build WhatsApp chat simulator component (section 7.3)
•	Seed database with 5 starter templates (salon, pharmacy, real estate, restaurant, e-commerce FAQ)
•	Build GET /api/templates with filtering, sorting, pagination
•	Build marketplace grid page with TemplateCard and PreviewModal

Phase C — Install Flow (Days 7–9)
•	Build Meta Embedded Signup + WhatsApp number verification
•	Build POST /api/installs and the free template install flow
•	Build customization form (dynamic from template schema)
•	Build Stripe Checkout for paid templates
•	Handle Stripe webhooks for subscription lifecycle

Phase D — WhatsApp Live (Days 10–12)
•	Build WhatsApp webhook handler (verify + message handling)
•	Integrate BotEngine into webhook handler
•	Build Meta API client for sending messages (text, buttons, lists)
•	End-to-end test: install a template, message the number, get a response

Phase E — Contributor Portal (Days 13–15)
•	Build multi-step template submission form
•	Build Stripe Connect onboarding flow
•	Build contributor dashboard (earnings, submissions)
•	Build admin review queue and approval flow

Phase F — Polish (Days 16–18)
•	Build analytics dashboard using Recharts
•	Add email notifications (template approved, payment failed, bot installed)
•	Add multi-language support (next-intl) for EN, PT, ES, AR
•	Performance: add Redis session store, image optimization, API caching
•	Security audit: rate limiting on webhooks, input sanitization, token encryption

14. Testing Requirements
Area	Framework	Coverage target
BotEngine unit tests	Vitest	All node types, variable interpolation, condition logic
API route tests	Vitest + MSW	Happy paths + error cases for all endpoints
Install flow E2E	Playwright	Free install, paid install, customization, uninstall
WhatsApp webhook	Vitest	Signature verification, message routing, session state
Stripe webhook	Vitest	All 5 event types with fixture payloads

15. Security Requirements
•	Verify X-Hub-Signature-256 on every WhatsApp webhook request — reject with 403 if invalid
•	Verify Stripe webhook signature using stripe.webhooks.constructEvent()
•	Encrypt WhatsApp access tokens at rest using AES-256-GCM with ENCRYPTION_KEY env var
•	Rate limit: /api/webhooks/whatsapp — 1000 req/min per IP using upstash/ratelimit
•	Rate limit: /api/installs — 10 installs per client per hour
•	Validate all user inputs with zod on every API route
•	Admin routes: middleware checks session.user.role === 'admin' before any handler runs
•	Contributor routes: verify template ownership before allowing edits
•	Never expose WhatsApp access tokens or Stripe secret keys in client-side code or API responses

16. Notes for Claude Code
This spec is intentionally complete. Do not deviate from the data models or API contracts — they are designed to work together. If you encounter ambiguity:

•	Default to the simpler implementation that satisfies the spec
•	Use TypeScript strictly — no any types unless explicitly noted
•	Prefer server components and server actions in Next.js 14 App Router
•	Keep the WhatsApp simulator component fully self-contained — no API calls during preview
•	The bot engine must be stateless — all state comes from the session object passed in
•	Build Phase A through D first — the marketplace must be fully functional before contributor features

Questions about business logic not covered here should default to the most defensible implementation — validate more, not less. This is a financial and communication product.

End of specification — Beelio Technologies Ltd, March 2026
