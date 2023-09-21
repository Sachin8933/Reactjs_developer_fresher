import './App.css';
import React,{useEffect,useState} from 'react'

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('https://api.agify.io/?name=meelad')
.then((Response)=>{
  Response.json()
.then((resp)=>{
  console.log("Response" , data)
  setData(resp)
})
},[])
  })
  console.warn(data)
  return (
    <div className="App">
    <h1>Get Api Call</h1>
     <table>
      <tbody>
      <tr>
          <td>Count</td>
          <td>Name</td>
          <td>Age</td>
      </tr>
          {
            
           Object.values(data).map((item)=>
            {
              return<tr>
                <td>{item.count}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            }
            )
          }
      </tbody>
     </table>
    </div>
  );
}

export default App;
