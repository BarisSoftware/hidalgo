const axios = require('axios');

axios.get('/testReq').then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});