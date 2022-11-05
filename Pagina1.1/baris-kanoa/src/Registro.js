import './Registro.css';

function Registro() {
    retutn (
        <div className='Registro'>
            <div class="formulario">
            <h1>Registro</h1>
            <form class="registro" method="post">
                <div class="text">
                    <input type="email" placeholder="Email" required></input>
                    <input type="text" placeholder="Nombre" required></input>
                    <input type="password" placeholder="Contraseña" required></input>
                    <input type="password" placeholder="Confirmación contraseña" required></input>
                </div>
                <h3>Tecnologías</h3>
                <div class="radiobutton">
                    <input type="radio" name ="tecs" value ="Primera Tecnologia" > Primera Tecnologia/</input>
                    <input type="radio" name="tecs" value ="Segunda Tecnologia" > Segunda Tecnologia/</input>
                    <input type="radio" name="tecs" value ="tercera Tecnologia" > Tercera Tecnologia /</input>          
                </div>
                <input type="submit" value="Ingresar"></input>
                <div class="registrarse">
                    ¿Ya tienes una cuenta? <a href="Login.html">Ingresa</a>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Registro;