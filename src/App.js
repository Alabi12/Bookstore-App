import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
