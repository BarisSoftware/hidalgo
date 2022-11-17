mysql = require('mysql');

class DataBase{

    mysql = require('mysql')

    connectionJson =  {
        host: 'localhost',
        user: 'node-connector',
        password: 'n0m3l0123',
        database: 'kanoa'
    };
    
    constructor() {
        this.connection = mysql.createConnection(this.connectionJson);
    }

    init = () => {
        this.connection.connect((error) => {
            if(error) console.log('Error en connect: ' + error);
            console.log(' ... Conexion iniciada');
        });
    };

    fquery = (sqlQuery) => {
        let queryResponse = 0;
        this.connection.query(sqlQuery, (error, data) => {
            if(error) console.log('Error en query: ' + error);
            console.log(data);
        });
    };

    /*execute = (sqlQuery, toExecute) => {
        this.connection.query(sqlQuery, (error, data) => {
            if (error) {
                console.log('Error execute' + error);
            }
            console.log(data);
            toExecute(data);
        });
    }*/

    execute = (sqlQuery, callback) => {
        this.connection.query(sqlQuery, (error, data)=>{
            if(error) console.log('Execute Error: ' + error);
            console.log('Data: + \n');
            console.log(data);
            return callback(data);
        })
    }

    

    end = () => {
        this.connection.end((error) => {
            if(error) console.log('Error en terminar conexion: ' + error);
        })
    }

    getUsers = () => {
        let qwerty = [];
        const mysql = require('mysql');
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'node-connector',
            password: 'n0m3l0123',
            database: 'kanoa'
        });

        connection.connect((error)=>{
            if(error) {console.log('Error: ' + error); return 0}
            //let query = `INSERT INTO Usuario(nombre, correo) VALUES('newafdsdfds', 'newqwelsda@ds.com');`
            let query = 'SELECT * FROM Usuario';
            connection.query(query, (error, data) => {
                if (error) console.log(error);
                console.log('Data: \n');
                console.log(data);
            });

            connection.end((error)=>{
                if(error) console.log(error);
            });
        });
        return qwerty;
    }
}

module.exports = DataBase;