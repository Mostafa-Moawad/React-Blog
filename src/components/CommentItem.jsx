export function CommentItem ({comment}) {
    return (
      <ul> 
      <li> {comment.name}</li>
       <li>{comment.body}</li>
       <li> { comment.email }</li> 
       </ul>
    )
}
