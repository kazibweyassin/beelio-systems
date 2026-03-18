const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['text', 'button', 'list', 'location', 'image'],
    required: true
  },
  content: {
    type: String,
    required: true
  },
  sender: {
    type: String,
    enum: ['customer', 'bot'],
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  twilioMessageId: String
});

const conversationSchema = new mongoose.Schema({
  customerPhone: {
    type: String,
    required: true,
    index: true
  },
  customerName: {
    type: String,
    default: 'Valued Customer'
  },
  status: {
    type: String,
    enum: ['active', 'booked', 'completed', 'cancelled'],
    default: 'active'
  },
  currentStep: {
    type: String,
    default: 'welcome'
  },
  messages: [messageSchema],
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking'
  },
  lastActivity: {
    type: Date,
    default: Date.now
  },
  salonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Salon',
    required: true
  }
}, {
  timestamps: true
});

// Update lastActivity on new message
conversationSchema.pre('save', function(next) {
  if (this.isModified('messages')) {
    this.lastActivity = new Date();
  }
  next();
});

module.exports = mongoose.models.Conversation || mongoose.model('Conversation', conversationSchema);
