
import {CommentItem} from "./CommentItem"

export default function CommentList({comments}) {


    return (
        
      <div className="comments-container">
            { comments.map((comment) => {
        return <CommentItem  key={comment.id} comment = {comment}  />
        }) }
      </div>
        
    )
}
