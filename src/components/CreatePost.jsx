


import {useState } from "react"
import { navigate } from "@reach/router";




export default function CreatePost({authUser}) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    
    let user_id = localStorage.getItem("userId")
    const handleCreatePost = (title,body,user_id) => {
    
        // fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
        // .then(response => response.json())
        // .then(json => setPosts(json))
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: user_id,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) =>{ console.log(json); alert("Post is Created Successfully !");
         navigate("/home")});
      }
    
    return (
        <div className="create-post-container">
        <label > Body</label><input className="myInput" type="text" onChange ={(e) => setBody(e.target.value)  } value={body}  />
        <label > Title</label><input className="myInput" type="text" onChange ={(e) => setTitle(e.target.value)  } value={title} />

        <button className="myButton"
        onClick= {()=>{ handleCreatePost(title,body,user_id)}} > Create Post </button>
        </div>
    )
}
