const express = require('express');
const express_session = require('express-session');
const bodyParser  = require('body-parser');
const { register } = require('./src/User');
const { connection, query } = require('./src/mysqlConnection');

let DataBase = require('./src/DataBase');
let User = require('./src/User');

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:true})); // Poner urlencoded a true permite procesar JSON

app.use(express_session({
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
        // login sin metodo en clase
    let query = `SELECT idUsuario, HEX(passHash) FROM Usuario where correo = '${user.email}'`;
    try{
        let db = new DataBase();
        console.log('Query: ' + query);

        db.execute(query, (data) => {
            let hash = user.getPassHash().toLowerCase();
            let sus_passHash = data[0]['HEX(passHash)'].toLowerCase();

            console.log('HEX pass: ' + sus_passHash);
            console.log('pass: ' + hash);

            if(hash == sus_passHash){
                console.log('Good auth');
                user.validated = true;
                user.id = data[0].idUsuario;    
                res.json({'user': user.show()});
            }else{
                console.log('bad auth');
                user.validated = false;
            }
        });
        db.end();
    } catch (error) {
        console.log(error);
    }
});

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server Activo en: http://localhost:${port}`);
});