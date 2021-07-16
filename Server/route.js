const express = require("express");
const router = express.Router();
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.clientId);
const dotenv = require("dotenv");
dotenv.config();
//
/* GOOGLE ROUTER */
router.post("/google-login", (req, res) => {
  googleAuth(req.body.token);
  res.send("s");
});

const googleAuth = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.clientId,
  });

  const payload = ticket.getPayload();

  console.log(payload);
};
module.exports = router;
