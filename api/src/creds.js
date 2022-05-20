const { DB_PORT, DB_HOST, MYSQL_USER, MYSQL_PASS, DB_NAME } = process.env;

let aws_keys = {
    RDS: {
        host: "35.222.160.79",
        port: "3306",
        user: "root",
        password: "pass",
        database: "ProyectoDocker"
    }
};
module.exports = aws_keys;