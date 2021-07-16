const express = require("express");
var passport = require("passport");
const cors = require("cors");
const app = express();
//
const authRouter = require("./routes/auth.route");
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// enabling cors for all requests by using cors middleware
app.use(cors());
// Enable pre-flight
app.options("*", cors());

app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRouter);
app.all("*", (req, res, next) => {
  console.log("EndPoint NOt Found.");
});

const PORT = process.env.SERVERPORT | 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
