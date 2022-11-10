const database = require('./mysqlConnection');

module.exports = {
    name: '',
    email: '',
    pass: '',
    publicKeys: [],
    tech: [],
    User : (req) => {
        this.name = req.body.name,
        this.email = req.body.email,
        this.pass = req.pass,
        this.publicKeys = [] // Es necesaria crear una forma de recibir las llaves
        this.tech = [] // Es necesaria crear una forma de recibir las tecnologias
    },
    login : () => { // Modulo para autenticar al usuario
        database.connect();

        database.close();
    },
    register : () => { // metodo para registrar al usuario
        let query = `INSERT INTO Usuario(nombre, correo) VALUES(${this.name}, ${this.email})`
        try {
            database.connect();
            let res = database.execute(query);
            database.close();  
            return res;
        } catch (error) {
            throw error;
        }
    },
    read: (id = null, correo = null, nombre = null) => { // Modulo para obtener la informacion del usuario
        let query;
        if (id =! null) query = `SELECT * FROM Usuario WHERE id = ${id}`
        else if (correo =! null) query = `SELECT * FROM Usuario WHERE correo = ${correo}`
        else if (nombre =! null) query = `SELECT * FROM Usuario WHERE nombre = ${nombre}`
        else query = `SELECT * FROM Usuario`
        try{
            database.connect();
            let res = database.execute(query);
            database.close();
            return res;
        } catch(error) {throw error}
    },
    update: () => { //Modulo para actualizar la informacion del usuario

    },
    delete : () => { //Modulo para eliminar al usuario

    }

};