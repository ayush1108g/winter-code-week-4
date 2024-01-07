const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const usersignuprouter = require("./routes/signuproute");
const feedbackrouter = require("./routes/feedbackroute");
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/user", usersignuprouter);
app.use("/api/feedback", feedbackrouter);

module.exports = app;
