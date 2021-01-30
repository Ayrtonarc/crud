-- creating the database

CREATE DATABASE crudstudents;
--using the database

USE crudstudents;

--CREANDO LA TABLA
CREATE TABLE students(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    class VARCHAR(100) NOT NULL
);
--mostrar tablas
SHOW TABLES;

--describe students;
