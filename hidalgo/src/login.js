import './login.css';

function InputField(props){
    return(
    <div className = {props.className}>
        <label name = {props.name}>
            <p className='label'>{props.tittle}</p>
            <input type={props.type} placeholder={props.placeh} value={props.value}/>
        </label>
    </div>);
} 

function Login(props) {
    return(
    <div id='login'>
        <form action={props.action} method="GET">
            <InputField className="inputField" name = "name" tittle = "Nombre:" type = "text" placeh = "Tu Nombre"/>
            <InputField  className="inputField" name = "lastname" tittle = "Apellido:" type = "text" placeh = "Tu Apellido"/>
            <br/>
            <InputField  className="inputField" name = "pass" tittle = "Contraseña:" type = "password"/>
            <InputField  className="inputField" name = "passconfirmation" tittle = "Confirma Contraseña:" type = "password"/>
            <br/>
            <InputField className="inputField" name = "tecnologias" tittle = "Tecnologías conocidas" type = "text" placeh = "ReactJS, NodeJS"/>
            <br/>
            <InputField className="inputField submit" name = "submit" type = "submit" value = "Enviar" className = "submit"/>
        </form>
    </div>);
}

export default Login