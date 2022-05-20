CREATE DATABASE ProyectoDocker;
USE ProyectoDocker;

CREATE TABLE IF NOT EXISTS Report (
	`idReport` INT auto_increment PRIMARY KEY,
    `name` VARCHAR(100),
    `email` VARCHAR(100),
    `password` VARCHAR(100)
);