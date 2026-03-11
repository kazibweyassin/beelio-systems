const { sendText, sendButtons, sendList, markRead } = require('./api');
const { industries } = require('./content');

// ─── Session store ─────────────────────────────────────────────────────────────
// In-memory for simplicity. Replace with Redis for multi-instance deployments.
// Structure: phone -> { step: string, data: {} }
const sessions = new Map();

function getSession(phone) {
  if (!sessions.has(phone)) {
    sessions.set(phone, { step: 'start', data: {} });
  }
  return sessions.get(phone);
}

function setStep(phone, step, extraData = {}) {
  const session = getSession(phone);
  session.step = step;
  Object.assign(session.data, extraData);
}

// ─── Main handler ──────────────────────────────────────────────────────────────
async function handleIncoming(phone, message) {
  // Show blue ticks immediately
  if (message.id) await markRead(message.id);

  const session = getSession(phone);

  // Extract what the user said / tapped
  let input = '';
  if (message.type === 'text') {
    input = message.text?.body?.trim() || '';
  } else if (message.type === 'interactive') {
    const interactive = message.interactive;
    if (interactive.type === 'button_reply') {
      input = interactive.button_reply.id;
    } else if (interactive.type === 'list_reply') {
      input = interactive.list_reply.id;
    }
  }

  // ─── State machine ──────────────────────────────────────────────────────────
  switch (session.step) {

    // First contact — always show the welcome list
    case 'start':
      await showWelcome(phone);
      setStep(phone, 'await_industry');
      break;

    // Waiting for the user to pick their industry
    case 'await_industry': {
      const industry = resolveIndustry(input);
      if (!industry) {
        await sendText(phone, 'Please select your industry from the list to continue. 👇');
        await showWelcome(phone);
        return;
      }
      setStep(phone, 'await_interest', { industry });
      await showIndustrySolution(phone, industry);
      break;
    }

    // Showed problem + solution — waiting for next action
    case 'await_interest':
      if (input === 'case_study') {
        await showCaseStudy(phone, session.data.industry);
        setStep(phone, 'await_after_info');
      } else if (input === 'pricing') {
        await showPricing(phone);
        setStep(phone, 'await_after_info');
      } else if (input === 'talk_now') {
        await showHandoff(phone);
        setStep(phone, 'done');
      } else {
        // Unrecognised text input — nudge them to use the buttons
        await sendButtons(phone, 'What would you like to do next?', [
          { id: 'case_study', title: 'See a real result' },
          { id: 'pricing',    title: 'See pricing' },
          { id: 'talk_now',   title: 'Talk to us now' },
        ]);
      }
      break;

    // After showing case study or pricing
    case 'await_after_info':
      if (input === 'book_call') {
        setStep(phone, 'await_name');
        await sendText(phone, "Great choice! Let's get you booked in for a free 15-minute discovery call.\n\nWhat is your name?");
      } else if (input === 'pricing') {
        await showPricing(phone);
        // stay on same step
      } else if (input === 'case_study') {
        await showCaseStudy(phone, session.data.industry);
        // stay on same step
      } else if (input === 'talk_now') {
        await showHandoff(phone);
        setStep(phone, 'done');
      } else if (input === 'not_ready') {
        await sendText(
          phone,
          'No problem at all! Whenever you are ready, just message us here or visit *beelio.tech*. We will be waiting. 👋'
        );
        setStep(phone, 'done');
      } else {
        await sendButtons(phone, 'Ready to take the next step?', [
          { id: 'book_call', title: 'Book a free call' },
          { id: 'talk_now',  title: 'Talk to us now' },
          { id: 'not_ready', title: 'Not ready yet' },
        ]);
      }
      break;

    // Collecting name for booking
    case 'await_name':
      if (input.length < 2) {
        await sendText(phone, 'Please share your name so we can address you properly.');
        return;
      }
      setStep(phone, 'done', { name: input });
      await confirmBooking(phone, input);
      break;

    // Conversation complete — restart on next message
    case 'done':
      sessions.delete(phone);
      await showWelcome(phone);
      setStep(phone, 'await_industry');
      break;

    default:
      sessions.delete(phone);
      await showWelcome(phone);
      setStep(phone, 'await_industry');
  }
}

// ─── Message builders ──────────────────────────────────────────────────────────

async function showWelcome(phone) {
  await sendList(
    phone,
    "Hi! I'm *Bee*, Beelio's assistant. 👋\n\nWe build *WhatsApp bots and custom software* that help businesses reply faster, cut manual work, and grow.\n\nWhat type of business do you run?",
    'Choose your industry',
    [
      {
        title: 'Select your industry',
        rows: [
          { id: 'clinic',     title: 'Clinic / Hospital',    description: 'Patient booking & management bots' },
          { id: 'restaurant', title: 'Restaurant / Food',    description: 'Ordering bots & kitchen systems' },
          { id: 'retail',     title: 'Retail / Shop',        description: 'Inventory & customer service bots' },
          { id: 'sacco',      title: 'SACCO / Finance',      description: 'Loan tracking & member portals' },
          { id: 'school',     title: 'School / Training',    description: 'Parent communication bots' },
          { id: 'logistics',  title: 'Logistics / Delivery', description: 'Tracking & status update bots' },
          { id: 'other',      title: 'Other Business',       description: 'Tell us what you need' },
        ],
      },
    ]
  );
}

async function showIndustrySolution(phone, industry) {
  const c = industries[industry];
  await sendText(
    phone,
    `*The problem we hear from ${c.label} businesses:*\n\n${c.problem}\n\n` +
    `*What we build for you:*\n\n${c.solution}`
  );
  await sendButtons(phone, 'What would you like to know next?', [
    { id: 'case_study', title: 'See a real result' },
    { id: 'pricing',    title: 'See pricing' },
    { id: 'talk_now',   title: 'Talk to us now' },
  ]);
}

async function showCaseStudy(phone, industry) {
  const c = industries[industry];
  await sendButtons(
    phone,
    `*Real result for ${c.label}:*\n\n${c.result}\n\nWant us to build something like this for your business?`,
    [
      { id: 'book_call', title: 'Book a free call' },
      { id: 'pricing',   title: 'See pricing' },
      { id: 'not_ready', title: 'Not ready yet' },
    ]
  );
}

async function showPricing(phone) {
  await sendButtons(
    phone,
    '*Beelio Pricing — one-off project fee:*\n\n' +
    '🟢 *Starter — UGX 2.5M*\nWhatsApp bot or single automation. Live in 1 to 2 weeks.\n\n' +
    '🔵 *Business — UGX 4M*\nFull management system or web app. Live in 2 to 4 weeks.\n\n' +
    '⚫ *Enterprise — Custom quote*\nMulti-branch, mobile app, or complex integrations.\n\n' +
    'All packages include 3 months of free support after launch.',
    [
      { id: 'book_call', title: 'Book a free call' },
      { id: 'talk_now',  title: 'Ask a question' },
      { id: 'not_ready', title: 'Not ready yet' },
    ]
  );
}

async function showHandoff(phone) {
  await sendText(
    phone,
    'Perfect! A member of the Beelio team will pick up this conversation shortly.\n\n' +
    'You can also reach us directly:\n' +
    '📞 *+256 786 367 460*\n' +
    '🌐 *beelio.tech*\n\n' +
    'We typically reply within a few hours. Talk soon! 🚀'
  );
}

async function confirmBooking(phone, name) {
  await sendText(
    phone,
    `Thanks *${name}*! 🎉\n\n` +
    'We have noted your interest. A member of the Beelio team will WhatsApp you within *24 hours* to schedule your free 15-minute discovery call.\n\n' +
    'In the meantime, feel free to browse *beelio.tech* to see more of what we have built.\n\n' +
    'Talk soon! 🚀'
  );
}

// ─── Industry resolver ─────────────────────────────────────────────────────────
// Handles both list IDs and free-text typing
function resolveIndustry(input) {
  if (!input) return null;
  const s = input.toLowerCase();
  const keys = Object.keys(industries);
  if (keys.includes(s)) return s;
  if (s.includes('clinic') || s.includes('hospital') || s.includes('health'))        return 'clinic';
  if (s.includes('restaurant') || s.includes('food') || s.includes('cafe'))          return 'restaurant';
  if (s.includes('retail') || s.includes('shop') || s.includes('store'))             return 'retail';
  if (s.includes('sacco') || s.includes('finance') || s.includes('loan'))            return 'sacco';
  if (s.includes('school') || s.includes('training') || s.includes('educat'))        return 'school';
  if (s.includes('logistic') || s.includes('deliver') || s.includes('transport'))    return 'logistics';
  if (s.includes('other'))                                                            return 'other';
  return null;
}

module.exports = { handleIncoming };
