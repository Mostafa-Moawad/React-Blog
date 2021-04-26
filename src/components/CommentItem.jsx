export function CommentItem ({comment}) {
    return (
      <ul className="myUnOrderedList"> 
      <li><strong>Name: </strong> {comment.name}</li>
       <li><strong>Body: </strong> {comment.body}</li>
       <li><strong>Email: </strong>  { comment.email }</li> 
       <hr/>
       </ul>
       
    )
}
