let DataBase = require("./DataBase");
const crypto = require("crypto");
class User {
  id = undefined;
  name = "";
  email = "";
  pass = "";
  idPerfil = undefined;
  publicKeys = [];
  tech = [];
  validated = false;

  constructor(nombre, correo, pass, publicKeys = [], tech = []) {
    (this.name = nombre),
      (this.email = correo),
      (this.pass = pass),
      (this.publicKeys = publicKeys); // Es necesaria crear una forma de recibir las llaves
    this.tech = tech; // Es necesaria crear una forma de recibir las tecnologias
  }

  show = () => {
    let sho = `Id: ${this.id}\nNombre: ${this.name} \nEmail: ${this.email}\n
        Validated: ${this.validated}`;
    return sho;
  };

  register = (emailK) => {
    // metodo para registrar al usuario
    const hash = this.getPassHash();
    //console.log('\n\nHASH TYPE: ' + typeof(hash) + '\n\n');

    //      CREAR PERFIL en tabla

    let createProfilequery = `INSERT INTO Perfil_Usuario() values()`;
    try {
      let db = new DataBase();
      console.log("Profile Query: " + createProfilequery);
      db.fquery(createProfilequery);

      try {
        let getLastProfilequery = `SELECT idPerfil FROM Perfil_Usuario`;

        let profileIds = db.execute2(getLastProfilequery).then((results) => {
          let values = results[0];
          let amountofResults = values.length;
          this.idPerfil = values[amountofResults - 1].idPerfil;

          let query = `INSERT INTO Usuario(nombre, correo, passHash, idPerfil) VALUES('${this.name}', '${this.email}', UNHEX('${hash}'), ${this.idPerfil});`;

          try {
            let db = new DataBase();
            console.log("Query: " + query);
            db.fquery(query);
            db.end();

            this.getIdUsuario(emailK);
            this.registerPublicKey(emailK);

            return true;
          } catch (error) {
            console.log("F Up in insert into usuarios: " + error);
            return false;
          }
        });
      } catch (error) {
        console.log("F Up in lastProfile: " + error);
        return false;
      }
      return true;
    } catch (error) {
      console.log("F Up in create profile: " + error);
      return false;
    }
  };

  getIdUsuario = (emailK) => {
    let query = `SELECT idUsuario FROM Usuario WHERE correo = "${emailK}"`;
    console.log("Query: " + query);
    try {
      let db = new DataBase();
      db.execute2(query).then((result) => {
        try {
          let acu = result[0][0].idUsuario;
          console.log("IdUsers: " + acu);
          this.id = acu;
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

  registerPublicKey = (emailK) => {
    let db = new DataBase();
    this.getIdUsuario(emailK);
    try {
      for (let i = 0; i < this.publicKeys.length; i++) {
        let query = `INSERT INTO Llave_Usuario(idUsuario, llaveUsuario) VALUES(${this.idPerfil}, "${this.publicKeys[i]}")`;
        db.fquery(query);
      }
      db.end();
    } catch (error) {
      console.log("F Up in insert into llave usuario: " + error);
    }
  };

  authenticate = async () => {
    let query = `SELECT idUsuario, HEX(passHash), nombre FROM Usuario where correo = '${this.email}'`;
    let db = new DataBase();
    const valid = await db.execute2(query).then((results) => {
      console.log(results);
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
    });
    return {
      name: this.name,
      email: this.email,
      id: this.id,
      auth: this.validated,
    };
  };

  read = (id = null, correo = null, nombre = null) => {
    // Modulo para obtener la informacion del usuario
    let query;
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
}

module.exports = User;

//export default User; // ES6 modules.export = User
