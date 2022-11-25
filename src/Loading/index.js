import React, { Component } from "react";

class Loading extends Component{
    
    

    componentWillUnmount(){
        console.log('componentWillUnmount Loading');
    }

    render(){
        
        return (
            <p>Loading...</p>
        )
    }
}

export {Loading}