import { createContext, useState } from 'react';
import { Routes, Route } from "react-router";

import './app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Products from "./components/Products";
import HomePage from "./components/HomePage";
import RegistrationPage from "./components/RegistrationPage";
import RefInput from "./components/RefInput";
import NotFoundPage from './components/NotFoundPage';
import { HOME_PATH, PRODUCTS_PATH, REF_PATH, REGISTRATION_PATH, NOTFOUND_PATH, SINGLE_USER_PATH } from './constants/routes-links';
import UserPage from './components/userPage/UserPage';

export const UsersContext = createContext();

const App = () => {
const [userCount, setUserCount] = useState('');

  return (
    <UsersContext.Provider value={{userCount, setUserCount}}>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path={PRODUCTS_PATH} element={<Products />} />
          <Route path={HOME_PATH} element={<HomePage />} />
          <Route path={REF_PATH} element={<RefInput />} />
          <Route path={REGISTRATION_PATH} element={<RegistrationPage />} />
          <Route path={SINGLE_USER_PATH} element={<UserPage />} />
          <Route path={NOTFOUND_PATH} element={<NotFoundPage />} />
        </Routes>        
        <Footer />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
