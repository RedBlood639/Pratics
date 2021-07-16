var express = require("express");
var router = express.Router();
const passportGoogle = require("../auth/google");
//
/* GOOGLE ROUTER */
router.get(
  "/google",
  passportGoogle.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"],
  })
);

router.get(
  "/google/callback",
  passportGoogle.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/users");
  }
);

module.exports = router;
