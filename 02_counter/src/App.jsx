import { useState } from 'react'
import './App.css'

function App() {
  // let count = 15;
  let [count, setCount] = useState(15);

  // const removeValue = ()=>{
  //   setCount(count-1)
  // }

  // const removeValue = ()=>{
  //   setCount(count-1)
  //   setCount(count-1)
  //   setCount(count-1)
  //   setCount(count-1)
  // }
  const removeValue = ()=>{
    setCount((prevValue)=>prevValue-1)
    setCount((prevValue)=>prevValue-1)
    setCount((prevValue)=>prevValue-1)
    setCount((prevValue)=>prevValue-1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {count}</h2>

      <button onClick={()=>{
        setCount(count+1)
      }}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
