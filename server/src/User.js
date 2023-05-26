let DataBase = require("./DataBase");
const crypto = require("crypto");
class User {
  id = undefined;
  username = "";
  nombre = "";
  apellido = "";
  email = "";
  pass = "";
  passHash = "";
  profilePictureTitle = "";
  idPerfil = undefined;
  creationTime = "";
  publicKeys = [];
  tech = [];
  validated = false;
  messagingProyect = undefined;
  currentMessages = [];

  constructor(
    nombre = "",
    correo = "",
    pass = "",
    id = "",
    publicKeys = [],
    tech = []
  ) {
    (this.name = nombre),
      (this.email = correo),
      (this.pass = pass),
      (this.id = id),
      (this.publicKeys = publicKeys), // Es necesaria crear una forma de recibir las llaves
      (this.tech = tech); // Es necesaria crear una forma de recibir las tecnologias
  }

  show = () => {
    let sho = `Id: ${this.id}\nNombre: ${this.name} \nEmail: ${this.email}\n
        Validated: ${this.validated}`;
    return sho;
  };

  createProfile = async () => {
    let date = new Date();
    this.creationTime =
      date.toString().substring(0, 24) + ":" + date.getMilliseconds();
    let createProfilequery = `INSERT INTO Perfil_Usuario(fotoPerfilNombre, creation) values('${this.profilePictureTitle}', '${this.creationTime}')`;
    let db = new DataBase();
    try {
      await db.execute2(createProfilequery);
    } catch (error) {
      console.log("F Up in createPRofile: " + error);
    }
    db.end();
  };

  getProfile = async () => {
    let db = new DataBase();
    let getLastProfilequery = `SELECT idPerfil FROM Perfil_Usuario WHERE creation = '${this.creationTime}'`;
    try {
      await db
        .execute2(getLastProfilequery)
        .then((results) => {
          let values = results[0];
          let amountofResults = values.length;
          this.idPerfil = values[amountofResults - 1].idPerfil;
        })
        .catch();
    } catch (error) {
      console.log("F Up in getLastProfile: " + error);
    }
    db.end();
  };

  addUser = async () => {
    let db = new DataBase();
    let query = `INSERT INTO Usuario(userName, nombre, apellido, correo, passHash, idPerfil) VALUES('${this.username}','${this.name}','${this.apellido}', '${this.email}', UNHEX('${this.passHash}'), ${this.idPerfil});`;
    try {
      await db.execute2(query);
    } catch (error) {
      console.log("F Up in addUser: " + error);
    }
  };

  asyncRegister = async () => {
    const hash = this.getPassHash();
    this.passHash = this.getPassHash();
    await this.createProfile();
    await this.getProfile();
    await this.addUser();
    await this.getIdUsuario().then(() => {
      this.registerPublicKey();
    });
  };

  getIdUsuario = async () => {
    let query = `SELECT idUsuario FROM Usuario WHERE correo = "${this.email}"`;
    console.log("\nQuery select idUsario: " + query);
    try {
      let db = new DataBase();
      await db.execute2(query).then((result) => {
        try {
          let acu = result[0][0].idUsuario;
          console.log("IdUsers: " + acu);
          this.id = acu;
          db.end();
          return acu;
          /*console.log("For IdUsW: " + result);
          console.log("For IdUs0: " + Object.keys(result[0][0]));
          console.log("For IdUs1: " + Object.keys(result[1][0]));
          console.log("RESu0: " + result[0][0].idUsuario);
          console.log("RESu0: " + result[1][0]);
          return 2;*/
        } catch (error) {
          console.log("F Up in getIdUSurio: " + error);
          return false;
        }
      });
    } catch (error) {
      console.log("F Up in query getIdUSurio: " + error);
      return false;
    }
  };

  registerPublicKey = () => {
    let db = new DataBase();
    try {
      if (this.idPerfil != null || this.idPerfil != undefined) {
        for (let i = 0; i < this.publicKeys.length; i++) {
          let query = `INSERT INTO Llave_Usuario(idUsuario, llaveUsuario) VALUES(${this.id}, "${this.publicKeys[i]}")`;
          console.log("\nRegistering llave: " + query);
          db.fquery(query);
        }
      }
      db.end();
    } catch (error) {
      db.end();
      console.log("F Up in insert into llave usuario: " + error);
    }
  };

  authenticate = async () => {
    let query = `SELECT idUsuario, HEX(passHash), userName, nombre, apellido, correo FROM Usuario where correo = '${this.email}'`;
    let db = new DataBase();
    const valid = await db
      .execute2(query)
      .then((results) => {
        //console.log(results);
        let hash = this.getPassHash().toLowerCase();
        let hashDB = results[0][0]["HEX(passHash)"].toLowerCase();
        console.log(hash + " vs " + hashDB);
        if (results == null) {
          console.log("No matches");
          this.validated = false;
        } else {
          if (hash == hashDB) {
            console.log("Good Auth");
            this.validated = true;
            this.id = results[0][0].idUsuario;
            this.name = results[0][0].nombre;
          } else {
            console.log("Bad Auth");
            this.validated = false;
          }
        }
      })
      .catch((error) => {
        this.name = null;
        this.email = null;
        this.id = null;
        this.validated = false;
      });
    db.end();
    return {
      name: this.name,
      email: this.email,
      id: this.id,
      auth: this.validated,
    };
  };

  getMyProyects = () => {
    let query = `SELECT (idProyecto, puesto) FROM Puesto WHERE idUsuario = ${this.idPerfil} `;
  };

  read = (id = null, correo = null, nombre = null) => {
    // Modulo para obtener la informacion del usuario
    if ((id = !null)) query = `SELECT * FROM Usuario WHERE id = ${id}`;
    else if ((correo = !null))
      query = `SELECT * FROM Usuario WHERE correo = ${correo}`;
    else if ((nombre = !null))
      query = `SELECT * FROM Usuario WHERE nombre = ${nombre}`;
    else query = `SELECT * FROM Usuario`;
    try {
    } catch (error) {
      throw error;
    }
  };
  update = () => {
    //Modulo para actualizar la informacion del usuario
  };
  delete = () => {
    //Modulo para eliminar al usuario
  };

  getPassHash = () => {
    const hasher256 = crypto.createHmac("sha256", this.email);
    const hash = hasher256.update(this.pass).digest("hex");
    return hash;
  };

  sendMessage = async (mensaje, idProyecto) => {
    let db = new DataBase();
    await this.getIdUsuario();
    let query = `INSERT INTO MENSAJES (idUsuario, idProyecto, mensaje) VALUES (${this.id}, ${idProyecto}, "${mensaje}")`;
    try {
      console.log("Query sendMessage: " + query);
      await db.execute2(query);
    } catch (error) {
      console.log("F Up in sendMessage: " + error);
    }
  };

  getMessages = async (idProyecto) => {
    let db = new DataBase();
    let messages = [];
    let query = `SELECT * FROM Mensajes WHERE idUsuario = ${this.id} AND idProyecto = ${idProyecto}`;
    try {
      console.log("Query getMessages: " + query);
      await db
        .execute2(query)
        .then((result) => {
          this.currentMessages = result[0];
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log("F Up in sendMessage: " + error);
    }

    db.end();
    return this.currentMessages;
    //console.log("Mensajes: " + Object.keys(messages));
  };

  reportBug = async (title, problema, steps, resultado, actual) => {
    let db = new DataBase();

    let query = `INSERT INTO Bugs (idUsuario, titulo, problema, pasos, resultado, actual) VALUES (${this.id}, "${title}", "${problema}", "${steps}", "${resultado}", "${actual}")`;

    try {
      console.log("Query reportBug: " + query);
      await db.execute2(query);
    } catch (error) {
      console.log("F Up in Bug Report: " + error);
    }

    db.end();
  };
}

module.exports = User;

//export default User; // ES6 modules.export = User
