import React from 'react'
import Header from './Header'
import Sekcja from './Sekcja'

function Strona() {
  return (
    <>
      <Sekcja>
        <Header>Pierwszy header w sekcji</Header>
        <Header>Drugi header w sekcji</Header>
        <Header>Trzeci header w sekcji</Header>
        <Header>Cztwarty header w sekcji</Header>
        <Header>Piaty header w sekcji</Header>
        <Header>Szosty header w sekcji</Header>
        --------------------------------------------------
        <br />
        <Sekcja>
          <Header>Siemanko jeden paragraf</Header>
          <Header>Siemanko dwa   paragraf</Header>
          <Header>Siemanko trzy  paragraf</Header>
        </Sekcja>
      </Sekcja>

    </>
  )
}

export default Strona