import { Post } from './post'

export function PostsList({posts}) {
    const postsObjects = Object.values(posts)

    return (
        <>
        {postsObjects.map(post => (
          <Post key={post.id} post={post} />
        ))}
    </>
    )
    
}