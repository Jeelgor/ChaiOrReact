
import { useState } from 'react'
import './App.css'

function App() {

let [Counter,setCounter]=useState(15)
const addValue=()=>{
  console.log("Clicked",Counter);
  Counter=Counter+1;
  setCounter(Counter)
}
  return (
    <>
     <h1>Chai Or React</h1>
     <h2 >Counter Value {Counter}</h2>

     <button onClick={addValue}>Add Value</button><br></br>
     <button>Remove Value</button>
    </>
  )
}

export default App
