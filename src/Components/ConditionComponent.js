import React, { Component } from 'react'

export default class ConditionComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     isLoggedIn: true
  }
}

  render() {
    return this.state.isLoggedIn ? 
    <div>Welcome Michal</div> : 
    <div>Welcome Guest</div>
  }
}
