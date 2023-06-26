const express = require("express");
const user = require("./routes/user");
const game = require("./routes/game")
const cors = require('cors');
const InitiateMongoServer = require("./config/db");
require('dotenv').config();


InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 */
app.use("/user", user);
app.use("/game", game);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});