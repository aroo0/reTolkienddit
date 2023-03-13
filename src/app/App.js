import './App.css';
import SearchBar from '../components/searchBar/searchBar';
import Posts from '../features/posts/posts';
import Acounts from '../features/accounts/acounts';
import { Provider } from 'react-redux';
import {store} from './store';

function App() {
  return (
    <Provider store={store}>
    <header class='header'>
      <h1 class='header__logo'>re<span class='header__logo-tolkien'>Tolkien</span>ddit</h1>
      <SearchBar class='header__search-bar' />
    </header>
    <main class='main-content'>
      <Posts />
      <Acounts />

    </main>

    </Provider>
  );
}

export default App;
