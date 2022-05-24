const { DB_PORT, REDIS_HOST } = process.env;
const fs = require('fs');

let aws_keys = {
    RDS: {
        host: fs.readFileSync(`/run/secrets/db_host`, 'utf8') || "localhost",
        port: DB_PORT,
        user: fs.readFileSync(`/run/secrets/mysql_user`, 'utf8') || "root",
        password: fs.readFileSync(`/run/secrets/db_password`, 'utf8') || "pass",
        database: fs.readFileSync(`/run/secrets/db_name`, 'utf8') || "ProyectoDocker"
    },
    REDIS_HOST: REDIS_HOST
};
module.exports = aws_keys;