-- agregarProyecto 
CREATE PROCEDURE `agregarProyecto`(IN `uNumero` INT(8), IN `uDenominacion` VARCHAR(255) CHARSET utf8)
 NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
 INSERT INTO proyectos VALUES (uNumero, uDenominacion)

--eliminarProyecto
CREATE PROCEDURE `eliminarProyecto`(IN `uNumero` INT(8)) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
DELETE FROM proyectos WHERE numero = uNumero

--agregarEntregan
CREATE PROCEDURE `agregarEntregan`(IN `uClave` INT(11), IN `uRfc` VARCHAR(15) CHARSET utf8, IN `uNumero` INT(11), IN `uFecha` DATE, IN `uCantidad` INT(11)) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
INSERT INTO entregan VALUES (uClave, uRfc, uNumero, uFecha, uCantidad)