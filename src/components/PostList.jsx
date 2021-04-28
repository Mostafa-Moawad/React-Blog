
import {PostItem} from "./PostItem";
import {useState, useEffect } from "react";
import { navigate } from "@reach/router";
export default function PostList({}) {


    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${localStorage.getItem("userId")}/posts`)
        .then(response => response.json() )
        .then(json => {setPosts(json); console.log(json);})
        
    }, [])


   
      

    const handleCommentList = (post_id,post) => {

        
  
      fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
      .then(response => response.json())
      .then(json => {setComments(json); console.log(json);  navigate('/comments',  { state: { comments: json, post:post}} ); })
    }

    return (
        <div>

           
         <div className="posts-container contianer">
                { posts.map((post) => {
            return <div key={post.id}>
                <PostItem   post = {post} />
                <button  className="myButton" onClick= {()=>{
                    console.log("id ->"+post.id);
                    handleCommentList(post.id, post) }}>show comments</button>
      
                </div>
            }) }
         </div>

         </div>

         
    
    )
}
