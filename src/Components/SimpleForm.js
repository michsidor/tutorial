import React, { Component } from 'react'

class SimpleForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       imie: ' ',
       wiek: 0,
       plec: 'Mezczyzna' 
    }
  }  

  changeName = (event) => {
    this.setState({
      imie: event.target.value
    }, () => console.log(`Nowe imie to: ${this.state.imie}`))
  }

  changeAge = (event) => {
    this.setState({
      wiek: event.target.value
    }, () => console.log(`Nowy wiek to: ${this.state.wiek}`))
  }

  changeSex = (event) => {
    this.setState({
      plec: event.target.value
    }, () => console.log(`Nowa plec to: ${this.state.plec}`))
  }

  showInput = (event) => {
    console.log(`Imie:${this.state.imie}, wiek:${this.state.wiek}, plec:${this.state.plec}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.showInput}>
        <div>
          <label>Wprowadz imie: </label>
          <input type='text' onChange={this.changeName} />
        </div>
        <div>
          <label>Wprowadz wiek: </label>
          <input type='number' onChange={this.changeAge} />
        </div>
        <div>
          <select onChange={this.changeSex}>
            <option value='Mezczyzna'>Mezczyzna</option>
            <option value='Kobieta'>Kobieta</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default SimpleForm;