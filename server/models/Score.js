const mongoose = require('mongoose');

const ScoreSchema = mongoose.Schema({
  gameMode: {
    type: String,
    required: true
  },
  totalScore: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("score", ScoreSchema);