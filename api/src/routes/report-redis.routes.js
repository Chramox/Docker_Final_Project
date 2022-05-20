const express = require("express");
const {
  getAll, newReport
} = require("../controllers/report-redis.controller");

const router = express.Router();
router.get("/", getAll);
router.post("/", newReport);

module.exports = {
  routes: router,
};