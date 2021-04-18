--Ejercicio 1

--Elimina
drop TABLE entregan
drop TABLE materiales
drop TABLE proyectos
drop TABLE Proveedores

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Materiales')
CREATE TABLE Materiales
(
  Clave numeric(5) not null,
  Descripcion varchar(50),
  Costo numeric (8,2)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proveedores')
CREATE TABLE Proveedores
(
  RFC char(13) not null,
  RazonSocial varchar(50)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proyectos')
CREATE TABLE Proyectos
(
  Numero numeric(5) not null,
  Denominacion varchar(50)
)
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Entregan')

CREATE TABLE Entregan
(
  Clave numeric(5) not null,
  RFC char(13) not null,
  Numero numeric(5) not null,
  Fecha DateTime not null,
  Cantidad numeric (8,2)
)

BULK INSERT a01705220.a01705220.[Materiales]
   FROM 'e:\wwwroot\rcortese\materiales.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

BULK INSERT a01705220.a01705220.[Proyectos]
  FROM 'e:\wwwroot\rcortese\Proyectos.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

BULK INSERT a01705220.a01705220.[Proveedores]
  FROM 'e:\wwwroot\rcortese\Proveedores.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

SET DATEFORMAT dmy -- especificar formato de la fecha

BULK INSERT a01705220.a01705220.[Entregan]
  FROM 'e:\wwwroot\rcortese\Entregan.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

select * from sysobjects where xtype='U'

--Ejercicio 2

INSERT INTO Materiales values(1000, 'xxx', 1000)
Delete from Materiales where Clave = 1000 and Costo = 1000

-- Clave como llave 
ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave)
sp_helpconstraint materiales

ALTER TABLE Proveedores add constraint llaveProveedores PRIMARY KEY (RFC)
sp_helpconstraint proveedores

ALTER TABLE Proyectos add constraint llaveProyectos PRIMARY KEY (Numero)
sp_helpconstraint proyectos

ALTER TABLE Entregan add constraint llaveEntregan PRIMARY KEY (Clave,RFC,Numero,Fecha)
sp_helpconstraint entregan

ALTER TABLE tableName drop constraint ConstraintName

--Ejercicio 3
 
SELECT * FROM Materiales
SELECT * FROM Proyectos
SELECT * FROM Proveedores
SELECT * FROM Entregan

--Inserta
INSERT INTO entregan values (0, 'xxx', 0, '1-jan-02', 0) ;
Delete from Entregan where Clave = 0
ALTER TABLE entregan add constraint cfentreganclave
foreign key (clave) references materiales(clave);

ALTER TABLE entregan add constraint cfentreganrfc
foreign key (RFC) references proveedores(RFC);

ALTER TABLE entregan add constraint cfentregannumero
foreign key (numero) references proyectos(numero);

sp_helpconstraint entregan

--Ejercicio 4
INSERT INTO entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0);
Delete from Entregan where Clave = 1000
ALTER TABLE entregan add constraint cantidad check (cantidad > 0) ;


