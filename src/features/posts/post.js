import { CommentIcon } from "../../components/icons/commentIcon";
import { CommentsList } from "../comments/commentsList";
import { getTimeAgo } from "../../utils/timeConverter";
import { useState } from "react";
import { Vote } from "../../components/vote/vote";

export function Post({ post }) {
  const [commentVisibility, setCommentVisibility] = useState(false);
  const {
    id,
    title,
    author,
    date,
    score,
    numComments,
    selfText,
    img,
    postType,
  } = post;

  const handleShowComments = () => {
    setCommentVisibility(!commentVisibility);
  };

  return (
    <article class="post">
        <Vote score={score} />
        <div class="post__post-container">
          <h3 class="post__post-title">{title}</h3>
          <div class="post__post-image-container">
            {postType === "image" ? <img src={img} alt="post" /> : null}
          </div>
          <div class="post__post-text">
            {selfText ? <p>{selfText}</p> : null}
          </div>
          <hr></hr>
          <div class="post__post-details">
            <span class="post__post-author">{author}</span>
            <span class="post__post-date">{getTimeAgo(date)}</span>
            <div
              class="post__post-comment-container"
              onClick={handleShowComments}
            >
              <CommentIcon />
              <span class="post__post-comment">{numComments}</span>
            </div>
          </div>

          {commentVisibility ? <CommentsList postId={id} /> : null}
        </div>
    </article>
  );
}
