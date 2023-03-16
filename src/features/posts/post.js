import { DownArrow, UpArrow } from "../../components/icons/arrows";
import { CommentIcon } from "../../components/icons/commentIcon";
import { CommentsList } from "../comments/commentsList";
import { getTimeAgo } from "../../utils/timeConverter";

export function Post({post}) {
    const { title, author, date, score, numComments, selfText, img, postType} = post
    
    
    return (
        <article class='post'>
            <div class='post__post-wrapper'>
                <div class='post__voting'>
                    <UpArrow />
                    <span class='post__voting-counter'>{score > 1000 ? `${(Math.floor(score / 100) / 10).toFixed(1)}k` : score}
</span>
                    <DownArrow />
                </div>
                <div class='post__post-container'>
                    <h3 class='post__post-title'>{title}</h3>
                    <div class='post__post-image-container'>
                        {postType ? <img src={img} alt="post"/> : null }
                    </div>
                    <div class='post__post-text'>
                        {selfText ? <p>{selfText}</p> : null }
                    </div>
                    <hr></hr>
                    <div class='post__post-details'>
                        <span class='post__post-author'>{author}</span>
                        <span class='post__post-date'>{getTimeAgo(date)}</span>
                        <div class='post__post-comment-container'>
                            <CommentIcon />
                            <span class='post__post-comment'>{numComments}</span>
                        </div>
                    </div>
                    <CommentsList />
                </div>
            </div>
        </article>
    )

}