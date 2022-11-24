async function log() {
    await axios.post('http://localhost:2000/regquest', {
        nombre: 'unknown',
        correo: document.getElementById('correo'),
        pass: document.getElementById('pass')
    });
};
log()
console.log('Enviando');