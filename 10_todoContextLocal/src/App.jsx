import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-400 p-3 rounded-2xl'>ToDo Context with local Storage</h1>
    </>
  )
}

export default App
