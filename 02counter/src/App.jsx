import { useState } from 'react'
import './App.css'

function App() {
  // let counter=15;

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const SubValue=()=>{
    setCounter((prevCounter)=>prevCounter-1);
    setCounter((prevCounter)=>prevCounter-1);
    setCounter((prevCounter)=>prevCounter-1);
    setCounter((prevCounter)=>prevCounter-1);

  }

  return (
    <>
      <h1>React Course With Krishna {counter}</h1>
      <h2>counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <button
      onClick={SubValue}    
      >remove Value</button>
      <p>footer :{counter}</p>
    </>
  )
}

export default App
