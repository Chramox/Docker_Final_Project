CREATE DATABASE ProyectoDocker;
USE ProyectoDocker;

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'pass';
flush privileges;

CREATE TABLE IF NOT EXISTS Report (
	`idReport` INT auto_increment PRIMARY KEY,
    `name` VARCHAR(100),
    `email` VARCHAR(100),
    `password` VARCHAR(100)
);