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

    authenticate = async () => {
        let query = `SELECT idUsuario, HEX(passHash), nombre FROM Usuario where correo = '${this.email}'`;
        let db = new DataBase();
        const valid = await db.execute2(query).then((results) => {
            console.log(results);
            let hash = this.getPassHash().toLowerCase();
            let hashDB = results[0][0]['HEX(passHash)'].toLowerCase();
            console.log(hash + ' vs ' + hashDB);
            if(results == null){
                console.log('No matches');
                this.validated = false;
            } else{
                if(hash == hashDB){
                    console.log('Good Auth');
                    this.validated = true;
                    this.id = results[0].idUsuario;
                    this.name = results[0].nombre;
                }else{
                console.log('Bad Auth');
                this.validated = false;
                }
            }
        });
        return this.validated;
    }

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