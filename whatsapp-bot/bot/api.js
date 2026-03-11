const axios = require('axios');

function url() {
  return `https://graph.facebook.com/v18.0/${process.env.PHONE_NUMBER_ID}/messages`;
}

function headers() {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
  };
}

async function send(payload) {
  try {
    await axios.post(url(), payload, { headers: headers() });
  } catch (err) {
    console.error('WhatsApp API error:', JSON.stringify(err.response?.data) || err.message);
  }
}

// Plain text message
async function sendText(to, body) {
  await send({
    messaging_product: 'whatsapp',
    to,
    type: 'text',
    text: { body, preview_url: false },
  });
}

// Up to 3 reply buttons
// buttons: [{ id: 'btn_id', title: 'Button Label' }]
async function sendButtons(to, body, buttons) {
  await send({
    messaging_product: 'whatsapp',
    to,
    type: 'interactive',
    interactive: {
      type: 'button',
      body: { text: body },
      action: {
        buttons: buttons.map((b) => ({
          type: 'reply',
          reply: { id: b.id, title: b.title.substring(0, 20) },
        })),
      },
    },
  });
}

// Scrollable list (up to 10 options across sections)
// sections: [{ title: 'Section Name', rows: [{ id, title, description }] }]
async function sendList(to, bodyText, buttonLabel, sections) {
  await send({
    messaging_product: 'whatsapp',
    to,
    type: 'interactive',
    interactive: {
      type: 'list',
      body: { text: bodyText },
      action: {
        button: buttonLabel,
        sections,
      },
    },
  });
}

// Mark a message as read (shows blue ticks on sender's side)
async function markRead(messageId) {
  await send({
    messaging_product: 'whatsapp',
    status: 'read',
    message_id: messageId,
  });
}

module.exports = { sendText, sendButtons, sendList, markRead };
