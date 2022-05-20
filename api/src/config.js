"use strict";
const dotenv = require("dotenv");
const assert = require("assert");
const mysql = require("mysql");
const aws_keys = require("./creds");

dotenv.config();
//Credencias AWS
const connectiondb = mysql.createPool(aws_keys.RDS);
const { PORT, HOST, HOST_URL } = process.env;

assert(PORT, "PORT is required");

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  conndb: connectiondb
};