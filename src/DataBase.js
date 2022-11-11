const { connection } = require('./mysqlConnection');
mysql = require('mysql');
class DataBase{
    constructor(){
        connectionJson =  {
            host: 'localhost',
            user: 'node-connector',
            password: 'n0m3l0123',
            database: 'kanoa'
        };
        connection = mysql.createConnection(connectionJson);
    }
    execute = (sqlQuery) => {
        this.connection.connect((error)=>{
            if(error) return 'Error al conectar: ' + error;
            console.log(' ... Conexion a kanoa ');

            let response = this.connection.query(sqlQuery, (error) =>{
                if(error) return 'Error en query: ' + error;
            console.log(' ... Query a kanoa ');
            })
            console.log(response);

            this.connection.end((error) => {
                if (error) return 'Error al cerrar: ' + error;
                console.log(' ... Cerrando conexion');
            });
            return response;
        });
    }
}