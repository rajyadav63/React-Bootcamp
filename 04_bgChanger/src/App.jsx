import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
    <div className="w-full h-screen duration-150 flex justify-center"
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center items-center bottom-10'>
        <div className='flex flex-wrap justify-center items-center gap-3 bg-amber-50 px-3 py-1.5 rounded-xl'>

          <button className='text-white px-3 text-center py-1 rounded-2xl cursor-pointer'
          style={{backgroundColor: "blue"}}
          onClick={()=>{setColor("blue")}}
          >Blue</button>

          <button className='text-white px-3 text-center py-1 rounded-2xl cursor-pointer'
          style={{backgroundColor: "green"}}
          onClick={()=>{setColor("green")}}
          >Green</button>

          <button className='text-white px-3 text-center py-1 rounded-2xl cursor-pointer'
          style={{backgroundColor: "red"}}
          onClick={()=>{setColor("red")}}
          >Red</button>
          <button className='text-white px-3 text-center py-1 rounded-2xl cursor-pointer'
          style={{backgroundColor: "purple"}}
          onClick={()=>{setColor("purple")}}
          >Purple</button>
          <button className='text-black px-3 text-center py-1 rounded-2xl cursor-pointer'
          style={{backgroundColor: "aquamarine"}}
          onClick={()=>{setColor("aquamarine")}}
          >Aquamarine</button>

          <button className='text-white px-3 text-center py-1 rounded-2xl cursor-pointer'
          style={{backgroundColor: "olive"}}
          onClick={()=>{setColor("olive")}}
          >Olive</button>

          <button className='text-black px-3 text-center py-1 rounded-2xl cursor-pointer'
          style={{backgroundColor: "yellow"}}
          onClick={()=>{setColor("yellow")}}
          >Yellow</button>

          <button className='text-white px-3 text-center py-1 rounded-2xl cursor-pointer'
          style={{backgroundColor: "black"}}
          onClick={()=>{setColor("black")}}
          >Black</button>

          <button className='text-black px-3 text-center py-1 rounded-2xl cursor-pointer'
          style={{backgroundColor: "white"}}
          onClick={()=>{setColor("white")}}
          >White</button>

          <button className='text-white px-3 text-center py-1 rounded-2xl cursor-pointer'
          style={{backgroundColor: "pink"}}
          onClick={()=>{setColor("pink")}}
          >Pink</button>

        </div>
      </div>
    </div>
  )
}

export default App
