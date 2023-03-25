import React, {Component} from "react";

class SayHelloState extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Witamy na naszej stronie'
        }
    }

    ChangeState(){
        if(this.state.message === "Dziekuje za klikniecie przycisku"){
            this.setState({
                message: 'Witamy na naszej stronie'
            })
        }
        else{
            this.setState({
                message: "Dziekuje za klikniecie przycisku"
            })
        }
    }

    changeState = () => {
        if(this.state.message === "Dziekuje za klikniecie przycisku"){
            this.setState({
                message: 'Witamy na naszej stronie'
            })
        }
        else{
            this.setState({
                message: "Dziekuje za klikniecie przycisku"
            })
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.ChangeState()}>Kliknij mnie</button>
                <button onClick={this.changeState}>Kliknij mnie</button>
            </div>
        )
    }
}

export default SayHelloState;