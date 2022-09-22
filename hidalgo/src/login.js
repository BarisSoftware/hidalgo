function InputField(props){
    return(
    <div class = "inputField">
        <label name = {props.name}>
            {//<hr/>
            }
            {props.tittle}
            <br/>
            <input type={props.type} placeholder={props.placeh} value={props.value}/>
        </label>
    </div>);
} 

function Login(props) {
    return(
    <div>
        <InputField name = "name" tittle = "Nombre:" type = "text" placeh = "Tu Nombre"/>
        <InputField name = "lastname" tittle = "Apellido:" type = "text" placeh = "Tu Apellido"/>
        <InputField name = "pass" tittle = "Contraseña:" type = "password"/>
        <InputField name = "passconfirmation" tittle = "Confirma Contraseña:" type = "password"/>
        <InputField name = "submit" type = "submit" value = "Enviar"/>
    </div>);
}

export default Login