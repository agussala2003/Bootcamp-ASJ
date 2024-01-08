-- Comentario simple
/* Comentario multilinea */

-- Crear Base de datos
-- CREATE DATABASE nombre

-- Eliminar Base de datos
-- DROP DATABASE nombre
-- DROP DATABASE IF EXISTS nombre;

-- Crear tabla
/*
CREATE TABLE nombre_tabla(
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  apellido VARCHAR(50),
  estado BIT
);
*/

-- Eliminar Tabla
-- DROP TABLE libros

-- Modificar Columna de una Tabla
-- ALTER TABLE autor DROP COLUMN apellido
-- ALTER TABLE autor ADD apellido VARCHAR(50) NOT NULL
-- ALTER TABLE autor ALTER COLUMN apellido cambioapellido VARCHAR(50), le cambio el nombre de variable\
-- ALTER TABLE autor ALTER COLUMN apellido VARCHAR(50), le cambio el tipo de dato