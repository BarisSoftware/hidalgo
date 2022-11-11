const express = require('express');
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
    const mysql = require('mysql');
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'node-connector',
        password: 'n0m3l0123',
        database: 'kanoa'
    });

    connection.connect((error)=>{
        if(error) {console.log('Error: ' + error); return 0}
        let query = `INSERT INTO Usuario(nombre, correo) VALUES('juanpablo', 'emial@ds.com');`
        connection.query(query, (error) => {
            if (error) console.log(error);
        });

        connection.end((error)=>{
            if(error) console.log(error);
        });

    })
    /*let user = require('./src/User');
    user.User(req.body.nombre, req.body.correo, req.body.pass);
    let st = user.register();
    //let st = user.show();
    console.log(st);
    res.json({response: st});
    */
});

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server Activo en: http://localhost:${port}`);
});