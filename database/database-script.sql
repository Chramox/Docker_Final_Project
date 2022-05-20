CREATE DATABASE ProyectoDocker;
USE ProyectoDocker;

CREATE TABLE IF NOT EXISTS Report (
	'idReport' INT auto_increment PRIMARY KEY,
    'id' VARCHAR(50),
    'name' VARCHAR(100),
    'password' VARCHAR(100),
);