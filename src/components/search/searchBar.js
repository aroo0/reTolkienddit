import SearchButton from '../../data/icons/search.png'
import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createSearchParams } from 'react-router-dom';



export default function SearchBar() {
    // get navigate function
  const navigate = useNavigate()
  const searchInputRef = useRef();
  const location = useLocation()



  const onSearchHandler = (e) => {

    e.preventDefault();
    const inputValue = searchInputRef.current.value.trim();
    
    // Check if input is not empty
    if (!inputValue) {
        return;
    }
      


    const searchQuery = {
      query: searchInputRef.current.value
    }

    const query = createSearchParams(searchQuery)
    const currentPathname = location.pathname;

    let newPathname = currentPathname === "/" ? "/search" : `${currentPathname}`;
    newPathname = newPathname.includes("/search") ? newPathname : `${newPathname}/search`;

    navigate( {
      pathname: newPathname,
      search: `?${query}`
    })

  };

    return (
        
    <form className='search-bar' 
            onSubmit={onSearchHandler}>
      <input 
        className='search-bar__input' 
        placeholder='Search...'
        ref={searchInputRef}
         />
      <button type="submit" 
        className='search-bar__button'>
            <img src={SearchButton} 
                alt="search button" 
                className='search-bar__search-image' />
        </button>
    </form>

    )
}