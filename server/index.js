const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
let User = require('./src/User');
let Project = require('./src/Project');

const app = express();

//app.use(express.static(__dirname + "/public"));
//app.use(cookieParser)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // Poner urlencoded a true permite procesar JSON
/*app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
)*/

//app.use(express.static('../Pagina1.1'))

app.use(session({
    secret: 'gluglunes',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: 60 * 24 * 24
    }
}));

app.get('/homepage', (req, res) => {
    console.log(' ... Homepage Page Request');
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
    } else res.redirect('/login');
});

//              USUARIOS

app.post('/regquest', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(" ... Register Form Request");
    console.log(JSON.stringify(req.headers));

    let nombre = req.body.nombre;
    let correo = req.body.correo;
    let pass = req.body.pass;
    console.log('Petition: Nombre' + nombre);
    let user = new User(nombre, correo, pass);
    let succes = user.register();

    if (succes) {
        console.log(`\tRegistrado: \n Nombre: ${nombre}\n Correo: ${correo}`);
        res.redirect('/login');
    }
    else res.send('<html><h1>Error!</h1></html>');
});


app.post('/logquest', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    if (req.session.auth == true) {
        res.send(true)
        //res.redirect('/');
    }
    else {
        console.log(' ... Login Form Request');
        let user = new User(
            req.body.nombre,
            req.body.correo,
            req.body.pass
        );
        try {
            let auth = user.authenticate().then((authenticated) => {
                console.log('auth:  ' + authenticated);
                if (authenticated) {
                    req.session.idUser = user.id;
                    req.session.email = user.email;
                    req.session.name = user.name;
                    req.session.auth = true;
                    res.send(true)
                    //res.redirect('/home_feed');
                }
                else {
                    res.send(false)
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
});

//              PROYECTOS

app.post('/createProjectreq', (req, res) => {
    console.log(' ... Create Project Request');
    //if (req.session.auth) 
    {
        try {
            let nombre = req.body.nombre;
            let descripcion = req.body.Des;
            //let idUser = req.session.idUser;
            let idUser = 1;
            let newProject = new Project(nombre, descripcion, idUser);
            newProject.create();
            res.send('ok')
        }
        catch (error) {
            console.log('Error: ' + error);
            res.status(400);
            res.send('error')
        }
    }
    /*else
    {
        res.redirect('/login');
    }*/
})

app.get('/myProjectsreq', (req, res) => {
    console.log(' ... Popular Projects request');
    //if(req.session.auth)
    {
        getData = async () => {
            //const idCrea = req.session.idUser;
            const idCrea = 1;
            let myProjects = new Project('', '', 1);
            const data = await myProjects.readMine();
            res.json({ 'projects': data });
        }
        getData();
    }
    /*else
    {
    res.redirect('/login');   
    }*/
});

app.get('/popularProjectreq', (req, res) => {
    console.log(' ... Popular Projects request');
    try {
        execute = async () => {
            let lectorProyectos = new Project();
            const data = await lectorProyectos.readAll();
            res.json({ 'projects': data })
        }
        execute();
    }
    catch (error) {
        console.log('Error proyectos populares: ' + error);
    }
});


//              PRUEBAS

app.get('/testReq', (req, res) => {
    console.log(' ... TEST Project Request');
    res.json({ 'valor': 'webos' })
});

app.post('/checkSession', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(' ... check Session request');
    console.log('Actual Session: ' + req.session.auth);
    if (req.session.auth) {
        console.log('Session: true');
        res.send(true);
    }
    else {
        console.log('Session: false');
        res.send(false);
    }

});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`Server Activo en: http://localhost:${PORT}`);
});