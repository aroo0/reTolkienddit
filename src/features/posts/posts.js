import { useSelector, useDispatch } from "react-redux"
import { resetPosts, selectPosts, loadPostsForCategory } from "./postsSlice"
import { useEffect, useState } from "react"
import { PostsList } from "./postsList"
import { useLocation } from "react-router-dom"

export default function Posts({url}) {
  const postsById = useSelector(selectPosts)
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(resetPosts());
    dispatch(loadPostsForCategory(url))
  }, [dispatch, url])

  return (
    <PostsList posts={postsById} />
  )
}
