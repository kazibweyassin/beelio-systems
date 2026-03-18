import { NextResponse } from 'next/server';

// POST /api/whatsapp — Twilio webhook endpoint
export async function POST(req) {
  const body = await req.json();

  // Basic Twilio webhook validation
  if (!body || !body.From || !body.Body) {
    return NextResponse.json({ error: 'Invalid webhook payload' }, { status: 400 });
  }

  // Example: auto-reply logic
  const reply = getAutoReply(body.Body);

  // TODO: Send reply via Twilio API

  return NextResponse.json({ status: 'received', reply });
}

function getAutoReply(message) {
  // Simple keyword-based reply
  if (/book|appointment/i.test(message)) {
    return 'To book an appointment, please reply with your preferred date and time.';
  }
  return 'Thanks for contacting Beelio! How can we help you today?';
}
