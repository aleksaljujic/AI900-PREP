const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  id: Number,
  set: { type: String, required: true },
  type: String,
  question: String,
  choices: mongoose.Schema.Types.Mixed,
  answer: mongoose.Schema.Types.Mixed,
  explanation: String,
  choices_pool: mongoose.Schema.Types.Mixed,
  targets: mongoose.Schema.Types.Mixed,
  pairs: mongoose.Schema.Types.Mixed,
}, { strict: false });

questionSchema.index({ set: 1 });

module.exports = mongoose.model('Question', questionSchema);
