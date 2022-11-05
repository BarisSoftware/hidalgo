import './Login.css';

function Login() {
    retutn (
        <div className='Login'>
            <div class="formulario">
            <h1>Login</h1>
            <form class="login" method="post">
                <input type="email" required placeholder="Email"></input>
                <input type="password" required placeholder="Contraseña"></input>
                <input type="submit" value="Ingresar"></input>
                <div class="registrarse">
                    ¿No estas registrado? <a href="Registro.html">Crea una cuenta</a>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Login;