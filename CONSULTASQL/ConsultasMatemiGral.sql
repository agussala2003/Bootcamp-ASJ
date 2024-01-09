SELECT *
FROM products

SELECT COUNT(p.id) as Cantidad,f.format as Formato
FROM products p INNER JOIN formats f ON f.id = p.id_format
GROUP BY f.format
ORDER BY Cantidad Desc

SELECT CONCAT(c.name,' ', c.last_name) AS 'Nombre Completo',COUNT(o.id) AS 'Cantidad Pedidos'
FROM orders o INNER JOIN clients c ON c.id = o.id_client
GROUP BY CONCAT(c.name,' ', c.last_name)

-- Cantidad de cada producto se alquilo o se compro
SELECT SUM(od.cant) AS Cantidad,p.title
FROM order_details od INNER JOIN products p ON p.id = od.id_product
GROUP BY p.title
ORDER BY Cantidad DESC

-- Lean crack
SELECT p.title AS Producto, SUM(d.cant) AS Total, SUM(d.cant * d.is_buy) AS Ventas, SUM(d.cant * (1 - d.is_buy)) AS Alquileres   
FROM products p INNER JOIN order_details d ON d.id_product = p.id
GROUP BY p.title;

-- Top 5 de los generos mas solicitados
SELECT TOP 5 SUM(od.cant) AS Cantidad,g.gender
FROM order_details od INNER JOIN products p ON p.id = od.id_product INNER JOIN genders g ON g.id = p.id_gender
GROUP BY g.gender
ORDER BY Cantidad DESC

-- Empleados (nombre,apellido,legajo) que trabajaron entre el 12 y 15 de enero de 2024
-- Ordenado por fecha Z-A y legajo A-Z

SELECT e.name AS Nombre,e.last_name AS Apellido,e.legajo AS Legajo, o.date AS Fecha
FROM employees e INNER JOIN orders o ON o.id_employee = e.id
WHERE o.date >= '2024-01-12' AND o.date <= '2024-01-15 '
ORDER BY o.date DESC, e.legajo ASC;

-- Metodos de pago utilizados por los socios, siempre que sea mas de 2 veces
SELECT COUNT(o.id) AS Cantidad, m.payment_method AS MetodoPago, c.name AS Nombre,c.last_name AS Apellido
FROM orders o INNER JOIN payment_methods m ON m.id = o.id_payment_method INNER JOIN clients c ON c.id = o.id_client 
WHERE c.is_partner = 1
GROUP BY m.payment_method, c.name,c.last_name
HAVING COUNT(o.id) > 2

-- Ordenes (numero,fecha,total) cuyo precio total sea mayor al precio promedio

SELECT o.number_order AS Numero, o.date AS Fecha, o.total as Total
FROM orders o
WHERE o.total > (SELECT AVG(p.sale_price) FROM products p)