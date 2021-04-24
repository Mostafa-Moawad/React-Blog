  export function PostItem ({post }) {
      return (
        <ul> 
        <li> {post.userId}</li>
         <li>{post.title}</li>
         <li> { post.body }</li> 
         </ul>
      )
  }
