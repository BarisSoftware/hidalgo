const DataBase = require("./DataBase");

class Project {
  id;
  nombre;
  nombreArchivo;
  nombreOriginalArchivo;
  descripcion;
  idCreador;
  licencia;
  publicKeys = [];
  firstPublicKey;
  proyectos = []; //lista con todos los proyectos, no es necesaria declararla siempre, solo en readAll
  admins_ids = [];
  colabs_ids = [];
  category; // categoria en caso de que el proyecto sea uno solo
  categories = [
    "SDK",
    "IDE",
    "npm", // js
    "pip", // python
    "Científico",
    "Videojuego",
    "Editor de Código",
    "Educativo",
    "Editor Gráfico",
    "Oficina",
    "Otro",
  ];
  //https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/System-requirements-for-AutoCAD-2024-including-Specialized-Toolsets.html
  sys_reqs = {
    os: "",
    pros: "",
    spPros: "",
    memoryRAM: "",
    display_resolution: "", //resolucion de pantalla
    vdCard: "",
    spVdCard: "",
    net: "",
    spNet: "",
    disc: "",
    spDisc: "",
  };
  debug = false;

  constructor(nombre = "", descripcion = "", idCreador = 0, licencia = "") {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.idCreador = idCreador;
    this.licencia = licencia;
  }

  describe = () => {
    let i = 0;
    for (const att in this) {
      if (i >= 15) break;
      i++;
      if (typeof att == "object") {
        for (const subAtt in att) {
          console.log(subAtt + " : " + this[att][subAtt]);
        }
      }
      console.log(att + " : " + this[att]);
    }
  };

  setAdmin = async (idUsuario) => {
    let query = `INSERT INTO Puestos(idProyecto, idUsuario, puesto) VALUES(${this.id}, ${idUsuario}, 0)`;

    let db = new DataBase();
    try {
      console.log("query setAdmin: " + query);
      await db.execute2(query);
      return true;
    } catch (error) {
      console.log("F Up in setAdmin: " + error);
    }
  };

  create = async () => {
    let query = `INSERT INTO Proyecto(nombreProyecto, descripcionProyecto,archivoName, licencia) VALUES('${this.nombre}', '${this.descripcion}', '${this.nombreArchivo}' , '${this.licencia}');`;
    console.log("Query create: " + query);
    try {
      let db = new DataBase();
      await db.execute2(query);
      await this.getProyectId();
      await this.setAdmin(this.idCreador);
      await this.registerPublicKey();
      await this.setCategory(this.category);
      await this.set_sys_reqs();

      try {
        let archiveQuery = `INSERT INTO Archivos(idProyecto, archivoName, archivoOriginalName) VALUES(${this.id}, '${this.nombreArchivo}', '${this.nombreOriginalArchivo}' )`;
        await db.execute2(archiveQuery);
        console.log(" ... finished creating proyect");
        db.end();
      } catch (error) {
        console.log("Error  Archive: " + error);
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
      let data = await db.execute2(query);
      let idProyecto = data[0][0].idProyecto;
      console.log();
      this.id = idProyecto;
      db.end();
      return idProyecto;
    } catch (error) {
      console.log("F Up in getidproyecto: " + error);
      db.end();
      return false;
    }
  };

  registerPublicKey = async () => {
    let db = new DataBase();

    try {
      if (this.id != null || this.id != undefined) {
        for (let i = 0; i < this.publicKeys.length; i++) {
          let query = `INSERT INTO Llave_Proyecto (idProyecto, LlaveProyecto) VALUES(${this.id}, "${this.publicKeys[i]}")`;
          console.log("Registering llave de proyecto: " + query);
          console.log("Registering llave de proyecto: " + this.publicKeys[i]);
          await db.execute2(query);
        }
      }
    } catch (error) {
      console.log("F Up in insert into llave proyecto: " + error);
    }
    db.end();
  };

  getFirstPublicKey = async (proyectId) => {
    let db = new DataBase();
    let query = `SELECT * FROM Llave_Proyecto WHERE idProyecto = ${proyectId}`;

    try {
      console.log("Query getFirstPublicKey: " + query);
      await db
        .execute2(query)
        .then((result) => {
          this.firstPublicKey = result[0][0].LlaveProyecto;
        })
        .catch((err) => {
          console.log("F Up in getFirtPublicKey" + err);
        });
    } catch (err) {
      console.log("F Up in getFirtPublicKey" + err);
    }
    db.end();
    return this.firstPublicKey;
  };

  setCategory = async (category, id = this.id) => {
    if (
      category >= this.categories.length ||
      category == null ||
      category == undefined
    ) {
      category = this.categories.length - 1;
    }

    let query = `INSERT INTO Categoria(idProyecto, category) VALUES(${id}, "${category}")`;
    let db = new DataBase();
    try {
      console.log("Query setCategory: " + query);
      await db.execute2(query);
    } catch (error) {
      console.log("F Up in setCategory: " + error);
    }
    db.end();
  };

  set_sys_reqs = async () => {
    let db = new DataBase();
    let valuesString = "";
    let last = this.set_sys_reqs[this.set_sys_reqs.length - 1];
    let i = 0;
    let value;
    for (const requirement in this.sys_reqs) {
      // if (typeof this.sys_reqs[requirement] == "number") {
      //   valuesString += `${this.sys_reqs[requirement]}, `;
      // } else {
      //   valuesString += `"${this.sys_reqs[requirement]}", `;
      // }
      value = this.sys_reqs[requirement];
      valuesString += `"${this.sys_reqs[requirement]}"`;
      if ((i = !this.set_sys_reqs.length - 1)) valuesString += ", ";
      i++;
    }
    let query = `INSERT INTO Sys_Reqs VALUES ( ${this.id}, ${valuesString})`;

    try {
      console.log("Query setSysReqs: " + query);
      await db.execute2(query);
    } catch (error) {
      console.log("F Up in setSysReqs: " + error);
    }

    db.end();
  };

  read = async (name = "", category = "") => {
    // read function con busqueda personalizada

    let query = "";
    if (name != "" && category != "") {
      query = `SELECT * FROM Proyecto WHERE nombreProyecto = '${name}';`;
    } else if (name != "") {
      query = `SELECT * FROM Proyecto WHERE nombreProyecto = '${name}';`;
    } else if (category == "") {
      query = `SELECT * FROM Proyecto WHERE nombreProyecto = '${name}';`;
    } else {
      query = `SELECT * FROM Proyecto';`;
    }

    console.log("Query read: " + query);
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
        if (this.debug) {
          console.log("Results:");
          console.log(results);
        }

        this.proyectos = results[0];
      });
      db.end();
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
        if (this.debug) {
          console.log("Results getidProyect: ");
          console.log(results);
        }
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

  getFileName = async () => {
    let db = new DataBase();

    let query = `SELECT archivoName FROM Archivos WHERE idProyecto = ${this.id}`;
    try {
      console.log("Query getFileNAme: " + query);
      await db
        .execute2(query)
        .then((result) => {
          this.nombreArchivo = result[0][0].archivoName;
          console.log("Gotted: " + this.nombreArchivo);
        })
        .catch((err) => {
          console.log("F Up in getFileName: " + err);
        });
    } catch (error) {
      console.log("F Up in getFileName: " + error);
    }

    db.end();
    return this.nombreArchivo;
  };
}

module.exports = Project;
