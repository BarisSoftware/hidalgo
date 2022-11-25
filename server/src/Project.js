const DataBase = require('./DataBase');

class Project {
    id;
    nombre;
    descripcion;
    idCreador;
    exists = false;

    constructor(nombre, descripcion, idCreador) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.idCreador = idCreador;
    }

    create = () => {
        let query = `INSERT INTO Proyecto(nombreProyecto, descripcionProyecto) VALUES(${this.nombre}, ${this.descripcion})`;
        console.log('Query: ' + query);
        try {
            let db = new DataBase();
            db.fquery(query);
            this.exists = true;
            this.read()
            query = `INSERT INTO Puestos(idProyecto, idUsuario, puesto) VALUES(${this.id}, ${this.idCreador}, 0)`;
            db.fquery(query);
            db.end();
        } catch (error) {
            console.log('Error Create Project: ' + error);
        }
    }

    read = async () => {
        let query = `SELECT * FROM Proyecto WHERE nombreProyecto = ${this.nombre}`;
        console.log('Query: ' + query);
        try {
            let db = new DataBase();
            await db.execute2(query).then((results) => {
                console.log(results);
                results = results[0][0];
                if (results) {
                    this.id = results.idProyecto;
                    this.nombre = results.nombreProyecto;
                    this.descripcion = results.descripcionProyecto;
                }
            });
            db.end()
        } catch (error) {
            console.log('Error Create Project: ' + error);
        }
    }

    delete = () => {


    }

    update = () => {

    }

}