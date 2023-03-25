import React, {Component} from 'react';

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    CounterFunction = async() => { // trzeba tak robic poniewaz setState robi sie asynchronicznie
        await this.setState({
            counter : this.state.counter + 1
        })
        console.log(this.state.counter)
    }

    render(){
        return(
            <div>
                <h1>Zliczanie klikniec: {this.state.counter}</h1>
                <button onClick={() => this.CounterFunction()}>Dodaj jedna wartosc</button>
            </div>
        )
    }

}

export default Counter;