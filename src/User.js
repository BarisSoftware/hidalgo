let DataBase = require('./DataBase');
const crypto = require('crypto');

class User {
    id = undefined;
    name = '';
    email = '';
    pass = '';
    publicKeys = [];
    tech = [];
    validated = false;
    constructor (nombre, correo, pass, publicKeys = [], tech = []) {
        this.name = nombre,
        this.email = correo,
        this.pass = pass,
        this.publicKeys = publicKeys // Es necesaria crear una forma de recibir las llaves
        this.tech = tech // Es necesaria crear una forma de recibir las tecnologias
    };

    show = () => {
        let sho = `Id: ${this.id}\nNombre: ${this.name} \nEmail: ${this.email}\n
        Validated: ${this.validated}`
        return sho;
    };

    register = () => { // metodo para registrar al usuario
        const hash = this.getPassHash();
        //console.log('\n\nHASH TYPE: ' + typeof(hash) + '\n\n');
        
        let query = `INSERT INTO Usuario(nombre, correo, passHash) VALUES('${this.name}', '${this.email}', UNHEX('${hash}'));`;
        try {
            let db = new DataBase();
            console.log('Query: ' + query);
            db.fquery(query);
            db.end();
            return true;
        }
         catch (error) {
            console.log(error);
            return false;
            //throw error;
        }
    };
    read = (id = null, correo = null, nombre = null) => { // Modulo para obtener la informacion del usuario
        let query;
        if (id =! null) query = `SELECT * FROM Usuario WHERE id = ${id}`
        else if (correo =! null) query = `SELECT * FROM Usuario WHERE correo = ${correo}`
        else if (nombre =! null) query = `SELECT * FROM Usuario WHERE nombre = ${nombre}`
        else query = `SELECT * FROM Usuario`
        try{
        } catch(error) {throw error}
    };
    update= () => { //Modulo para actualizar la informacion del usuario

    };
    delete = () => { //Modulo para eliminar al usuario

    };

    getPassHash = () => {
        const hasher256 = crypto.createHmac("sha256", this.email);
        const hash = hasher256.update(this.pass).digest('hex');
        return hash;
    }
};

module.exports = User;

//export default User; // ES6 modules.export = User