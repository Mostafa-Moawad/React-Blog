
import {PostItem} from "./PostItem";
import CommentList from "./CommentList";
import NavBar from "./NavBar";
import {useState } from "react";
export default function PostList({posts, authUser}) {

    const [comments, setComments] = useState([])
      

      const handleCommentList = (post_id) => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
        .then(response => response.json())
        .then(json => setComments(json))
      }


    return (
        <div>

            <NavBar authUser={authUser} />
         <div className="posts-container">
                { posts.map((post) => {
            return <PostItem  key={post.id} post = {post} handleCommentList = {handleCommentList} />
            }) }
         </div>

         <CommentList comments = {comments} />

         </div>

         
    
    )
}
