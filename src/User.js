let DataBase = require('./DataBase');

class User {
    name = '';
    email = '';
    pass = '';
    publicKeys = [];
    tech = [];
    constructor (nombre, correo, pass, publicKeys = [], tech = []) {
        this.name = nombre,
        this.email = correo,
        this.pass = pass,
        this.publicKeys = publicKeys // Es necesaria crear una forma de recibir las llaves
        this.tech = tech // Es necesaria crear una forma de recibir las tecnologias
    };

    show = () => {
        let sho = this.name + ' ' + this.email;
        return sho;
    };

    login = () => { // Modulo para autenticar al usuario
        database.connect();

        database.close();
    };
    register = () => { // metodo para registrar al usuario
        let query = `INSERT INTO Usuario(nombre, correo) VALUES('${this.name}', '${this.email}');`
        try {
            let db = new DataBase();
            console.log('Query: ' + query);
            db.query(query);
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
};

module.exports = User;

//export default User; // ES6 modules.export = User