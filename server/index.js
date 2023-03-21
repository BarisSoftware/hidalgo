const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const multer = require("multer");
let User = require("./src/User");
let Project = require("./src/Project");

const app = express();

//app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); // Poner urlencoded a true permite procesar JSON
app.use(cors());
app.use(
  session({
    secret: "gluglunes",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: 60 * 24 * 24 * 100,
    },
  })
);

app.post("/show", (req, res) => {
  res.json({ test: "Hola, Baris!!" });
});

app.get("/show", (req, res) => {
  res.json({ test: "Hola, Baris!!" });
});

app.get("/homepage", (req, res) => {
  console.log(" ... Homepage Page Request");
  if (req.session.auth) {
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home Page</title>
        </head>
        <body>
            <h1>SUP Brotha</h1>
        </body>
        </html>`);
  } else res.redirect("/login");
});

//              USUARIOS

const uploadPicture = multer({ dest: __dirname + "/ProfilePicture" });

app.post("/regquest", uploadPicture.single("propic"), (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(" ... Register Form Request");
  //console.log(JSON.stringify(req.headers));

  let nombre = req.body.nombre;
  let username = req.body.username;
  let correo = req.body.correo;
  let pass = req.body.pass;
  let apellido = req.body.lastName;
  let user = new User(nombre, correo, pass);
  user.username = username;
  user.apellido = apellido;
  user.email = correo;
  try {
    user.profilePictureTitle = req.file.filename;
  } catch (error) {
    user.profilePictureTitle = undefined;
  }
  console.log("Petition: Nombre" + nombre);
  //user.profilePictureTitle = proPicName;
  if (req.body.publickey.length > 0) {
    user.publicKeys = [req.body.publickey];
  }
  let succes = user.register(correo);
  if (succes) {
    console.log(`\tRegistrado: \n Nombre: ${nombre}\n Correo: ${correo}`);
    //res.json({ 'result': true })
    res.redirect("/login");
  } else res.redirect("/registro");
});

app.post("/test2", (req, res) => {
  let us = new User();
  us.email = "q@q.q";
  res.json({ res: us.getIdUsuario(), holis: "webos" });
});

app.post("/logquest", (req, res) => {
  if (req.session.auth == true) {
    res.redirect("/");
  } else {
    console.log(" ... Login Form Request");
    let user = new User(req.body.nombre, req.body.correo, req.body.pass);
    try {
      let auth = user.authenticate().then((authenticated) => {
        console.log("auth:  " + authenticated);
        if (authenticated.auth) {
          req.session.idUser = authenticated.id;
          req.session.email = authenticated.email;
          req.session.name = authenticated.name;
          req.session.auth = authenticated.auth;
          //res.send(true)
          res.redirect("/homeFeed");
        } else {
          //res.send(false)
          res.redirect("/login");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
});

//              PROYECTOS
const upload = multer({ dest: __dirname + "/OpenProyects" });

app.post("/testProyect", upload.single("zipfile"), (req, res) => {
  console.log(" ... Test Proyect Req");
  res.json({
    ProyectNAme: req.body.nombre,
    FileX: req.file,
    fileName: req.file.filename,
  });
});

app.post("/createProjectreq", (req, res) => {
  console.log(" ... Create Project Request");
  if (req.session.auth) {
    try {
      let idUser = req.session.idUser;
      let nombre = req.body.nombre;
      let descripcion = req.body.descripcion;
      let licencia = req.body.licencia;
      let newProject = new Project(nombre, descripcion, idUser, licencia);
      newProject.create();
      res.redirect("/homeFeed");
    } catch (error) {
      console.log("Error: " + error);
      res.status(400);
      res.send("error");
    }
  } else {
    res.redirect("/login");
  }
});

app.get("/myProjectsreq", (req, res) => {
  console.log(" ... Popular Projects request");
  if (req.session.auth) {
    getData = async () => {
      const idCrea = req.session.idUser;
      //const idCrea = 1;
      let myProjects = new Project("", "", 1);
      const data = await myProjects.readMine();
      res.json({ projects: data });
    };
    getData();
  } else {
    res.redirect("/login");
  }
});

app.get("/popularProjectreq", (req, res) => {
  console.log(" ... Popular Projects request");
  try {
    execute = async () => {
      let lectorProyectos = new Project();
      const data = await lectorProyectos.readAll();
      res.json({ projects: data });
    };
    execute();
  } catch (error) {
    console.log("Error proyectos populares: " + error);
  }
});

//              PRUEBAS

app.get("/testReq", (req, res) => {
  console.log(" ... TEST Project Request");
  res.json({ valor: "webos" });
});

app.post("/checkSession", (req, res) => {
  console.log(" ... Check Session Request");
  if (req.session.auth) {
    console.log("TRUE");
    res.json({
      auth: true,
      name: req.session.name,
      email: req.session.email,
      id: req.session.idUser,
    });
  } else {
    console.log("FALSE");
    res.json({ auth: false });
  }
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server Activo en: http://localhost:${PORT}`);
});
