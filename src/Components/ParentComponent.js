import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Jestem rodzicem'
    }
  }

  AddName = (name) => {
      console.log(`${this.state.message} dziecka o imieniu ${name}`)
  }

  render() {
    return (
      <div>
        <ChildComponent sayHi = {this.AddName}/>
      </div>
    )
  }
}

export default ParentComponent

