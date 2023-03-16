import SearchBar from "../search/searchBar"


export function MyHeader() {
    return (
        <header class='header'>
        <h1 class='header__logo'>re<span class='header__logo-tolkien'>Tolkien</span>ddit</h1>
        <SearchBar class='header__search-bar' />
      </header>
    )

}