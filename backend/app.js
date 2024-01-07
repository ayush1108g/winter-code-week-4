const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const usersignuprouter = require("./routes/signuproute");
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/user", usersignuprouter);

module.exports = app;
