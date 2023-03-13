import Post from "./post"
import { useSelector, useDispatch } from "react-redux"
import { selectPosts, loadPostsForCategory } from "./postsSlice"
import { useEffect } from "react"


export default function Posts() {
    const postsById = useSelector(selectPosts)
    const dispatch = useDispatch()


    useEffect(()=> {
        dispatch(loadPostsForCategory())


    }, [])

    return (
    <section class='main-content__posts-list'>
        <Post />
    </section>

    )
}