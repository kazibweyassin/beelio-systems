// All conversation content, organised by industry.
// Each entry maps to a specific WhatsApp message sequence.

const industries = {
  clinic: {
    label: 'Clinic / Hospital',
    problem:
      'Patients calling to book appointments and getting no answer? Staff spending hours replying the same WhatsApp questions every day? Missed appointments with no follow-up?',
    solution:
      'We build a WhatsApp bot that handles all patient bookings 24/7, sends automatic appointment reminders, and gives your clinic a simple dashboard to manage records — no paper, no missed calls.',
    result:
      'A clinic we built for went from 4-hour response times to instant replies. Bookings increased 40% in the first month.',
  },
  restaurant: {
    label: 'Restaurant / Food',
    problem:
      'Orders coming in on WhatsApp, by phone, and walk-in — all mixed together? Staff writing orders by hand and making mistakes? Customers waiting for confirmation?',
    solution:
      'We build a WhatsApp ordering bot that takes orders, confirms them automatically, and routes them to a live kitchen display. No more paper, no more errors.',
    result:
      'A restaurant we built for cut order errors by 90% and grew monthly revenue by 25% within 6 weeks of going live.',
  },
  retail: {
    label: 'Retail / Shop',
    problem:
      'Running out of stock without warning? Customers asking "do you have this?" and waiting hours for a reply? Staff spending their day counting shelves?',
    solution:
      'We build a WhatsApp enquiry bot + an inventory management system with automatic low-stock alerts and reorder suggestions — all on your phone.',
    result:
      'A retail client reassigned 2 staff members from stock-counting to sales. Revenue grew 15% in the first 30 days.',
  },
  sacco: {
    label: 'SACCO / Finance',
    problem:
      'Managing hundreds of members in Excel? Chasing loan repayments one by one on the phone? Members calling to ask about their balance at all hours?',
    solution:
      'We build a loan management system with automated WhatsApp repayment reminders and a member self-service portal — accessible from any phone.',
    result:
      'A SACCO we built for improved loan recovery by 35% and cut admin workload in half within 60 days.',
  },
  school: {
    label: 'School / Training',
    problem:
      'Parents messaging about fees, term dates, and results all day long? Staff overwhelmed with the same questions repeated 50 times? Fee collection done manually?',
    solution:
      'We build a WhatsApp bot that answers parent FAQs, sends automated fee reminders, delivers results, and notifies parents about school events.',
    result:
      'Schools using our system report 80% fewer repetitive enquiries reaching staff — and faster fee collection.',
  },
  logistics: {
    label: 'Logistics / Delivery',
    problem:
      'Customers asking "where is my order?" all day? Drivers reporting their status by phone? No central view of what is where?',
    solution:
      'We build a delivery management system with automated WhatsApp status updates sent to customers at every stage — pickup, in transit, delivered.',
    result:
      'Logistics clients see customer complaint calls drop by 60% once automated tracking updates go live.',
  },
  other: {
    label: 'Your Business',
    problem:
      'Spending too much time on repetitive WhatsApp messages, manual data entry, or running your operations on paper and spreadsheets?',
    solution:
      'We map your exact workflow and build the right tool — WhatsApp bot, management system, web app, or a combination of all three.',
    result:
      'Most clients see measurable time savings within 30 days of launch. We start by understanding your specific problem before writing a single line of code.',
  },
};

module.exports = { industries };
