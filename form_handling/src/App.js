import './App.css';
import React,{useState} from 'react';
function App() {
  const[name,setName]=useState("")
  const[tnc,setTnc]=useState(false)
  const[interest,setInterest]=useState("")
function getFormData(event) 
{
  console.warn(name,tnc,interest)
  event.preventDefault(); // use to prevent from submit the form i.e due to this we unable to get submited the form 
}
return (
    <div className="App">

          
        <h1>Form Validation </h1>
        <form onSubmit={getFormData}>
        <input type='text' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC Comic</option>
        </select>
        <br/><br/>
        <input type='checkbox'onChange={(e)=>setTnc(e.target.checked)}/><span>Accept terms and condition</span><br/><br/>
        <button type='submit'>Submit</button>
       </form>

      
    </div>
  );
}

export default App;
