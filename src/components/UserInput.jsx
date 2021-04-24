import {useState} from "react"
import '../styles.css'

  export function UserInput ({handlePostList}) {
    const [userId, setUserId] = useState("1")
    return (
      <div>
      <input className="myInput" type="text" onChange ={(e) => setUserId(e.target.value)  }  />
      <button className="myButton"
      onClick= {()=>{ handlePostList(userId); setUserId("");  }} > List Posts </button>
      </div>
    );
}


