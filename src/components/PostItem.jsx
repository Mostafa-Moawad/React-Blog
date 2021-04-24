  export function PostItem ({post , handleCommentList}) {
      return (
        <ul> 
        <li> {post.userId}</li>
         <li>{post.title}</li>
         <li> { post.body }</li> 
         <li><button onClick= {()=>{
            handleCommentList(post.id); 
            const postContainer = document.querySelector('.posts-container');
            console.log(postContainer);
            postContainer.style.display = "none";
        
        }}>show comments</button></li>
         </ul>
      )
  }
