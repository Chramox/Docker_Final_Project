"use strict";
const dotenv = require("dotenv");
const assert = require("assert");
const mysql = require("mysql");
const aws_keys = require("./creds");
const fs = require('fs');

dotenv.config();
//Credencias AWS
const connectiondb = mysql.createPool(aws_keys.RDS);
const { PORT, HOST, HOST_URL } = process.env;

assert(PORT, "PORT is required");

module.exports = {
  port: PORT,
  host: fs.readFileSync(`/run/secrets/db_host`, 'utf8') || "localhost",
  url: HOST_URL,
  conndb: connectiondb
};