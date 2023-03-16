import './App.css';
import Posts from '../features/posts/posts';
import Acounts from '../features/accounts/acounts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyHeader } from '../components/header/header';
import { selectAccounts } from '../features/accounts/acountsSlice';
import { useSelector } from 'react-redux';
import { SearchPage } from '../components/search/searchPage';


function App() {
  const accounts = useSelector(selectAccounts)
  return (
    <Router>
    <MyHeader />
    <main className='main-content'>
    <section className='main-content__posts-list'>

      <Routes>
        {Object.values(accounts).map(entry => (
          <>
                <Route 
                  key={entry.rdit}
                  path={`/${entry.rdit}`} 
                  element={<Posts url={entry.jsonUrl} />}/>
  
                  <Route path={`${entry.rdit}/search`} element={<SearchPage />}/> 


</>
              ))}




      </Routes>
      </section>
      <Acounts />
    </main>
    </Router>
  );
}

export default App;