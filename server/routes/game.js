const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Score = require('../models/Score');
const router = express.Router();

router.post('/finish', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    const { gameMode, totalScore } = req.body;

    let score = new Score({
      gameMode,
      totalScore,
    });

    await score.save();

    user.scores.push(score);
    await user.save();

    return res.status(200).json(score);
    
  } catch (e) {
    res.send({ message: "Error in Saving score" });
  }
});

module.exports = router;