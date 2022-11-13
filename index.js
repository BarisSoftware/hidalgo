const express = require('express');
let DataBase = require('./src/DataBase');
const bodyParser  = require('body-parser');
const { register } = require('./src/User');
const { connection, query } = require('./src/mysqlConnection');
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:true})); // Poner urlencoded a true permite procesar JSON

app.get('/', (req, res) => {
    res.send('<a href="/register">Register</a>')
});

app.post('/test', (req, res) =>{
    console.log(" ... Test Form Request");
    res.json({
        tittle:"Form Response",
        status: "Ok", 
        nombre: req.body.nombre,
    });
    //res.redirect("https://github.com/");
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

app.post('/regquest', (req, res) => {
    console.log(" ... Register Form Request");
    let db = new DataBase();
    let queryRes = db.query('SELECT * FROM Usuario');
    res.json({"response" : queryRes})
});

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server Activo en: http://localhost:${port}`);
});