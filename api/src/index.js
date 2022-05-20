"use strict";
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config");

//Routes
const reportsRoute =  require("./routes/report.routes")
//API Configuration
const app = express();
const corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use("/api/report", reportsRoute.routes);

app.get("/api", (_req, res) => res.status(200).send({ message: "API NodeJs!"}));
app.listen(config.port, "0.0.0.0", () =>
  console.log("App is listening on url http://localhost:" + config.port)
);

module.exports = app;