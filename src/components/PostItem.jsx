import '../styles.css';

export function PostItem ({post , handleCommentList}) {
  return (
    <ul className="myUnOrderedList"> 
      <li><strong>User: </strong>{post.userId}</li>
      <li><strong>Title: </strong>{post.title}</li>
      <li><strong>Body: </strong>{ post.body }</li> 
      <li><button className="myButton" onClick= {()=>{
          handleCommentList(post.id); 
          const postContainer = document.querySelector('.posts-container');
          console.log(postContainer);
          postContainer.style.display = "none";
        }}>show comments</button>
      </li>
    </ul>
  )
}
