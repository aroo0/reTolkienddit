import { getTimeAgo  } from "../../utils/timeConverter"
export function Comment({comment}) {
    const { author, created, body } = comment
    return (
       <div class='comment'>
        <div class='comment__comment-info'>
            <h4 class='comment__comment-author'>{author}</h4>
            <span class='comment__comment-date'>{getTimeAgo(created)}</span>
        </div>
        <div class='comment__comment-content'>
            <p>{body}</p>
        </div>
    </div>
    )
}