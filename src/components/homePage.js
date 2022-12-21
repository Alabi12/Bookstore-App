import React from 'react';
import BookList from './bookList';
import Book from './book';

const HomePage = () => (
  <div className="homePage">
    <BookList />
    <Book />
  </div>
);

export default HomePage;
