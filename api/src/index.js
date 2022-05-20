"use strict";
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config");

//Routes
const reportsRoute =  require("./routes/report.routes")
const reportsRedisRoute =  require("./routes/report-redis.routes")
//API Configuration
const app = express();
const corsOptions = { origin: "*", optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use("/api/report", reportsRoute.routes);
app.use("/api/redis/report", reportsRedisRoute.routes);

app.get("/api", (_req, res) => res.status(200).send({ message: "API NodeJs!"}));
app.listen(config.port, () =>
  console.log("App is listening on url http://localhost:" + config.port)
);

module.exports = app;