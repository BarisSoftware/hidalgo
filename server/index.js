const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
let User = require("./src/User");
let Project = require("./src/Project");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
//app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Poner urlencoded a true permite procesar JSON
app.use(cors(corsOptions));
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

app.use("/static", express.static(path.join(__dirname, "OpenProyects")));

app.post("/show", (req, res) => {
  let data = req.body.dato;
  res.json({ test: "Hola, Baris!!", dato: data });
});

app.get("/show", (req, res) => {
  let data = req.body.dato;
  res.json({ test: "Hola, Baris!!", dato: data });
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
  let succes = user.asyncRegister();
  //let succes = user.register(correo);
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
      user.authenticate().then((authenticated) => {
        console.log("auth:  " + authenticated);
        if (authenticated.auth) {
          req.session.idUser = authenticated.id;
          req.session.email = authenticated.email;
          req.session.name = authenticated.name;
          req.session.lastName = authenticated.lastName;
          req.session.picProfileName = authenticated.picProfileName;
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

app.post("/adminProReq", (req, res) => {
  console.log(" ... Admin Profile Request");
  let user = new User(
    req.session.name,
    req.session.email,
    "",
    req.session.idUser
  );

  console.log(
    req.session.name + " " + req.session.email + " " + req.session.idUser
  );

  res.json({
    correo: req.session.email,
    userName: req.session.name,
    name: "Juan Pablo",
    lastName: "Moya",
    publicKeys: "0x936a1F1d74F3FA60eE4044488011328f2E68dC88",
    picProfile: "0wq0dwq0dq2wq0d21q1d2qdq01d2q0d12q",
  });
});

app.post("/killsession", (req, res) => {
  console.log(" ... Kill Session Req");
  req.session.destroy();
  req.session = null;
  res.redirect("/login");
});

app.get("/killsession", (req, res) => {
  console.log(" ... Kill Session Req");
  req.session.destroy();
  req.session = null;
  res.redirect("/login");
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

app.post("/createProjectreq", upload.single("zipfile"), (req, res) => {
  console.log(" ... Create Project Request");
  if (req.session.auth) {
    try {
      let newProject = new Project();
      newProject.idCreador = req.session.idUser;
      newProject.nombre = req.body.nombre;
      newProject.descripcion = req.body.descripcion;
      newProject.licencia = req.body.licencia;
      newProject.sys_reqs.os = req.body.os;
      newProject.sys_reqs.memoryRAM = req.body.memory;
      newProject.sys_reqs.vdCard = req.body.v_card;
      newProject.sys_reqs.net = req.body.int_conn;
      newProject.category = req.body.category;

      newProject.nombreArchivo = req.file.filename;
      newProject.nombreArchivoReal = req.file.originalname;

      if (req.body.publickey.length > 0) {
        newProject.publicKeys = [req.body.publickey];
      }

      newProject.describe();
      newProject.create();
      res.redirect("/homeFeed");
    } catch (error) {
      console.log("Error: " + error);
      res.status(400).send("error");
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
      let myProjects = new Project();
      myProjects.idCreador = idCrea;
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

app.get("/firstPublicKey", (req, res) => {
  console.log(" ... First Public Key request");
  try {
    execute = async () => {
      let lectorProyectos = new Project();
      const data = await lectorProyectos.getFirstPublicKey(req.body.idProyecto);
      res.json({ publickey: data });
    };
    execute();
  } catch (error) {
    console.log("Error proyectos populares: " + error);
  }
});

app.post("/downloadProyect", (req, res) => {
  console.log(" ... Dowload Proyect");
  const execute = async () => {
    let proyect = new Project();
    proyect.id = req.body.idProyecto;
    await proyect.getFileName();
    console.log("Downloading ... " + proyect.nombreArchivo);
    res.download(__dirname + "/OpenProyects/" + proyect.nombreArchivo);
  };
  execute();
});

//              MENSAJES

app.post("/sendMessage", (req, res) => {
  console.log(" ... Send Message Request");
  let user = new User();
  user.id = req.session.idUser;
  user.email = req.session.email;
  user.sendMessage(req.body.mensaje, req.body.idProyecto);
  res.send("Mensaje enviado");
});

app.post("/getMessages", (req, res) => {
  console.log(" ... Get Messages Request");
  execute = async () => {
    let user = new User();
    user.id = req.session.idUser;
    const data = await user.getMessages(req.body.idProyecto);
    console.log("Mensajes: " + data);
    res.json({ mensajes: data });
  };

  execute();
});

//              BUG REPORT

app.post("/reportBug", (req, res) => {
  console.log(" ... Get Messages Request");
  console.log(
    "new Bug: " +
      req.body.title +
      "\n" +
      req.body.problema +
      "\n" +
      req.body.resultado +
      "\n" +
      req.body.actual
  );

  let newUser = new User();
  newUser.id = req.session.idUser;
  newUser.reportBug(
    req.body.title,
    req.body.problema,
    req.body.steps,
    req.body.resultado,
    req.body.actual
  );
  res.json({ result: "Bug reportado" });
});

//              PRUEBAS

app.get("/testReq", (req, res) => {
  console.log(" ... TEST Project Request");
  res.json({ valor: "prueba" });
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
      lastName: req.session.lastName,
      picProfileName: req.session.picProfileName,
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
