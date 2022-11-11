const express = require('express');
const bodyParser  = require('body-parser');
const app = express();


app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:true})); // Poner urlencoded a true permite procesar JSON

app.post('/test', (req, res) =>{
    console.log(" ... Test Form Request");
    res.json({
        tittle:"Form Response",
        status: "Ok", 
        nombre: req.body.nombre,
    });
    //res.redirect("https://github.com/");
});

app.post('/register', (req, res) => {
    console.log(" ... Register Form Request");
    let user = require('./src/User');
    user.User(req.body.nombre, req.body.correo, req.body.pass);
    let st = user.register();
    //let st = user.show();
    console.log(st);
    res.json({response: st});
    
});

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server Activo en: http://localhost:${port}`);
});