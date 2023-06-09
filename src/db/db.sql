CREATE DATABASE Library;

USE Library;

CREATE TABLE libraryMs (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    telefono VARCHAR(255) NOT NULL
);

CREATE TABLE BookMs (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    isbn INT NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    year VARCHAR(4) NOT NULL,
    deleted BOOLEAN DEFAULT FALSE,
    libraryId INT,
    FOREIGN KEY (libraryMid) REFERENCES libraryMs(id)
);
