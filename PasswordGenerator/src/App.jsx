import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str+= "0123456789";
    if(character) str+="~!@#$%^&*()_+{}"
    let char;
    for (let i = 0; i < length; i++) {
      char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);
    }
    setpassword(pass)
  }, [length, character, number, setpassword]);

  useEffect(
    ()=>{passwordGenerator()}, 
    [length, character, number, passwordGenerator]
  )

  const copyToClipboard = useCallback(
    ()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
    },
    [password]
  )

  return (
    <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-3xl align-center text-white text-center my-3">
        Password Generator
      </h1>
      <div className="flex shadow rounded-md justify-center overflow-hidden">
        <input
          type="text"
          placeholder="password"
          value={password}
          className="outline-none rounded-sm w-full px-2 py-1"
          ref={passwordRef}
          readOnly
        />
        <button className="bg-blue-600 text-white px-3 rounded-sm shrink-0 outline-none"
        onClick={copyToClipboard}>
          Copy
        </button>
      </div>
      <div className="flex my-2 ">
        <div className="mx-3">
          <input
            type="range"
            min={6}
            max={25}
            value={length}
            className="cursor-pointer outline-none"
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label className="mx-1">Length <span className="text-white bg-orange-600 rounded-lg px-1 py-0.5">{length}</span></label>
        </div>
        <div className="mx-2">
          <input
            type="checkbox"
            id="check"
            defaultChecked={character}
            onChange={() => setCharacter((prev) => !prev)}
          />
          <label htmlFor="check" className="mx-1">
            Character
          </label>
        </div>
        <div className="mx-2">
          <input
            type="checkbox"
            id="num"
            defaultChecked={number}
            onChange={() => setNumber((prev) => !prev)}
          />
          <label htmlFor="num" className="mx-1"> 
            Number
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
