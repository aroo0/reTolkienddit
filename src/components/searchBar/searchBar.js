import SearchButton from '../../data/icons/search.png'



export default function SearchBar() {


    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        
        <form class='search-bar'>
      <input class='search-bar__input' placeholder='Search...'></input> 
      <button type="submit" class='search-bar__button'><img src={SearchButton} alt="search button" class='search-bar__search-image' /></button>
      </form>

    )
}