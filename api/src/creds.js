const { DB_PORT, DB_HOST, MYSQL_ROOT_PASSWORD, DB_NAME, REDIS_HOST } = process.env;

let aws_keys = {
    RDS: {
        host: DB_HOST,
        port: DB_PORT,
        user: "root",
        password: MYSQL_ROOT_PASSWORD,
        database: DB_NAME
    },
    REDIS_HOST: REDIS_HOST
};
module.exports = aws_keys;