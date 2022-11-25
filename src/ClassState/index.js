import React, { Component } from "react";
import { Loading } from "../Loading";

const SECURITY_CODE = 'paradigma' 
class ClassState extends Component{    
    
    constructor(props){
        super(props);
        this.state = {
            error: false,
            loading: false,
            value: '',
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
                if (this.state.value !== SECURITY_CODE){
                    this.setState({error: true});
                }
                this.setState({loading: false});
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
                <input 
                placeholder="Codigo de seguridad"
                value = {this.state.value}
                onChange={(event)=>this.setState({value: event.target.value})}
                />
                <button onClick={() => this.setState({error:false,loading: true})}>
                    Comprobar
                </button>
            </div>
        )
    }
}

export {ClassState}