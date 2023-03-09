function Container(props) {
    return(
        <div className="formulario">
                <h1>{props.title}</h1>
                <form className={props.class} method="post" action={props.action}>
                    {props.content}
                </form>
            </div>
    );
}

export default Container;