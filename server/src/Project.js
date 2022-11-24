import axios from "axios";
import DataBase from "./DataBase";

class Project{
    id;
    nombre;
    descripcion;
    idCreador;
    
    constructor(nombre, descripcion, idCreador){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.idCreador = idCreador;
    }

    create = () => {
        let query = `INSERT INTO Proyecto(nombreProyecto, descripcionProyecto) VALUES(${this.nombre}, ${this.descripcion})`;

        try {
            let db = new DataBase();
            db.fquery(query)
        } catch (error) {
            
        }
    }

    delete = () => {

    }

    read = () =>{

    }

    update = () => {

    }

}