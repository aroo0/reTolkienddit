import SearchBar from "../search/searchBar"


export function MyHeader() {
    return (
        <header className='header'>
        <h1 className='header__logo'>re<span className='header__logo-tolkien'>Tolkien</span>ddit</h1>
        <SearchBar className='header__search-bar' />
      </header>
    )

}