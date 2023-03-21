
--Laboratorio 20: Consultas en SQL
--Author: Alejandra Cabrera Ruiz A01704463
--Author: Karla Alejandra Padilla González A0170331
--File: lab20.sql

--Materiales(Clave, Descripción, Precio)
--Proveedores(RFC, RazonSocial)
--Proyectos(Numero,Denominacion)
--Entregan(Clave, RFC, Numero, Fecha, Cantidad)

--1. Los materiales (clave y descripción) entregados al proyecto "México sin ti no estamos completos".
SELECT M.clave,M.descripcion 
FROM Materiales as M, Proyectos as P, Entregan as E
WHERE P.denominacion = 'México sin ti no estamos completos'
AND M.clave=E.clave
AND E.numero = P.numero

--2. Los materiales (clave y descripción) que han sido proporcionados por el proveedor "Acme tools"
SELECT M.clave, M.descripcion 
FROM Materiales as M, proveedores as P, Entregan as E
WHERE P.razonsocial = 'Acme tools'
AND M.clave = E.clave
AND P.rfc = E.rfc;

--3. El RFC de los proveedores que durante el 2000 entregaron en promedio cuando menos 300 materiales.
SELECT rfc
FROM entregan
WHERE fecha BETWEEN '2000-01-01' AND '2000-12-31'
GROUP BY rfc
HAVING AVG(cantidad)>=300;

--4. El Total entregado por cada material en el año 2000.
SELECT descripcion, SUM(cantidad) AS 'Total entregado en el 2000' 
FROM entregan as e, materiales as m
WHERE m.clave = e.clave
AND fecha BETWEEN '2000-01-01' AND '2000-12-31'
GROUP BY descripcion
ORDER BY SUM(cantidad)

--5. La Clave del material más vendido durante el 2001. (se recomienda usar una vista intermedia para su solución)
SELECT clave
FROM entregan
WHERE fecha BETWEEN '2001-01-01' AND '2001-12-31'
AND cantidad= (SELECT MAX(cantidad)
                	FROM entregan);

--6  Productos que contienen el patrón 'ub' en su nombre.
SELECT descripcion
FROM materiales
WHERE descripcion LIKE '%ub%'

--7. Denominación y suma del total a pagar para todos los proyectos.
SELECT P.denominacion, (E.Cantidad * M.precio) as 'Total a Pagar'
FROM Proyectos as P, Materiales as M, Entregan as E
WHERE M.clave=E.clave
AND P.numero = E.numero;

--8. Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en
-- acción que no se encuentran apoyando al proyecto Educando en Coahuila (Solo usando vistas).

CREATE VIEW TelevisaA AS SELECT p.rfc, p.razonsocial
FROM proveedores AS p, proyectos AS pr, entregan AS e
WHERE p.rfc = e.rfc
AND e.numero = pr.numero
AND pr.denominacion ='Televisa en acción';

CREATE VIEW EducandoCh AS SELECT p.rfc, p.razonsocial
FROM proveedores AS p, proyectos AS pr, entregan AS e
WHERE p.rfc = e.rfc
AND e.numero = pr.numero
AND pr.denominacion ='Educando en Coahuila'; 

SELECT * FROM TelevisaA
EXCEPT
SELECT * FROM EducandoCh

--9.Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción 
-- que no se encuentran apoyando al proyecto Educando en Coahuila (Sin usar vistas, utiliza not in, in o exists).

SELECT P.rfc, P.razonsocial, Pr.denominacion
FROM Proveedores as P, Proyectos as Pr, Entregan as E
WHERE Pr.denominacion = 'Televisa en acción'
AND P.rfc = E.rfc
AND Pr.numero = E.numero 
AND P.rfc NOT IN (SELECT P.rfc
					FROM Proveedores as P, Proyectos as Pr, Entregan as E
					WHERE Pr.denominacion = 'Educando en Coahuila'
                    AND P.rfc = E.rfc
					AND Pr.numero = E.numero);

--10. Costo de los materiales y los Materiales que son entregados al proyecto Televisa en acción cuyos proveedores
-- también suministran materiales al proyecto Educando en Coahuila.Reto: Usa solo el operador NOT IN en la consulta 
-- anterior (No es parte de la entrega).
SELECT M.descripcion, SUM(e.cantidad) as CostoxMaterial 
FROM materiales AS m, proyectos AS pr, entregan as e
WHERE m.clave = e.clave
AND pr.numero = e.numero
AND pr.denominacion = 'Televisa en acción'
AND e.rfc IN (
    SELECT e.rfc
    FROM proyectos AS pr, entregan as e 
    WHERE e.numero = pr.numero
    AND pr.denominacion = 'Educando en Coahuila'
)
GROUP BY M.descripcion

--11. Nombre del material, cantidad de veces entregados y total del costo de dichas entregas por material de todos los proyectos.
SELECT descripcion, COUNT(cantidad) AS 'Cantidad entregadas', SUM(cantidad) AS 'Total de costo de cada entrega'
FROM materiales AS m, entregan AS e, proyectos AS p
WHERE m.clave = e.clave
AND p.numero = e.numero
GROUP BY m.descripcion
