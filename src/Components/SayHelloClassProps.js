import React, { Component } from "react";

class SayHelloTwo extends Component{

    render(){
        const {name,secondName,children} = this.props;
        return (
            <div>
                <h1>Hello, my name is {name} and surname is {secondName} i to jest classComponent</h1>
                {children}
            </div>
        )
    }
}

export default SayHelloTwo;