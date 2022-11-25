import React, { Component } from "react";
import { Loading } from "../Loading";
class ClassState extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            error: false,
            loading: false,
        };
    }

    UNSAFE_componentWillMount (){
        console.log('componentwillMount');
    }
    
    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
        if(!!this.state.loading){
            setTimeout(()=>{
                console.log('haciendo validacion');
                this.setState({loading: false})
                console.log('Terminando validacion');
            },1500)
        }
    }

    render(){
        
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Ingresa el codigo de seguridad</p>
                {this.state.error && <p>Erorr: codigo incorrecto</p>}
                {this.state.loading && <Loading/>}
                <input placeholder="Codigo de seguridad"/>
                <button onClick={() => this.setState({loading: true})}>
                    Comprobar
                </button>
            </div>
        )
    }
}

export {ClassState}