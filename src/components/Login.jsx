import {useState} from "react"
import '../styles.css'

export function Login ({handleLogin}) {
    const [userEmail, setUserEmail] = useState("")
    const [userName, setUserName] = useState("")

    return (
      <div className="container">
      <label > Email</label><input className="myInput" type="text" onChange ={(e) => setUserEmail(e.target.value)  } value={userEmail}  />
      <label > User Name</label><input className="myInput" type="text" onChange ={(e) => setUserName(e.target.value)  } value={userName} />

      <button className="myButton"
      onClick= {()=>{ handleLogin(userEmail,userName); setUserEmail(""); setUserName(""); }} > Login </button>
      </div>
    );
}