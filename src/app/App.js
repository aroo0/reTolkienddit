import './App.css';
import Posts from '../features/posts/posts';
import Acounts from '../features/accounts/acounts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyHeader } from '../components/header/header';
import { selectAccounts } from '../features/accounts/acountsSlice';
import { useSelector } from 'react-redux';


function App() {
  const accounts = useSelector(selectAccounts)
  return (
    <Router>
    <MyHeader />
    <main className='main-content'>
      <Routes>
        {Object.values(accounts).map(entry => (
                <Route 
                  key={entry.rdit}
                  path={`/${entry.rdit}`} 
                  element={<Posts url={entry.jsonUrl} />} />
              ))}

      </Routes>
      <Acounts />

    </main>
    </Router>
  );
}

export default App;
