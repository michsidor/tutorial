import React from 'react'
import { useContext } from 'react'
import { LevelContext } from './LevelContext'

function Sekcja( {children} ) {
  const level = useContext(LevelContext)
  return (
    <>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </>
  )
}

export default Sekcja