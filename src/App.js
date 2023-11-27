import { createContext, useState } from 'react';

import './app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


export const UsersContext = createContext();

const App = () => {
const [userCount, setUserCount] = useState('');

  return (
    <UsersContext.Provider value={{userCount, setUserCount}}>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
