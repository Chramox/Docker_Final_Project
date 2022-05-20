CREATE DATABASE Redes2;
USE Redes2;

CREATE TABLE IF NOT EXISTS Reporte (
	idReporte INT auto_increment PRIMARY KEY,
    carnet INT,
    nombre VARCHAR(100),
    proyecto VARCHAR(100),
    servidor VARCHAR(15),
    fecha DATE,
    cuerpo VARCHAR(500)
);