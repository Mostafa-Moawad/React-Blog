
  import {useState} from "react"
  
  export function UserInput ({handlePostList}) {
    const [userId, setUserId] = useState("1")
    return (
      <div>
      <input type="text" onChange ={(e) => setUserId(e.target.value)  }  />
      <button
      onClick= {()=>{ handlePostList(userId); setUserId("");  }} > List Posts </button>
      </div>
    );
}
