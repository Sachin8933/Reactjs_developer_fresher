
import React, {useState} from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState( " ")
  const [password, setPassword] = useState(" ")
  const [userErr, setuseErr] = useState(false)
  const [passErr, setPassErr] = useState(false)

  function loginHandle(e) {

    if(user.length<3|| password.length<3){
      alert("Type correct values")
    }
    else
     alert("All ok")

    e.preventDefault()
  }

  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setuseErr(true)
    }
    else {
      setuseErr(false)
    }
    setUser(item)

  }


  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true)
    }
    else {
      setPassErr(false)
    }
    setPassword(item)

  }

  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
        <input type='text' placeholder='Enter User Id' onChange={userHandler} />{userErr ? <span>User Not Valid</span> : ""}<br /><br />
        <input type='password' placeholder='Enter User Password' onChange={passwordHandler} />{passErr ? <span>User Password Not Valid</span> : ""}
        <br /><br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )

}


export default App;
