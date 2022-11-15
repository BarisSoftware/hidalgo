let DataBase = require('./DataBase');
const crypto = require('crypto');

class User {
    id = undefined;
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
        let valid = this.auth();
        if (valid){
            let query = `SELECT idUsuario WHERE correo = ${this.email}`;
            console.log('Query: ' + query);
            try{
                let db = new DataBase();
                db.execute(query, (error, data) => {
                    if(error) console.log(error);
                    this.id = data[0].idUsuario;
                    console.log('Id: ' + data[0].idUsuario);
                    db.end();
                    return true
                });
                db.end();
                return true;
            } catch (error){
                console.log(error);
                return false;
            }
        }
    };

    register = () => { // metodo para registrar al usuario
        const hash = this.getPassHash();
        //console.log('\n\nHASH TYPE: ' + typeof(hash) + '\n\n');
        
        let query = `INSERT INTO Usuario(nombre, correo, passHash) VALUES('${this.name}', '${this.email}', UNHEX('${hash}'));`;
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

    auth = () => { //verificar que las credenciales sean correctas y colocar el id
        let query = `SELECT HEX(passHash) FROM Usuario where correo = '${this.email}'`;
        try{
            let db = new DataBase();
            console.log('Query: ' + query);

            db.execute(query, (error, data) => {
                if(error){
                    console.log('Error Auth: ' + error);
                    return false;
                }

                let hash = this.getPassHash();
                let sus_passHash = data[0]['HEX(passHash)'];

                console.log('HEX pass: ' + sus_passHash);

                if(hash == sus_passHash){
                    db.end();
                    console.log('Good auth');
                    return true;
                }else{
                    console.log('bad auth');
                    return false;

                }

            });
            db.end();
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getPassHash = () => {
        const hasher256 = crypto.createHmac("sha256", this.email);
        const hash = hasher256.update(this.pass).digest('hex');
        return hash;
    }
};

module.exports = User;

//export default User; // ES6 modules.export = User