/**
 * Se incluyen los servicios para hacer peticiones al servidor (server)
 * También se incluyen métodos para tratar con la sesión
 */

export async function checkSession() {
    const response = await fetch('/checkSession', {method:'POST', credentials:'include', headers:{'Content-Type': 'application/json'}});
    return await response.json();
}

export async function login() {
    const response = await fetch('/checkSession', {method:'POST', credentials:'include', headers:{'Content-Type': 'application/json'}});
    return await response.json();
}