import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  //useRef for password reference
  const passwordRef = useRef(null);

  //passwordGenerator function
  const passwordGenerator = useCallback(() => {
    let pass = ""; //this will store my final password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]-+=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);

    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])

//copy password to Clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-screen max-w-md mx-auto my-8 shadow-md bg-blue-950 text-orange-500 px-4 py-3 rounded-xl text-center'>
        <h1 className='text-white text-center mb-3'>Password Generator</h1>
        <div className='flex shadow overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='bg-amber-50 text-black px-18 py-1.5 rounded-l-xl outline-none'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button className='bg-blue-600 text-white px-4 rounded-r-xl cursor-pointer shrink-0 hover:bg-blue-900'
            onClick={copyPasswordToClipboard}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={26}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>length: {length}</label>
          </div>
          b
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label>number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
