import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  return (
    <>
      <div>
        <h1>Password Generator</h1>
      </div>
    </>
  )
}

export default App
