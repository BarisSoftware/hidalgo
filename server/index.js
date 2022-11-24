const express = require('express');
const session = require('express-session');
const bodyParser  = require('body-parser');
let User = require('./src/User');

const app = express();

//app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:true})); // Poner urlencoded a true permite procesar JSON

app.use(session({
    secret: 'gluglunes',
    resave: false,
    saveUninitialized: true,
    //cookie: {secure: true, httpOnly: true}
}));

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
    console.log('Petition: Nombre' + nombre );
    let user = new User(nombre, correo, pass);
    let succes = user.register();

    if (succes){
        console.log(`\tRegistrado: \n Nombre: ${nombre}\n Correo: ${correo}`);
        res.redirect('/login');
    } 
    else res.send('<html><h1>Error!</h1></html>')
});

app.post('/logquest', (req, res) => {
    if(req.session.auth == true){
        res.redirect('/');
    }
    else{
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
                    res.redirect('/');
                }
                else res.send('WTF');
            });
    } catch (error) {
        console.log(error);
    }}
});

app.post('/crateProreq', (req, res) =>{
    console.log(' ... Create Project Request');
    res.send('NOICE');
})

app.get('/testReq', (req, res) =>{
    console.log(' ... TEST Project Request');
    res.json({'valor':'webos'})
})

const PORT = process.env.PORT || 2000;

app.listen(PORT, ()=>{
    console.log(`Server Activo en: http://localhost:${PORT}`);
});