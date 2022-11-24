import React, { Component } from "react";

class ClassState extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            error: false,
        };
    }

    render(){
        
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Ingresa el codigo de seguridad</p>
                {this.state.error && <p>Erorr: codigo incorrecto</p>}
                <input placeholder="Codigo de seguridad"/>
                <button onClick={() => this.setState(prevState => ({error: !prevState.error}))}>
                    Comprobar
                </button>
            </div>
        )
    }
}

export {ClassState}