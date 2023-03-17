import { Comment } from "./comment";
import { selectComments, loadCommentsForPost, isLoadingComments } from "./commentsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export function CommentsList({ postId }) {
  const loading = useSelector(isLoadingComments);
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!comments[postId]) {
      dispatch(loadCommentsForPost(postId));
    }
  }, [comments, dispatch, postId]);

  const renderComments = () => {
    if (loading) return <div className="wrapper">Loading Comments</div>;
    if (!comments[postId]) return null;

    return comments[postId].map(comment => (
      <Comment key={comment.id} comment={comment} />
    ));
  }

  return (
    <div className="comments-container">
      {renderComments()}
    </div>
  );
}
