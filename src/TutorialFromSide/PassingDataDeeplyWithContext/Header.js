import React from 'react'
import { useContext } from 'react'
import { LevelContext } from './LevelContext'

function Header( {children} ) { 

  const level = useContext(LevelContext)
  switch(level) {
    case 1:
      return <h1>{children}</h1>
    case 2:
      return <p>{children} ale w paragrafie</p>      
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    case 5:
      return <h5>{children}</h5>
    default:
      return <h2>{children} h2</h2>      
  }
}

export default Header