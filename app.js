const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");

// Security Middleware Lib Import
const cors = require("cors");
const expressMongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");

// Database Lib Import
const mongoose = require("mongoose");

// Security Middleware Implement
app.use(cookieParser());
app.use(cors());
app.use(expressMongoSanitize());
app.use(helmet());
app.use(hpp());
app.use(rateLimit());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

//DB Connection
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ecyv4ix.mongodb.net/ecommerce?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => console.log(error));

//Route Implement
//app.use("/api/v1", router);

module.exports = app;
