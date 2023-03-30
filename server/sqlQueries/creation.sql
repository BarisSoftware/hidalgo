#create user 'miriam'@'localhost' identified by 'qwerty';
#grant all privileges on * . * to 'miriam'@'localhost';
flush privileges;

drop database if exists kanoa;

create database kanoa;

use kanoa;

CREATE TABLE Perfil_Usuario (
    idPerfil INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    fotoPerfilNombre VARCHAR(80),
    fotoPerfil MEDIUMBLOB,
    creation VARCHAR(28) NOT NULL,
    paisajePerfil MEDIUMBLOB
);

CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    userName VARCHAR(45) NOT NULL,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    correo VARCHAR(45) NOT NULL UNIQUE,
    passHash BINARY(32),
    idPerfil INT,
    FOREIGN KEY (idPerfil)
        REFERENCES Perfil_Usuario (idPerfil)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Llave_Usuario (
    idLlaveUsuario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idUsuario INT NOT NULL,
    llaveUsuario VARCHAR(42),
    FOREIGN KEY (idUsuario)
        REFERENCES Usuario (idUsuario)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Perfil_Proyecto (
    idPerfilProyecto INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    fotoPerfilProyecto MEDIUMBLOB,
    paisajePerfilProyecto MEDIUMBLOB
);

CREATE TABLE MalwareStrikes (
    idMalwareStrike INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    strikes SMALLINT NOT NULL
);

CREATE TABLE Proyecto (
    idProyecto INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombreProyecto VARCHAR(45) NOT NULL UNIQUE,
    descripcionProyecto VARCHAR(45) NOT NULL,
    licencia VARCHAR(25) NOT NULL,
    idMalwareStrike INT,
    idPerfilProyecto INT
);

CREATE TABLE Puestos (
    idPuesto INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idProyecto INT NOT NULL,
    idUsuario INT NOT NULL,
    puesto SMALLINT NOT NULL,
    FOREIGN KEY (idProyecto)
        REFERENCES Proyecto (idProyecto)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (idUsuario)
        REFERENCES Usuario (idUsuario)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Llave_Proyecto (
    idLlaveProyecto INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idProyecto INT NOT NULL,
    LlaveProyecto BINARY(33),
    FOREIGN KEY (idProyecto)
        REFERENCES Proyecto (idProyecto)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Archivos (
    idArchivos INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idProyecto INT NOT NULL,
    archivoHash BINARY(33),
    archivoName VARCHAR(80) NOT NULL,
    archivoOriginalName VARCHAR(80) NOT NULL,
    versionA VARCHAR(15),
    FOREIGN KEY (idProyecto)
        REFERENCES Proyecto (idProyecto)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Sys_Reqs (
    idProyecto INT NOT NULL,
    os INT NOT NULL, 
    pros VARCHAR(40),
    spPros INT,
    vdCard VARCHAR(40),
    spVdCard INT,
    net BOOL,
    spNet INT,
    disc VARCHAR(40),
    spDisc INT,
    FOREIGN KEY (idProyecto)
        REFERENCES Proyecto (idProyecto)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Categoria (
    idProyecto INT NOT NULL,
    category INT NOT NULL,
    FOREIGN KEY (idProyecto)
        REFERENCES Proyecto (idProyecto)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Cat_Des (
    category INT NOT NULL,
    des VARCHAR(45)
);

use kanoa;
