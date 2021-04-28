
import {CommentItem} from "./CommentItem"
import { PostItem } from "./PostItem";

export default function CommentList(props) {
    console.log(props);
    return (
        
      <div className="comments-container container">
        <h1>Post</h1>

        <PostItem post={props.location.state.post} />
        <hr/><hr/><hr/>

        <h1>Commetns</h1>
            { props.location.state.comments.map((comment) => {
        return <CommentItem  key={comment.id} comment = {comment}  />
        }) }
      </div>
        
    )
}
