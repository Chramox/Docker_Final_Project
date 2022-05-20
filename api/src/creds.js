const { DB_PORT, DB_HOST, MYSQL_USER, MYSQL_PASS, DB_NAME } = process.env;

let aws_keys = {
    RDS: {
        host: DB_HOST,
        port: DB_PORT,
        user: MYSQL_USER,
        password: MYSQL_PASS,
        database: DB_NAME
    }
};
module.exports = aws_keys;