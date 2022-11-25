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

    create = async () => {
        let query = `INSERT INTO Proyecto(nombreProyecto, descripcionProyecto) VALUES('${this.nombre}', '${this.descripcion}');`;
        console.log('Query: ' + query);
        try {
            let db = new DataBase();
            await db.execute2(query);
            this.exists = true;
            await this.read()
            try {
                let diff = `INSERT INTO Puestos(idProyecto, idUsuario, puesto) VALUES(${this.id}, ${this.idCreador}, 0);`;
                console.log('Query diff: ' + diff);
                db.fquery(diff);
                db.end();
            } catch (error) {
                console.log('Error Puestos: ' + error);
            }
        } catch (error) {
            console.log('Error Create Project: ' + error);
        }
    }

    read = async () => {
        let query = `SELECT * FROM Proyecto WHERE nombreProyecto = '${this.nombre}';`;
        console.log('Query: ' + query);
        try {
            let db = new DataBase();
            await db.execute2(query).then((results) => {
                console.log('ATENCION A RESFGDSFSD');
                console.log(results);
                results = results[0][0];
                if (results) {
                    this.id = results.idProyecto;
                    this.nombre = results.nombreProyecto;
                    this.descripcion = results.descripcionProyecto;
                    console.log('ID' + this.id);
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

module.exports = Project;