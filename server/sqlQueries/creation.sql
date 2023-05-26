#create user 'miriam'@'localhost' identified by 'qwerty';
#grant all privileges on * . * to 'miriam'@'localhost';

drop database if exists kanoa;

create database kanoa;

ALTER DATABASE kanoa CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

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
    archivoName VARCHAR(80) NOT NULL,
    licencia VARCHAR(25) NOT NULL,
    idMalwareStrike INT,
    idPerfilProyecto INT,
    downloads INT,
    illDownloads INT
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
    LlaveProyecto VARCHAR(42),
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
    os VARCHAR(40),
    pros VARCHAR(40),
    spPros VARCHAR(40),
    memoryRAM VARCHAR(40),
	display VARCHAR(40),
    vdCard VARCHAR(40),
    spVdCard VARCHAR(40),
    net VARCHAR(40), # yes or no
    spNet VARCHAR(40),
    disc VARCHAR(40),
    spDisc VARCHAR(40),
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

CREATE TABLE Mensajes (
idMensaje INT NOT NULL auto_increment primary KEY,
idUsuario INT NOT NULL,
idProyecto INT NOT NULL,
mensaje VARCHAR(60),
FOREIGN KEY (idUsuario) references Usuario (idUsuario) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (idProyecto) references Proyecto (idProyecto) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE Errores (
idError INT NOT NULL auto_increment PRIMARY KEY,
idUsuario INT NOT NULL,
idProyecto INT NOT NULL,
FOREIGN KEY (idUsuario) references Usuario (idUsuario) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (idProyecto) references Proyecto (idProyecto) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE Bugs(
idBug INT NOT NULL auto_increment PRIMARY KEY,
idUsuario int not null,
titulo VARCHAR(40),
problema VARCHAR(60), 
pasos VARCHAR(60),
resultado VARCHAR(60),
actual VARCHAR(60),
foreign key (idUsuario) references Usuario(idUsuario) on update CASCADE ON DELETE CASCADE
);
use kanoa;
