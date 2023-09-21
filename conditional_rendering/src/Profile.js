import {useState} from 'react'

const Profile = () => {
    const[loggedIn,setLoggedIn]=useState(1)
    
  return (
    <div>
        <h1>{setLoggedIn}</h1>
     {loggedIn?<h1>Welcome</h1>:<button>Logged In</button>}
    </div>
  )
}

export default Profile
