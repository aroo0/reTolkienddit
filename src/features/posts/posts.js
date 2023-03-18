import { useSelector, useDispatch } from "react-redux";
import {
  resetPosts,
  selectPosts,
  loadPostsForCategory,
  isLoadingPosts,
} from "./postsSlice";
import { useEffect } from "react";
import { PostsList } from "./postsList";
import { useLocation } from "react-router-dom";
import { Loading } from "../../components/loading/loading";

export default function Posts({ url }) {
  const postsById = useSelector(selectPosts);
  const dispatch = useDispatch();
  const location = useLocation();
  const loading = useSelector(isLoadingPosts);

  useEffect(() => {
    if (!location?.state?.fromSearch) {
      dispatch(resetPosts());
    }
    dispatch(loadPostsForCategory(url));
  }, [dispatch, url, location]);

  if (loading) return <Loading />;
  return <PostsList posts={postsById} />;
}
