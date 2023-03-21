use kanoa;
select * from Perfil_Usuario;
select * from Usuario;
#select * from Proyecto;
#select * from Puestos;
#select * from Archivos;
#select * from Puestos;
#select * from MalwareStrikes;
select * from Llave_Usuario;
#describe Usuario;
#describe Proyecto;
#insert into Perfil_Usuario() values();
#insert into Usuario(nombre, correo, idPerfil) values("webos","qwert",1);
#SELECT idPerfil FROM Perfil_Usuario

SELECT idUsuario FROM Usuario WHERE correo = "anon@anon.com"