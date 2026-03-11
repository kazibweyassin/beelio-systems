require('dotenv').config();
const express = require('express');
const { handleIncoming } = require('./bot/flow');

const app = express();
app.use(express.json());

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.send('Beelio WhatsApp Bot is running.');
});

// ─── Webhook verification (Meta calls this once when you register) ─────────────
app.get('/webhook', (req, res) => {
  const mode      = req.query['hub.mode'];
  const token     = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
    console.log('Webhook verified by Meta.');
    return res.status(200).send(challenge);
  }
  res.sendStatus(403);
});

// ─── Incoming messages ─────────────────────────────────────────────────────────
app.post('/webhook', async (req, res) => {
  // Always respond 200 immediately so Meta doesn't retry
  res.sendStatus(200);

  try {
    const body    = req.body;
    if (body.object !== 'whatsapp_business_account') return;

    const messages = body.entry?.[0]?.changes?.[0]?.value?.messages;
    if (!messages?.length) return;

    const message = messages[0];
    const phone   = message.from;

    await handleIncoming(phone, message);
  } catch (err) {
    console.error('Error handling webhook:', err.message);
  }
});

// ─── Start ────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Beelio WhatsApp Bot listening on port ${PORT}`);
});
