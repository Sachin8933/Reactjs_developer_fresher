import { useState } from 'react';
import './App.css';
import {SketchPicker} from 'react-color'
function App() {
  const[currentColor,setCurrentColor]=useState("#fff")
  const handleOnChange=(color)=>{
    setCurrentColor(color.hex)
  }

  const appStyle={
     backgroundColor:currentColor,
     height:"100vh",
     textAlign:"center"
  }
  return (
    <div className="App" style={appStyle}>
      <h1>React Color Picker</h1>
           <SketchPicker
             color={currentColor}
             onChangeComplete={handleOnChange}
           />
           <h1>Here's color code:{currentColor}</h1>
    </div>
  );
}

export default App;
