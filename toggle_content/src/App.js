import './App.css';
import {useState} from 'react';

function App() {
  const[status,setStatus]=useState(true)
  return (
    <div className="App">
      <h1>Toggle Content</h1>
      {
        status?<h1>Hello World!!!!</h1>:null
      }
      {/* <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button> */}
      <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default App;
