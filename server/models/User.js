const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  scores: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'score'
  }]
});

module.exports = mongoose.model("user", UserSchema);