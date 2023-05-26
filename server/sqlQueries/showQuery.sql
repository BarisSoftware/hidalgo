use kanoa;
SELECT * FROM Perfil_Usuario;
SELECT * FROM Usuario;
select * from Llave_Usuario;
SELECT * FROM Proyecto;
SELECT * FROM Puestos;
SELECT * FROM Archivos;
select * from MalwareStrikes;
select * from Llave_Proyecto;
select * from Categoria;
select * from Mensajes;
select * from Bugs;
SELECT * FROM Mensajes WHERE idUsuario = 1 AND idProyecto = 1;
SELECT archivoName FROM Archivos WHERE idProyecto = 1;
#describe Usuario;
#describe Proyecto;
#insert into Perfil_Usuario() values();
#insert into Usuario(nombre, correo, idPerfil) values("prueba","qwert",1);
#SELECT idPerfil FROM Perfil_Usuario

#SELECT idUsuario FROM Usuario WHERE correo = "anon@anon.com"

#SELECT * FROM Puestos WHERE Puesto = 0 AND idUsuario = 1;

#INSERT INTO Sys_Reqs VALUES ("Windos10", "", "", "6GB", "", "werfbhjkoiuytreds", "", "on", "", "", "" )