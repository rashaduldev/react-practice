import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './Person'
import Team from './Team'
import BookStore from './BookStore'

function App() {
const persons=['Sakib','jasim','Rubel','Shoriful'];
const practiceTeam=[
  {id:1,name:'Rabby',age:23},
  {id:2,name:'Salman',age:21},
  {id:3,name:'Rakib',age:24},
  {id:4,name:'Sakib',age:23},
  {id:5,name:'Rahul',age:28},
  {id:6,name:'Rubel',age:20}
];

const books=[
  {id:1,name:'React',price:230},
  {id:2,name:'Java',price:230},
  {id:3,name:'Javascript',price:230},
  {id:4,name:'PHP',price:230},
  {id:5,name:'Python',price:230},
  {id:6,name:'Laravel',price:230}
];

  return (
    <>
    <h1>Vite + React</h1>
    <BookStore books={books}></BookStore>
    {
      practiceTeam.map(teammeet=><Team person={teammeet}></Team>)
    }


    {/* <Person name={persons[0]}></Person> */}
    {
      persons.map(person =><Person name={person}></Person>)
    }
      
  
    </>
  )
}

export default App
