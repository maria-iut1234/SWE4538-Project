const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // parse the body of HTTP request
const cookieParser = require("cookie-parser"); //parse cookies that are sent with HTTP request
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");
const path = require("path");
require("./config/passport")(passport);
require('dotenv').config();

app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // we can resave the session if nothing is change
    saveUninitialized: false, //we can save empty value
  })
);

app.use(passport.initialize());
app.use(passport.session());

// To store image/files
app.use(express.static("./uploads"));

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cors = require("cors"); //Cross-origin resource sharing (CORS) is a browser mechanism which
//  enables controlled access to resources located outside of a given domain.
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // Allow cookies to be sent
  })
);

// routing information
const authRoutes = require("./routes/auth.routes.js");
const userRoutes = require("./routes/user.routes.js");
const recipeRoutes = require("./routes/recipe.routes.js");

app.use(authRoutes);
app.use(userRoutes);
app.use(recipeRoutes);

// Landing Page
app.get("/landingPage", (req, res) => {
  const filePath = path.join(__dirname, "../client/landingPage.html");
  res.sendFile(filePath);
});

//Connect to DB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
