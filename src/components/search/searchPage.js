import { useSearchParams, useNavigate, useLocation } from "react-router-dom"
import { PostsList } from "../../features/posts/postsList"
import { useSelector } from "react-redux"
import { selectFilteredPosts, setFilterKeyword } from "../../features/posts/postsSlice"
import { useDispatch } from "react-redux"

export function SearchPage() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query')
    const location = useLocation()
    const parentPage = location.pathname.replace('search', "")


    const dispatch = useDispatch()
    dispatch(setFilterKeyword(query))

    const filteredPosts = useSelector(selectFilteredPosts)

    const navigate = useNavigate()

    if (!filteredPosts.length) {
        return (
            <div className="search__search-result-wrappper wrapper">
                <h2 className='search__search-headline'>No results found for: {query}</h2>
                <button onClick={() => {navigate(parentPage, {state:{ fromSearch: true }})}}>Go back</button>
            
            </div>
        )
    }

    return (
        <div className="search__search-result-wrappper wrapper">
            <h2 class='search__search-headline'>Searching for: {query}</h2>
            <PostsList posts={filteredPosts} />
        </div>
    )
}
