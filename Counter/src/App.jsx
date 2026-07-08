import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(5)
  const addvalue = () =>{
    if(count >= 20){
      return
    }
    setCount(count+1);
  };
  const decvalue = () =>{
    if(count <= 0){
      return
    }
    console.log('increased');
    setCount(count-1);
  };

  return (
    <>
      <h1>Hello Mahesh</h1>
      <h3>Counter {count}</h3>
      <button onClick={addvalue}>Addvalue </button>
      <button onClick={decvalue}>Decvalue</button>
    </>
  )
}

export default App
