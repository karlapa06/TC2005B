--Laboratorio 21: Funciones agregadas y subconsultas
--Author: Alejandra Cabrera Ruiz A01704463
--Author: Karla Alejandra Padilla González A0170331
--File: lab21.sql

--Materiales(Clave, Descripción, Precio)
--Proveedores(RFC, RazonSocial)
--Proyectos(Numero,Denominacion)
--Entregan(Clave, RFC, Numero, Fecha, Cantidad)

--1. La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.
SELECT SUM(M.precio+M.impuesto) as 'Importe Total',SUM(E.cantidad) as 'Suma de cantidades'
FROM Entregan as E, Materiales as M
WHERE fecha BETWEEN '1997-01-01' AND '1997-12-31'
AND M.clave=E.clave;

--2. Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.

--SELECT P.razonsocial, COUNT(E.clave) as 'Numero de entregas'
--FROM Proveedores as P, Entregan as E
--WHERE P.rfc=E.rfc
--GROUP BY P.razonsocial

--SELECT E.numero, E.rfc, (E.cantidad*(M.precio+M.impuesto)) as 'Importe Total'
--FROM  materiales AS M, entregan AS E
--WHERE E.clave=M.clave
--GROUP BY E.numero, E.rfc, (E.cantidad*(M.precio+M.impuesto))

SELECT P.razonsocial, COUNT(E.rfc) as 'Numero de Entregas', SUM(E.cantidad*(M.precio+M.impuesto)) as 'Importe Total'
FROM Materiales as M, Proveedores as P, Entregan as E
wHERE P.rfc = E.rfc
AND E.clave = M.clave
GROUP BY P.razonsocial

--3. Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada,
-- la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.

SELECT M.clave, M.descripcion, SUM(E.cantidad) as 'Cantidad total entregada', MIN(E.cantidad) AS 'Cantidad mínima', MAX(E.cantidad) AS 'Cantidad máxima', SUM(E.cantidad*(M.precio+M.impuesto)) as 'Importe total'
FROM materiales as M, entregan AS E
WHERE M.clave = E.clave
GROUP BY M.clave, M.descripcion
HAVING AVG(E.cantidad) > 400


--4. Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, 
--detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.
SELECT P.razonsocial, M.clave, M.descripcion, AVG(E.cantidad) as 'Cantidad Promedio'
FROM Materiales as M, Proveedores as P, Entregan as E
wHERE P.rfc = E.rfc
AND E.clave = M.clave
GROUP BY P.razonsocial, M.clave, M.descripcion,
HAVING AVG(E.cantidad)>500


--5. Mostrar en una sola consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: 
-- aquellos para los que la cantidad promedio entregada es menor a 370 
-- y aquellos para los que la cantidad promedio entregada sea mayor a 450.

SELECT P.razonsocial, M.clave, M.descripcion, AVG(E.cantidad) as 'Cantidad Promedio'
FROM Materiales as M, Proveedores as P, Entregan as E
wHERE P.rfc = E.rfc
AND E.clave = M.clave
GROUP BY P.razonsocial, M.clave, M.descripcion,
HAVING AVG(E.cantidad)<370 
OR AVG(E.cantidad)>450 

--6. Clave y descripción de los materiales que nunca han sido entregados.
SELECT clave, descripcion
FROM Materiales 
WHERE clave NOT IN (SELECT clave
                        FROM Entregan)

--7.Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.
--SELECT razonsocial
--FROM Proveedores 
--WHERE rfc IN (SELECT E.rfc 
  --                  FROM Entregan as E, Proyectos as P
    --                wHERE E.numero = P.numero
      --              AND P.denominacion = 'Vamos México' 
        --            AND P.denominacion = 'Querétaro Limpio'
          --          )
--
--SELECT P.razonsocial
--FROM Proveedores as P, Proyectos as Pr, Entregan as E
--WHERE E.numero=Pr.numero
--AND P.rfc=E.rfc

SELECT Pr.razonsocial
FROM Entregan as E, Proyectos as P, Proveedores as Pr
WHERE E.numero = P.numero
AND E.rfc = Pr.rfc
AND P.denominacion = 'Vamos Mexico'
AND E.rfc IN (SELECT E.rfc
                FROM Entregan as E, Proyectos as P
                WHERE E.numero = P.numero
                AND P.denominacion = 'Queretaro Limpio')
GROUP BY Pr.razonsocial
--8.Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.
SELECT descripcion
FROM Materiales
WHERE clave NOT IN (SELECT E.clave
FROM Entregan AS E, Proyectos as P
WHERE E.numero = P.numero
AND P.denominacion = 'CIT Yucatán')

--9.Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.
SELECT Pr.razonsocial, AVG(E.cantidad) as 'Promedio Cantidad Entregada'
FROM Proveedores as Pr, Entregan as E
WHERE Pr.rfc = E.rfc
GROUP BY Pr.razonsocial
HAVING AVG(E.cantidad) > (SELECT AVG (E.cantidad)
                            FROM Proveedores as Pr, Entregan as E
                            WHERE Pr.rfc = E.rfc
                            AND Pr.rfc = 'VAGO780901')

--No da resultados porque el proveedor con ese RFC no existe y no puede hacer una comparación con NULL

--10. RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.
--SELECT P.rfc, P.razonSocial, SUM(e.cantidad)
--FROM proveedores as P, proyectos as Pr, Entregan AS E
--WHERE fecha BETWEEN '2000-01-01' AND '2000-12-31'
--AND pr.denominacion = 'Infonavit Durango'
--GROUP by  P.rfc, P.razonSocial
--HAVING SUM(e.cantidad) > (SELECT SUM(e.cantidad)
  --                         FROM proveedores as P, proyectos as Pr, Entregan AS E
    --                       WHERE fecha BETWEEN '2001-01-01' AND '2001-12-31')

SELECT rfc, razonSocial
FROM proveedores
wHERE rfc IN (SELECT E.rfc
              FROM Entregan AS E, proyectos AS Pr
              wHERE E.numero = Pr.numero
              AND Pr.denominacion = 'Infonavit Durango'
              AND E.fecha BETWEEN '2000-01-01' AND '2000-12-31'
              GROUP BY E.rfc
              HAVING SUM(E.cantidad) > (SELECT SUM(E.cantidad)
                                        FROM  Entregan AS E, proyectos AS Pr, proveedores as P
                                        WHERE E.numero = Pr.numero
                                        AND Pr.denominacion = 'Infonavit Durango'
                                        AND E.fecha BETWEEN '2001-01-01' AND '2001-12-31'
                                        )
)
