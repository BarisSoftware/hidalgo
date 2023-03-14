import { Link } from "react-router-dom"

function HeaderLink(props) {
  return (
    <li className="normal"><a href={props.link}>{props.text}</a></li>
  );
}

function NavLink(props) {
  return (
    <li className="cta"><Link to={props.link}>{props.text}</Link></li>
  );
}

export const Header = (props) => {
    // revisar si se dan props
    if(props.text == undefined) {
        props.text = "Login"
    }
    if(props.link == undefined){
        props.link = "/login"
    }

  return (
    <header>
      <div className="header">
        <a href="#" className="logo">Baris <br></br>Software Development</a>
        <nav>
          <HeaderLink link="/crear" text="CREAR PROYECTO"></HeaderLink>
          <HeaderLink link="/transacciones" text="TRANSACCIONES"></HeaderLink>
          <HeaderLink link="https://github.com/BarisSoftware/hidalgo" text="Source Code"></HeaderLink>
          <NavLink link={props.link} text={props.text} ></NavLink>
        </nav>
      </div>
    </header>
  )
}
