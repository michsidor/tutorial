import React from 'react'
import './MojStyl.css'

function ListRendering() {
  const names = ['Michal', 'Piotr', 'Jacenty'];
  const persons = [
    {
      imie: 'Michal',
      wiek: 23,
      zawod: 'programista'
    },
    {
      imie: 'Piotr',
      wiek: 40,
      zawod: 'zjeb'
    },
    {
      imie: 'Jacenty',
      wiek: 18,
      zawod: 'totalny szef'
    }
  ];
  const resultForNames = names.map(name => <h1>{name}</h1>)
  const resultForPersons = persons.map(iden => <h1>{iden.imie}, {iden.wiek}, {iden.zawod}</h1>)
  return (
    <div>
      <div className='mojaKlasa'>
      {resultForNames}
      </div>
      <div>
      {resultForPersons}
      </div>
    </div>
  )
}

export default ListRendering
