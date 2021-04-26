import '../styles.css';


export function PostItem ({post}) {


  return (
    <ul className="myUnOrderedList"> 
      <li><strong>User: </strong>{post.userId}</li>
      <li><strong>Title: </strong>{post.title}</li>
      <li><strong>Body: </strong>{ post.body }</li> 
    </ul>
  )
}
