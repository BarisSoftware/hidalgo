import './login.css';

function InputField(props){
    return(
    <div class = "inputField">
        <label name = {props.name}>
            {props.tittle}
            <br/>
            <input type={props.type} placeholder={props.placeh} value={props.value}/>
        </label>
    </div>);
} 

function Login(props) {
    return(
    <div id='login'>
        <form action={props.action} method="GET">
            <InputField name = "name" tittle = "Nombre:" type = "text" placeh = "Tu Nombre"/>
            <InputField name = "lastname" tittle = "Apellido:" type = "text" placeh = "Tu Apellido"/>
            <br/>
            <InputField name = "pass" tittle = "Contraseña:" type = "password"/>
            <InputField name = "passconfirmation" tittle = "Confirma Contraseña:" type = "password"/>
            <br/>
            <InputField name = "tecnologias" tittle = "Tecnologías conocidas" type = "text" placeh = "ReactJS, NodeJS"/>
            <br/>
            <InputField name = "submit" type = "submit" value = "Enviar"/>
        </form>
    </div>);
}

export default Login