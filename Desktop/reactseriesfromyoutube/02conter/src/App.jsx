import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {

let [counter, setCounter] = useState(15)

 

 const addValue = () => {
  if(counter < 20) {
    setCounter(counter + 1)
  }
 }

 const subValue = () => {
  if(counter > 0) {
    setCounter(counter - 1)
  }
 }
  return ( 
    <>
     <h1>How many projects mandan made this year?</h1>
     <h2>project of 2025: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br /> <br />

     <button onClick={subValue}>remove value</button> 
    </>
  )
}

export default App
