import React, { Component } from "react";

class ClassState extends Component{
    

    render(){
        return (
            <div>
                <h2>Eliminar ClassState</h2>
                <p>Ingresa el codigo de seguridad</p>
                <input placeholder="Codigo de seguridad"/>
                <button>Comprobar</button>
            </div>
        )
    }
}

export {ClassState}