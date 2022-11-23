const axios = require('axios');

axios.get('http://localhost:2000/testReq').then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});