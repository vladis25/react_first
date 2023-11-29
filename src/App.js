import { createContext, useState } from 'react';
import { Routes, Route } from "react-router";

import './app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Products from "./components/Products";
import HomePage from "./components/HomePage";
import RegistrationForm from "./components/RegistrationForm";
import RegistrationPage from "./components/RegistrationPage";

export const UsersContext = createContext();

const App = () => {
const [userCount, setUserCount] = useState('');

  return (
    <UsersContext.Provider value={{userCount, setUserCount}}>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
        </Routes>        
        <Footer />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
