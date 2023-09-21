import {useState} from 'react'
import './App.css';

let adjustInterval=undefined;
function App() {
  const[started,setStarted]=useState(false)
  const[watch,setWatch]=useState(0)
  const start=()=>{
    adjustInterval=setInterval(()=>{
      setWatch((x)=>x+1)
      setStarted(true)
    },1000)
  }
  const stop=()=>{
    clearInterval(adjustInterval)
    setStarted(false)
  }
  function reset(){
    setWatch(0)
    clearInterval(adjustInterval)
    setStarted(false)
  }


  return (
    <div className="App">
       <h1>Timer App</h1>
       <h3>{watch}</h3>
       <button disabled={started} onClick={start}>Start</button><span>&nbsp;</span>
       <button onClick={stop}>Stop</button><span>&nbsp;</span>
       <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
