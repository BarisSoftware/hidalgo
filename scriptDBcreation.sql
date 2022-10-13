drop database if exists kanoa;

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

create table Direccion(
idDireccion int primary key auto_increment,
idProyecto int not null,
sitioweb varchar(60),
archivos longblob,
version varchar(10),
archivosHash binary(8),
malwareStrikes int,
foreign key (idProyecto) references Proyectos(idProyecto) on update cascade on delete cascade
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
    llave binary(255)
);

create table Creadores(
    idCreacion int  primary key auto_increment,
    idUsuario int not null,
    idProyecto int not null,
    foreign key (idUsuario) references Usuarios(idUsuario) on update cascade on delete cascade,
    foreign key (idProyecto) references Proyectos(idProyecto) on update cascade on delete cascade
);

create table Administradores(
	idAdministracion int primary key auto_increment,
    idUsuario int not null,
    idProyecto int not null,
    foreign key (idUsuario) references Usuarios(idUsuario) on update cascade on delete cascade,
    foreign key (idProyecto) references Proyectos(idProyecto) on update cascade on delete cascade
);

create table Colaboradores(
	idAdministracion int primary key auto_increment,
    idUsuario int not null,
    idProyecto int not null,
    foreign key (idUsuario) references Usuarios(idUsuario) on update cascade on delete cascade,
    foreign key (idProyecto) references Proyectos(idProyecto) on update cascade on delete cascade
);
create table Seguidores(
	idAdministracion int primary key auto_increment,
    idUsuario int not null,
    idProyecto int not null,
    foreign key (idUsuario) references Usuarios(idUsuario) on update cascade on delete cascade,
    foreign key (idProyecto) references Proyectos(idProyecto) on update cascade on delete cascade
);