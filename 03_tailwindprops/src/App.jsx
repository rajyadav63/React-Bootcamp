import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-2xl'>Tailwind Testing</h1>
      <div class="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/6174089/pexels-photo-6174089.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div class="flex flex-col justify-center items-center">
          <span class="text-2xl font-medium">Class Warfare</span>
          <span>The Anti-Patterns</span>
          <span class="flex">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default App
