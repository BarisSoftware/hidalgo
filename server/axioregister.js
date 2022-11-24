const axios = require('axios');

async function registerUser (){
    const response = await axios.post('http://localhost:2000/regquest/', {
        nombre: 'User',
        correo: 'user@user.com',
        pass: '1234'
    });
    return response;
}

let res = registerUser();
console.log(res);