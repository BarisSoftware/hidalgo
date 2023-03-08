#create user 'miriam'@'localhost' identified by 'qwerty';
#grant all privileges on * . * to 'miriam'@'localhost';
flush privileges;

drop database if exists kanoa;

create database kanoa;

use kanoa;

create table Perfil_Usuario(
idPerfil int primary key auto_increment not null,
fotoPerfil mediumblob,
paisajePerfil mediumblob
);

create table Usuario(
idUsuario int primary key auto_increment not null,
nombre varchar(45) not null,
correo varchar(45) not null unique,
passHash binary(32) not null,
# tech
# publicKeys
idPerfil int,
fotoPerfil mediumblob,
paisajePerfil mediumblob,
foreign key (idPerfil) references Perfil_Usuario(idPerfil) on update cascade on delete cascade
);

create table Llave_Usuario(
idLlaveUsuario int primary key auto_increment not null,
idUsuario int not null,
llaveUsuario binary(33),
foreign key (idUsuario) references Usuario(idUsuario) on update cascade on delete cascade
);

create table Perfil_Proyecto (
idPerfilProyecto int primary key auto_increment not null,
fotoPerfilProyecto mediumblob,
paisajePerfilProyecto mediumblob);

create table MalwareStrikes(
idMalwareStrike int primary key auto_increment not null,
strikes smallint not null);

create table Proyecto (
idProyecto int primary key auto_increment not null,
nombreProyecto varchar(45) not null unique,
descripcionProyecto varchar(45) not null,
licencia varchar(25) not null,
idMalwareStrike int,
idPerfilProyecto int
#foreign key (idPerfilProyecto) references Perfil_Proyecto(idPerfilProyecto) on update cascade on delete cascade,
#foreign key (idMalwareStrike) references MalwareStrikes(idMalwareStrike) on update cascade on delete cascade
);

create table Puestos (
idPuesto int primary key auto_increment not null,
idProyecto int not null,
idUsuario int not null,
puesto smallint not null,
foreign key (idProyecto) references Proyecto(idProyecto) on update cascade on delete cascade,
foreign key (idUsuario) references Usuario(idUsuario) on update cascade on delete cascade);

create table Llave_Proyecto (
idLlaveProyecto int primary key auto_increment not null,
idProyecto int not null,
LlaveProyecto binary(33),
foreign key (idProyecto) references Proyecto (idProyecto) on update cascade on delete cascade
);

create table Archivos (
idArchivos int primary key auto_increment not null,
idProyecto int not null,
archivoHash binary(33) not null,
archivosProyecto longblob not null,
version varchar(15) not null,
foreign key (idProyecto) references Proyecto(idProyecto) on update cascade on delete cascade
);

use kanoa;
select * from Usuario;
select * from Proyecto;
select * from Puestos;


