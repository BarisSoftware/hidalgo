const database = require('')

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

    },
    register : () => { // metodo para registrar al usuario
      
        
    },
    read: () => { // Modulo para obtener la informacion del usuario

    },
    update: () => { //Modulo para actualizar la informacion del usuario

    },
    delete : () => { //Modulo para eliminar al usuario

    }

};