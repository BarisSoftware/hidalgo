const mysql = require('mysql');

module.exports = {
    connection: mysql.createConnection(
        {
            host: 'localhost',
            user: 'miriam',
            password: 'qwerty',
            database: 'kanoa'
        }),
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
    }
};


    

