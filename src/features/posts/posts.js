import Post from "./post"
import { useSelector, useDispatch } from "react-redux"
import { resetPosts, selectPosts, loadPostsForCategory } from "./postsSlice"
import { useEffect } from "react"


export default function Posts({url}) {
    const postsById = useSelector(selectPosts)
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(resetPosts())
      dispatch(loadPostsForCategory(url)) 

    }, [url])

    const posts = Object.values(postsById)

  return (
    <section className='main-content__posts-list'>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  )
}