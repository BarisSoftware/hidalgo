const DataBase = require("./DataBase");

class Project {
  id;
  nombre;
  nombreArchivo;
  nombreOriginalArchivo;
  descripcion;
  idCreador;
  exists = false;
  licencia;
  proyectos = []; //lista con todos los proyectos, no es necesaria declararla siempre, solo en readAll

  constructor(nombre = "", descripcion = "", idCreador = 0, licencia = "") {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.idCreador = idCreador;
    this.licencia = licencia;
  }

  describe = () => {
    console.log("Describiendo Poyecto");
    console.log("Nombre: " + this.nombre);
    console.log("Descripcion: " + this.descripcion);
    console.log("idCreador: " + this.idCreador);
    console.log("licencia: " + this.licencia);
  };

  setAdmin = (idUsuario) => {
    let query = `INSERT INTO Puestos(idProyecto, idUsuario, puesto) VALUES(${idUsuario}, ${this.id}, 0)`;

    let db = new DataBase();
    try {
      db.fquery(query);
      return true;
    } catch (error) {
      console.log("F Up in setAdmin: " + error);
    }
  };

  create = async () => {
    let query = `INSERT INTO Proyecto(nombreProyecto, descripcionProyecto, licencia) VALUES('${this.nombre}', '${this.descripcion}', '${this.licencia}');`;
    console.log("Query: " + query);
    try {
      let db = new DataBase();
      await db.execute2(query);
      this.exists = true;
      await this.read();
      try {
        let diff = `INSERT INTO Puestos(idProyecto, idUsuario, puesto) VALUES(${this.id}, ${this.idCreador}, 0);`;
        console.log("Query diff: " + diff);
        db.fquery(diff);

        let idProyecto = await this.getProyectId();

        let archiveQuery = `INSERT INTO Archivos(idProyecto, archivoName, archivoOriginalName) VALUES(${this.id}, '${this.nombreArchivo}', '${this.nombreOriginalArchivo}' )`;

        try {
          db.fquery(archiveQuery);
          db.end();
          console.log(" ... finished creating proyect");
        } catch (error) {
          console.log("F Up in Archivos: " + error);
        }
        db.end();
      } catch (error) {
        console.log("Error Puestos: " + error);
      }
    } catch (error) {
      console.log("Error Create Project: " + error);
    }
  };

  getProyectId = async () => {
    let query = `SELECT idProyecto FROM Proyecto WHERE nombreProyecto = '${this.nombre}'`;
    console.log("Query getproyectid: " + query);
    let db = new DataBase();
    try {
      let data = await db.execute2();
      let idProyecto = data[0][0].idProyecto;
      this.id = idProyecto;
      console.log();
      db.end();
      return idProyecto;
    } catch (error) {
      console.log("F Up in getidproyecto: " + error);
      db.end();
      return false;
    }
  };

  read = async () => {
    let query = `SELECT * FROM Proyecto WHERE nombreProyecto = '${this.nombre}';`;
    console.log("Query: " + query);
    try {
      let db = new DataBase();
      await db.execute2(query).then((results) => {
        console.log("ATENCION A Resultados de proyectos");
        //console.log(results);
        results = results[0][0];
        if (results) {
          this.id = results.idProyecto;
          this.nombre = results.nombreProyecto;
          this.descripcion = results.descripcionProyecto;
          console.log("ID" + this.id);
        }
      });
      db.end();
    } catch (error) {
      console.log("Error Create Project: " + error);
    }
  };

  readAll = async () => {
    let query = `SELECT * FROM Proyecto;`;
    try {
      let db = new DataBase();
      await db.execute2(query).then((results) => {
        console.log("Results:");
        console.log(results);
        this.proyectos = results[0];
      });
    } catch (error) {
      console.log("Error readAll: " + error);
    }
    return this.proyectos;
  };

  readMine = async () => {
    try {
      let db = new DataBase();
      let query = `SELECT * FROM Puestos WHERE Puesto = 0 AND idUsuario = ${this.idCreador};`;
      let idProyectos = undefined;
      await db.execute2(query).then((results) => {
        console.log(results);
        idProyectos = results[0];
      });

      for (const idObj of idProyectos) {
        let getMyProyect = `SELECT * FROM PROYECTO WHERE idProyecto = ${idObj.idProyecto}`;
        await db.execute2(getMyProyect).then((results) => {
          this.proyectos.push(results[0][0]);
        });
      }
    } catch (error) {
      console.log("Error readAll: " + error);
    }
    return this.proyectos;
  };

  delete = () => {};

  update = () => {};
}

module.exports = Project;
