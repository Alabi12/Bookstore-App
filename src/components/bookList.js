import React from 'react';
import { useSelector } from 'react-redux';
import SingleBook from './singleBook';
import Book from './Book';

const BookList = () => {
  const booksList = useSelector((state) => state.books);
  return (
    <div>
      {booksList.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
          type="Nothing to display"
        />
      ))}
      <SingleBook />
    </div>
  );
};

export default BookList;
