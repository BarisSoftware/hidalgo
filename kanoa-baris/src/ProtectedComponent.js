import React from 'react'
import axios from 'axios'



export default class ProtectedComponent extends React.Component{
    constructor(props){ 
        super(props);
        this.state({ //crea el estado de la autenticacion
            auth: false,
            other: undefined
        })
    };

    componentDidMount() {
        checkLogged();
    }

    checkLogged = () =>{
        await 
    }

    render() {
        return(
            <div>

            </div>
        );
    }
}