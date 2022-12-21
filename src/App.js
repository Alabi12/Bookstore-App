import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Categories from './components/categories';
import Footer from './components/footer';
import HomePage from './components/homePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
