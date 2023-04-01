import React from 'react'

function MapowanieObiektow() {
  const users = [
    {
      name:"Michal",
      age:15
    },
    {
      name:"Piotr",
      age:17
    },
    {
      name:"Michal",
      age:18
    },
    {
      name:"Michal",
      age:19
    },
  ]

  const filteredUsers = users.filter(users => users.name === "Michal");
  const mapUsers = filteredUsers.map(users => <h1>{users.age}</h1>)

  return (
    <>
    {mapUsers}
    </>
  )
}

export default MapowanieObiektow