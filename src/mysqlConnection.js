const mysql = require('mysql');

module.exports = {
    connection : null,
    initiate: () => {
        this.connection = mysql.createConnection(
            {
                host: 'localhost',
                user: 'node-connector',
                password: 'n0m3l0123',
                database: 'kanoa'
            })
    },
    connect: () => {
        this.connection.connect((error) => {
            if (error) {
                console.error(`Error: ${error}`)
                throw `Error: ${error}`;
            }
            console.log('Fine connection');
        });
    },
    close : () => {
        this.connection.end((error)=>{
            if(error){
                console.error(`Error: ${error}`);
                throw console.error(`Error: ${error}`);
            }
            console.log('Closed connection'); // OR throw error
        });
    },
    execute : (query) => {
        if(query == "" || query == null){
            throw 'Error: query no puede ser nulo o vacío'
        }
        this.connection.query(query, (error, result) => {
            if(error) throw `Error: ${error}`;
            console.log(`MySQL operation: ${result}`);
            return result;
        });
    },
    query: (query) => {
    connection = mysql.createConnection({
                    host: 'localhost',
                    user: 'node-connector',
                    password: 'n0m3l0123',
                    database: 'kanoa'
                });
    connection.connect((error) => {
                    console.log('Fine connection desde query');
                    let sql = mysql.format('INSERT INTO Usuario(nombre, correo) VALUES("juan pablo" , "qwertyuiokjhgfd" );');
                    connection.query(sql, (error, result) => {
                    console.log(`MySQL operation: ${result}`);
                    return result;
                });
            });
        connection.end((error)=>{
                console.log('Closed connection'); // OR throw error
            })
}
};