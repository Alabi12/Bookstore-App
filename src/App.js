import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import NavBar from './components/navBar';
import Categories from './components/categories';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
