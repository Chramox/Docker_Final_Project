const { DB_PORT, DB_HOST, MYSQL_USER, MYSQL_PASS, DB_NAME } = process.env;

let aws_keys = {
    RDS: {
        host: "localhost",
        port: "3306",
        user: "root",
        password: "pass",
        database: "ProjectDocker"
    }
};
module.exports = aws_keys;