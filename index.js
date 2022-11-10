const express = require('express');
const bodyParser  = require('body-parser');
const app = express();

//No se si sea apropiado hacer esto
//app.use(express.json());
////
//Hacer disponible algun archivo    

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true})); // Poner urlencoded a true permite procesar JSON

app.post('/test', (req, res) =>{
    console.log("POST PROCESSED");
    console.log(req.body.nombre);
    res.json({
        tittle:"Form Response",
        status: "Ok", 
        nombre: req.body.nombre,
    });
    //res.redirect("https://github.com/");
});

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server Activo en: http://localhost:${port}`);
});