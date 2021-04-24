
  import {useState} from "react"
  
  export function UserInput ({handlePostList}) {
    const [userId, setUserId] = useState("")
    return (
      <div>
      <input type="text" onChange ={(e) => setUserId(e.target.value)  } value={userId} />
      <button
      onClick= {()=>{ handlePostList(userId); setUserId(""); }} > List Posts </button>
      </div>
    );
}
