import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './Person'

function App() {
const persons=['Sakib','jasim','Rubel','Shoriful']

  return (
    <>

    <Actor name={"Raj"}></Actor>
    {
      persons.map(actor=><Actor></Actor>)
    }
      <h1>Vite + React</h1>
  
    </>
  )
}

export default App
