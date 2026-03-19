// All conversation content, organised by industry.
// Each entry maps to a specific WhatsApp message sequence.

const industries = {
  clinic: {
    label: 'Clinic / Medical Practice',
    problem:
      'Manual appointment booking and reminders? Staff spending hours on WhatsApp? Patients missing appointments with no follow-up?',
    solution:
      'We build an AI-powered WhatsApp bot that automates patient bookings, sends smart reminders, and integrates with Google Calendar and Stripe for payments. Your clinic dashboard gives real-time visibility and audit logs.',
    result:
      'A clinic using Beelio reduced missed bookings by 60% and cut admin time by 30%.',
  },
  restaurant: {
    label: 'Restaurant / Food',
    problem:
      'Orders coming in on WhatsApp, phone, and walk-in? Staff making mistakes and customers waiting for confirmation?',
    solution:
      'Our AI WhatsApp ordering bot takes orders, confirms them instantly, and routes them to a live kitchen display. Integrates with Stripe for payments and Google Calendar for reservations.',
    result:
      'A restaurant using Beelio cut order errors by 90% and grew revenue by 25% in 6 weeks.',
  },
  retail: {
    label: 'Retail / Shop',
    problem:
      'Stockouts and lost sales due to manual inventory tracking? Customers waiting hours for replies?',
    solution:
      'Beelio automates WhatsApp enquiries, inventory alerts, and reordering. AI-driven responses and integrations with Shopify and Stripe.',
    result:
      'Retailers using Beelio saw zero surprise stockouts and 15% revenue growth in 30 days.',
  },
  sacco: {
    label: 'Finance / Membership',
    problem:
      'Managing hundreds of members manually? Chasing repayments one by one? No self-service portal?',
    solution:
      'Beelio automates WhatsApp repayment reminders, provides a member self-service portal, and integrates with payment platforms. AI-driven communication and audit logs.',
    result:
      'Finance clients improved loan recovery by 35% and cut admin workload in half.',
  },
  school: {
    label: 'School / Training',
    problem:
      'Staff overwhelmed with repetitive parent questions? Manual fee collection and event notifications?',
    solution:
      'Beelio AI bot answers parent FAQs, sends automated fee reminders, delivers results, and notifies parents about school events. Integrates with Google Calendar.',
    result:
      'Schools using Beelio report 80% fewer repetitive enquiries and faster fee collection.',
  },
  logistics: {
    label: 'Logistics / Delivery',
    problem:
      'Customers asking "where is my order?" all day? No central view of deliveries? Manual status updates?',
    solution:
      'Beelio automates WhatsApp status updates at every stage—pickup, in transit, delivered. AI-driven tracking and integration with delivery platforms.',
    result:
      'Logistics clients saw customer complaint calls drop by 60% after automation.',
  },
  other: {
    label: 'Your Business',
    problem:
      'Spending too much time on repetitive WhatsApp messages, manual data entry, or running your operations on paper and spreadsheets?',
    solution:
      'We map your workflow and build the right AI-powered tool—WhatsApp bot, management system, web app, or a combination. Integrations and automation tailored to your needs.',
    result:
      'Most clients see measurable time savings within 30 days. We start by understanding your specific problem before writing a single line of code.',
  },
};

module.exports = { industries };
