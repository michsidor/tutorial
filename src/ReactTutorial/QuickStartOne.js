import React from 'react'

function QuickStartOne() {
	const myNumber = 5
	let contet;

	myNumber > 3 ? (contet = <h1>True</h1>) : (contet = <h1>False</h1>)

	const users = [
		{
			imie: "Michal",
			wiek: 15,
			email: "email1",
			id:1
		},
		{
			imie: "Patryk",
			wiek: 23,
			email: "email2",
			id:2			
		},
		{
			imie: "Andrzej",
			wiek: 30,
			email: "email3",
			id:3			
		}
	]

	const usersMap = users.map((user,index) => <h1 key={index}>{user.imie}, {user.wiek}, {index}</h1>)

  return (
    <>
			{contet}
			{usersMap}
    </>
  )
}

export default QuickStartOne;
