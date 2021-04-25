import {useState} from "react"
// import { UserContext } from "./UserContext";
import '../styles.css'

export function Login2 ({handleLogin}) {
    const [userEmail, setUserEmail] = useState("")
    const [userName, setUserName] = useState("")
    // const {setIsLoggedIn}=useContext(UserContext)
    return (
      <div className="container">
      <label > Email</label><input className="myInput" type="text" onChange ={(e) => setUserEmail(e.target.value)  } value={userEmail}  />
      <label > User Name</label><input className="myInput" type="text" onChange ={(e) => setUserName(e.target.value)  } value={userName} />

      <button className="myButton"
      onClick= {()=>{ handleLogin(userEmail,userName)
        // .then ((user)=>{
        

        // setIsLoggedIn(true)
        // // navigate("/")

      // }) 
       }} > Login </button>
      </div>
    );
}