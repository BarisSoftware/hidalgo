drop database kanoa;

create database kanoa;

use kanoa;

create table Usuarios(
    idUsuario int primary key auto_increment,
    nombre varchar(45) not null,
    correo varchar(45) not null,
    passHash binary(8) not null
);

create table Proyectos(
    idProyecto int primary key auto_increment,
    nombreProyecto varchar(45) not null,
    descripcion varchar(45) not null
);

create table Perfiles(
	idPerfil int primary key auto_increment,
    tipoPerfil int not null,
    propietarioPerfil int not null,
    profilePicture mediumblob,
    landscapePicture mediumblob
);

create table Llaves(
    idLlave int primary key auto_increment,
    tipoLlave int not null,
    propietarioLLave int not null,
    llave binary(3072)
);

create table Creaciones(
    idCreacion int  primary key auto_increment,
    foreign key idUsuario 
);
