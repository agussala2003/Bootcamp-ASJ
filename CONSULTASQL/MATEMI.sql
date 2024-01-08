-- Creacion de las tablas
/*
CREATE TABLE Categorias (
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  categoria VARCHAR(30) NOT NULL
);
CREATE TABLE Productos (
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  id_tipo INT NOT NULL,
  nombre VARCHAR(30) NOT NULL,
  autor VARCHAR(30) NOT NULL,
  id_categoria INT NOT NULL
);
CREATE TABLE Tipos (
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  tipo VARCHAR(30) NOT NULL
);
CREATE TABLE Formatos (
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  formato VARCHAR(30) NOT NULL
);
CREATE TABLE ProdutosXFormato (
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  id_formato INT NOT NULL,
  id_prod INT NOT NULL,
  precioCompra DECIMAL(8,2) NOT NULL,
  precioAlquiler DECIMAL(8,2) NULL,
  stock INT NOT NULL,
  stockMinimo INT NOT NULL
);
CREATE TABLE Clientes (
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  nombre VARCHAR(30) NOT NULL,
  apellido VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  telefono VARCHAR(30) NOT NULL,
  id_direc INT NOT NULL,
  isSocio BIT NOT NULL
);
CREATE TABLE Direcciones(
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  calle VARCHAR(50) NOT NULL,
  num INT NOT NULL,
  id_localidad INT NOT NULL
);
CREATE TABLE Localidades(
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  localidad VARCHAR(50) NOT NULL,
  id_provincia INT NOT NULL
);
CREATE TABLE Provincias(
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  provincia VARCHAR(50) NOT NULL,
  id_pais INT NOT NULL
);
CREATE TABLE Pais(
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  pais VARCHAR(50) NOT NULL
);
CREATE TABLE Socios(
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  fechaNacimiento DATETIME NOT NULL,
  fechaAsociacion DATETIME NOT NULL,
  fechaBaja DATETIME NULL,
  id_cliente INT NOT NULL
);
CREATE TABLE Locales(
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  id_direc INT NOT NULL
);
CREATE TABLE Empleados(
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  rol VARCHAR(50) NOT NULL,
  sueldo DECIMAL(8,2) NOT NULL,
  legajo INT NOT NULL,
  id_local INT NOT NULL
);
CREATE TABLE Detalles(
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  id_prodFormato INT NOT NULL,
  id_pedido INT NOT NULL,
  precio DECIMAL(8,2) NOT NULL,
  isCompra BIT NOT NULL
);
CREATE TABLE Pedidos(
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  id_cliente INT NOT NULL,
  id_empleado INT NOT NULL,
  fechaPedido DATETIME NOT NULL,
  id_medio INT NOT NULL
);
CREATE TABLE MediosDePago(
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  medio VARCHAR(50) NOT NULL
);
*/

-- Agregacion de las claves foraneas
/*
ALTER TABLE Productos ADD CONSTRAINT fk_categoria FOREIGN KEY (id_categoria) REFERENCES Categorias(id);
ALTER TABLE Productos ADD CONSTRAINT fk_tipo FOREIGN KEY (id_tipo) REFERENCES Tipos(id); 
ALTER TABLE ProdutosXFormato ADD CONSTRAINT fk_producto FOREIGN KEY (id_prod) REFERENCES Productos(id);
ALTER TABLE ProdutosXFormato ADD CONSTRAINT fk_formato FOREIGN KEY (id_formato) REFERENCES Formatos(id); 
ALTER TABLE Clientes ADD CONSTRAINT fk_direcCliente FOREIGN KEY (id_direc) REFERENCES Direcciones(id);
ALTER TABLE Direcciones ADD CONSTRAINT fk_localidad FOREIGN KEY (id_localidad) REFERENCES Localidades(id);
ALTER TABLE Localidades ADD CONSTRAINT fk_provincia FOREIGN KEY (id_provincia) REFERENCES Provincias(id);
ALTER TABLE Provincias ADD CONSTRAINT fk_pais FOREIGN KEY (id_pais) REFERENCES Pais(id);
ALTER TABLE Socios ADD CONSTRAINT fk_cliente FOREIGN KEY (id_cliente) REFERENCES Clientes(id);
ALTER TABLE Locales ADD CONSTRAINT fk_direcLocal FOREIGN KEY (id_direc) REFERENCES Direcciones(id);
ALTER TABLE Detalles ADD CONSTRAINT fk_prodFormato FOREIGN KEY (id_prodFormato) REFERENCES ProdutosXFormato(id);
ALTER TABLE Detalles ADD CONSTRAINT fk_pedido FOREIGN KEY (id_pedido) REFERENCES Pedidos(id);
ALTER TABLE Pedidos ADD CONSTRAINT fk_clientePedido FOREIGN KEY (id_cliente) REFERENCES Clientes(id);
ALTER TABLE Pedidos ADD CONSTRAINT fk_medio FOREIGN KEY (id_medio) REFERENCES MediosDePago(id); 
ALTER TABLE Pedidos ADD CONSTRAINT fk_empleado FOREIGN KEY (id_empleado) REFERENCES Empleados(id); 
*/

-- Insertamos datos
/*
INSERT INTO Categorias (categoria)
VALUES ('Rock'),
('Pop'),
('Clasicos'),
('R&B'),
('Accion'),
('Ciencia Ficcion'),
('Terror'),
('Thriller'),
('Anime'),
('Romance')

INSERT INTO Tipos(tipo)
VALUES ('Pelicula'),
('Serie'),
('Musica')

INSERT INTO Productos(id_tipo, nombre, autor, id_categoria)
VALUES 
  (1, 'Los Vengadores', 'Los hermanos Lala', 6),
  (1, 'Cars', 'Pixar', 6),
  (2, 'Naruto', 'Tokyo', 9),
  (2, 'La Casa de Papel', 'Los Gallegos', 5),
  (3, 'Starboy', 'The Weeknd', 4),
  (3, 'After Hours', 'The Weeknd', 4);

INSERT INTO Formatos(formato)
VALUES ('BLU RAY'),
('DVD'),
('VINILO'),
('SD')

INSERT INTO ProdutosXFormato(id_formato,id_prod,preciocompra,precioalquiler,stock,stockminimo)
VALUES (1,19,799.99,299.99,10,1),
(2,19,599.99,199.99,10,1),
(1,20,799.99,299.99,8,2),
(2,20,199.99,99.99,15,2),
(1,21,1999.99,499.99,10,1),
(1,22,2999.99,799.99,10,1),
(3,23,599.99,NULL,10,1),
(2,23,199.99,NULL,10,1),
(3,24,799.99,NULL,10,1)

INSERT INTO Pais (pais)
VALUES ('Argentina'),
('Brazil'),
('Chile'),
('Colombia'),
('Ecuador'),
('Estados Unidos')

INSERT INTO Provincias (provincia,id_pais)
VALUES ('Buenos Aires',1),
('Cordoba',1),
('Rio de Janeiro',2),
('Santiago de Chile',3),
('Medellin',4),
('Bogota',5),
('Nueva York',6)

INSERT INTO Localidades(localidad,id_provincia)
VALUES ('CABA',1),
('Belgrano',1),
('Cordoba',2),
('Villa Carlos Paz',2),
('Brasilia',3),
('Coquimbo',4),
('Ciudad de Medellin',5),
('Ciudad de Bogota',6),
('Texas',7)

INSERT INTO Direcciones(calle,num,id_localidad)
VALUES ('Cerrito',540,1),
('Cabildo',730,2),
('Fernet',7030,3),
('Fernet 2',6040,4),
('Neymar',240,5),
('Alexis Sanchez',530,6),
('Valderrama',140,7),
('Valencia',5754,8),
('Elon Musk',985,9)

INSERT INTO Clientes(nombre,apellido,email,telefono,id_direc)
VALUES ('Agustin','Saladino','agussala@gmail.com','112458375',1),
('Juan','Perez','juanperez@gmail.com','112365481',2),
('Lisandro','Martinez','lichamar@gmail.com','112858375',3),
('Lionel','Messio','liomessi@gmail.com','112958375',4),
('Dibu','Martinez','dibumar@gmail.com','112158375',5),
('Alexis','Mac Alister','alemac@gmail.com','112353375',6),
('Rodrigo','De Paul','rodripaul@gmail.com','112468375',7),
('Angel','Di Maria','fideo@gmail.com','112410375',8),
('Nicolas','Tagliafico','taglia@gmail.com','112429375',9)

INSERT INTO Locales (id_direc)
VALUES (1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9)

INSERT INTO Socios (fechanacimiento, fechaasociacion, fechabaja, id_cliente)
VALUES 
  ('1990-01-15', '2021-03-10', NULL, 1),
  ('1985-05-22', '2020-11-05', NULL, 2),
  ('1992-08-30', '2019-07-18', '2022-01-01', 3),
  ('1988-04-11', '2022-02-28', NULL, 4),
  ('1995-09-02', '2020-09-15', NULL, 5),
  ('1983-12-08', '2021-08-20', NULL, 6),
  ('1998-06-17', '2018-10-12', NULL, 7),
  ('1991-03-25', '2019-05-30', '2023-04-15', 8),
  ('1987-11-03', '2020-04-02', NULL, 9);

INSERT INTO MediosDePago (medio)
VALUES 
  ('Tarjeta de Crédito'),
  ('Efectivo'),
  ('Transferencia Bancaria'),
  ('Cheque');

INSERT INTO Empleados (nombre, apellido, rol, sueldo, legajo, id_local)
VALUES 
  ('Carlos', 'Gomez', 'Vendedor', 50000.00, 101, 1),
  ('Laura', 'Fernandez', 'Cajero', 45000.00, 102, 2),
  ('Rodrigo', 'Lopez', 'Gerente', 80000.00, 103, 3),
  ('Ana', 'Garcia', 'Recepcionista', 42000.00, 104, 4),
  ('Diego', 'Rodriguez', 'Vendedor', 48000.00, 105, 5),
  ('Maria', 'Martinez', 'Cajero', 46000.00, 106, 6),
  ('Javier', 'Luna', 'Gerente', 85000.00, 107, 7),
  ('Liliana', 'Perez', 'Recepcionista', 43000.00, 108, 8),
  ('Federico', 'Sanchez', 'Vendedor', 49000.00, 109, 9);

INSERT INTO Pedidos (id_cliente, id_empleado, fechaPedido, id_medio)
VALUES 
  (1, 1, '2022-01-10', 1),
  (2, 2, '2022-02-15', 2),
  (3, 3, '2022-03-20', 3),
  (4, 4, '2022-04-25', 4),
  (5, 5, '2022-05-30', 1),
  (6, 6, '2022-06-05', 2),
  (7, 7, '2022-07-10', 3),
  (8, 8, '2022-08-15', 4),
  (9, 9, '2022-09-20', 1);

INSERT INTO Detalles (id_prodFormato, id_pedido, precio, isCompra)
VALUES 
  (2, 2, 199.99, 1),
  (3, 3, 499.99, 1),
  (4, 4, 99.99, 1),
  (5, 5, 799.99, 1),
  (6, 6, 799.99, 1),
  (7, 7, 599.99, 1),
  (8, 8, 199.99, 1),
  (9, 9, 499.99, 1);
*/

-- Consultas
/*
SELECT p.fechapedido as FechaPedido, c.nombre as NombreCliente,c.apellido as ApellidoCliente, e.nombre as NombreEmpleado, e.apellido as ApellidoEmpleado, ll.localidad AS LocalidadSede
FROM Pedidos p INNER JOIN Clientes c ON c.id = p.id_cliente INNER JOIN Socios s ON s.id_cliente = c.id INNER JOIN Empleados e ON e.id = p.id_empleado INNER JOIN Locales l ON l.id = e.id_local INNER JOIN Direcciones d ON d.id_localidad = l.id_direc INNER JOIN Localidades ll ON ll.id = d.id_localidad
WHERE c.email LIKE '%gmail.com' AND c.email LIKE '%mar%' 
-- Para listar los que sean martinez
*/

-- Agregarmos el campo created_at con la fecha de hoy
/*
ALTER TABLE Categorias
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
ALTER TABLE Productos
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
ALTER TABLE Tipos
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
ALTER TABLE Formatos
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
ALTER TABLE ProdutosXFormato
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
ALTER TABLE Clientes
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
ALTER TABLE Direcciones
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
ALTER TABLE Localidades
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
ALTER TABLE Provincias
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
ALTER TABLE Pais
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
ALTER TABLE Socios
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
ALTER TABLE Locales
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
ALTER TABLE Empleados
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
ALTER TABLE Detalles
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
ALTER TABLE Pedidos
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
ALTER TABLE MediosDePago
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;
*/

-- Subconsultas
-- Buscar los clientes/empleados y ordenarlos por apellido y luego nombre, de la A-Z, mostrar nombre,apellido
/*
SELECT e.id,e.apellido,e.nombre
FROM Empleados e
ORDER BY e.apellido ASC, e.nombre ASC

SELECT c.id,c.apellido,c.nombre,c.email, d.calle,d.num
FROM Clientes c INNER JOIN Direcciones d ON d.id = c.id_direc
ORDER BY c.apellido ASC, c.nombre ASC

-- Mostrar las distintas provincias que aparecen
SELECT DISTINCT p.provincia
FROM Clientes c INNER JOIN Direcciones d ON d.id = c.id_direc INNER JOIN Localidades l ON l.id = d.id_localidad INNER JOIN Provincias p ON p.id = l.id_provincia

-- Mostrar los el 2% de los pedidos hechos por socios
SELECT TOP 2 PERCENT p.*
FROM Pedidos p INNER JOIN Clientes c ON p.id_cliente = c.id INNER JOIN Socios s ON s.id_cliente = c.id

-- Cuantos socios viven en buenos aires
SELECT COUNT(s.id) AS SociosBaires
FROM Clientes c INNER JOIN Direcciones d ON d.id = c.id_direc INNER JOIN Socios s On s.id_cliente = c.id INNER JOIN Localidades l ON l.id = d.id_localidad INNER JOIN Provincias p ON p.id = l.id_provincia
WHERE p.provincia = 'Buenos Aires'

-- Cuantas peliculas tengo entre mis productos
SELECT COUNT(p.id) as CantPeliculas
FROM Productos p INNER JOIN Tipos t ON t.id = p.id_tipo
WHERE t.tipo = 'Pelicula'

SELECT COUNT(p.id) as CantPeliculas
FROM Productos p INNER JOIN Tipos t ON t.id = p.id_tipo
WHERE t.id IN (SELECT id FROM Tipos WHERE tipo = 'Pelicula')

-- Cuantos productos pidieron comprar o alquilar los clientes no socios
SELECT COUNT(c.id)
FROM Clientes c LEFT JOIN Socios s ON c.id = s.id_cliente INNER JOIN Pedidos p ON p.id_cliente = c.id INNER JOIN Detalles d ON d.id_pedido = p.id
WHERE s.id IS NULL

-- Calcular el promedio de venta del empleado de la sucursal 1
SELECT AVG(d.precio) AS PromedioLocal2
FROM Pedidos p INNER JOIN Empleados e ON e.id = p.id_empleado INNER JOIN Locales l ON l.id = e.id_local INNER JOIN Detalles d ON d.id_pedido = p.id INNER JOIN ProdutosXFormato pf ON pf.id = d.id_prodformato
WHERE l.id = 2

-- Promedio del precio de alquiler de las series
SELECT AVG(pf.precioalquiler)
FROM Productos p INNER JOIN Tipos t ON t.id = p.id_tipo INNER JOIN ProdutosXFormato pf ON pf.id_prod = p.id
WHERE t.tipo = 'Serie'
*/