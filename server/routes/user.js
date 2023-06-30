const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const Score = require("../models/Score");




router.post(
  "/signup",
  [
    check("username", "Please Enter a Valid Username")
      .not()
      .isEmpty()
      .isLength({min: 5, max: 16}),
    check("password", "Please enter a valid password")
      .isLength({min: 6})
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { username, password } = req.body;
    try {
      let user = await User.findOne({
        username
      });
      if (user) {
        return res.status(400).json({
          msg: "Username is already taken."
        });
      }

      user = new User({
        username,
        password
      });

      const salt = await bcrypt.genSalt(5);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: '7d'
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );
    } catch (err) {
      console.error(err);
      res.status(500).send("Servor error.");
    }
  }
);






router.post(
  "/login",
  [
    check("username", "Please Enter a Valid Username")
      .not()
      .isEmpty()
      .isLength({min: 5, max: 16}),
    check("password", "Please enter a valid password")
      .isLength({min: 6})
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    console.log('before mongodb')
    const { username, password } = req.body;
    try {
      let user = await User.findOne({
        username
      });
      if (!user) {
        return res.status(400).json({
          message: "Invalid credentials."
        });
      }
      console.log('after mongodb and before bcrypt compare')
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        
        return res.status(400).json({
          message: "Invalid credentials."
        });
      }
      const payload = {
        user: {
          id: user.id
        }
      };
      console.log('after bcrypt and before jwt.sign')
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: '7d'
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Server Error."
      });
    }
    console.log('after jwt.sign')
  }
);





router.get("/validate-token", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});





router.get('/scores', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('scores');
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;