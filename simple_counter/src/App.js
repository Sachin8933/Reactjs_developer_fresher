import './App.css';
import { useState } from "react"
function App() {
  const [number, setNumber] = useState(1)
  function increment() {
    setNumber(number + 1)
  }
  function decrement() {
    if (number <= 0) {
      return;
    }
    else {
      setNumber(number - 1)
    }
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <h3>
        {number}
      </h3>


      <button className='btn1' onClick={increment}>Increment</button> <span>&nbsp;</span>
      <button className='btn2' onClick={decrement}>Decrement</button>

    </div>
  );
}

export default App;
