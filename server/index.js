const express = require('express');
const session = require('express-session');
const bodyParser  = require('body-parser');
const { register } = require('./src/User');

let DataBase = require('./src/DataBase');
let User = require('./src/User');

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:true})); // Poner urlencoded a true permite procesar JSON

app.use(session({
    secret: 'gluglunes',
    resave: false,
    saveUninitialized: true,
    //cookie: {secure: true, httpOnly: true}
}));

app.get('/', (req, res) => {
    res.send('<a href="/register">Register</a><br><a href="/login">login</a>')
});

app.post('/test', (req, res) =>{
    console.log(" ... Test Form Request");
    res.json({
        tittle:"Form Response",
        status: "Ok", 
        pass: req.body.nombre,
    });
});

app.get('/register', (req, res)=>{
    console.log(' ... Register Page Request');
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Register</title>
    </head>
    <body>
        <form action="/regquest" method="post">
            <label>Nombre: <input type="text" id="nombre" name="nombre"  placeholder="Nombre"></label>
            <label>Correo: <input type="email" name="correo" id="correo" placeholder="Correo"></label>
            <label>Contraseña: <input type="password" name="pass" id="pass"></label>
            <input type="submit">
        </form>
    </body>
    </html>`);
});

app.get('/login', (req, res) => {
    console.log(' ... Login Page Request');
    res.send(`<!DOCTYPE html>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
    </head>
    <body>
        <form action="/logquest" method="post">
            <label for="correo">Correo: </label>
            <input type="email" name="correo" id="correo">
            <label for="pass">Pass: </label>
            <input type="password" name="pass" id="pass">
            <input type="submit" value="Enviar xd">
        </form>
    </body>
    </html>`);
});

app.get('/homepage', (req, res) => {
    console.log(' ... Homepage Page Request');
    if(req.session.auth){
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

app.post('/regquest', (req, res) => {
    console.log(" ... Register Form Request");
    let nombre = req.body.nombre;
    let correo = req.body.correo;
    let pass = req.body.pass;

    let user = new User(nombre, correo, pass);
    let succes = user.register();

    if (succes){
        console.log(`\tRegistrado: \n Nombre: ${nombre}\n Correo: ${correo}`);
        res.redirect('/login');
    } 
    else res.send('<html><h1>Error!</h1></html>')
});

app.post('/logquest', (req, res) => {
    console.log(' ... Login Form Request');
    let user = new User(
        req.body.nombre,
        req.body.correo,
        req.body.pass
    );
    try{
        let auth = user.authenticate().then((authenticated) => {
            console.log('auth:  ' + authenticated);
            if(authenticated){
                req.session.idUser = user.id;
                req.session.email = user.email;
                req.session.name = user.name;
                req.session.auth = true;
                //res.send('NOICE');
                res.redirect('/homepage');
            }
            else res.send('WTF');
        });
    } catch (error) {
        console.log(error);
    }
});

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server Activo en: http://localhost:${port}`);
});