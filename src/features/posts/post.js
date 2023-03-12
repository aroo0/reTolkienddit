import { DownArrow, UpArrow } from "../../components/Icons/Arrows";
import { CommentIcon } from "../../components/Icons/CommentIcon";

export default function Post() {
    return (
        <article class='post'>
            <div class='post__post-wrapper'>
                <div class='post__voting'>
                    <UpArrow />
                    <span class='post__voting-counter'>13.3k</span>
                    <DownArrow />
                </div>
                <div class='post__post-container'>
                    <h3 class='post__post-title'>Why is everyone so upset? I thought we like Tolkien stuff?</h3>
                    <div class='post__post-image-container'>
                        <img src="https://i.redd.it/rx95hwuvg6ka1.jpg" alt="post image"/>
                    </div>
                    <hr></hr>
                    <div class='post__post-details'>
                        <span class='post__post-author'>r/lotrmemes</span>
                        <span class='post__post-date'>15 days ago</span>
                        <div class='post__post-comment-container'>
                            <CommentIcon />
                            <span class='post__post-comment'>1.4k</span>
                        </div>
                    </div>
                </div>
            </div>
      </article>
    )

}