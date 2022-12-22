import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import SingleBook from './SingleBook';
import { setBooks } from '../Redux/books/books';
import Book from './Book';

const BookList = () => {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const getBooksFromServer = async () => {
    axios({
      method: 'GET',
      url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XxADzklnTkRWXlOgSbjV/books',
    }).then((res) => {
      const mBooks = [];
      const { data } = res;
      for (let i = 0; i < Object.keys(data).length; i += 1) {
        const id = Object.keys(data)[i];
        const bookDetails = data[Object.keys(data)[i]];
        const { title, author } = bookDetails[0];
        const book = {
          id,
          title,
          author,
        };
        mBooks.push(book);
      }
      dispatch(setBooks(mBooks));
    });
  };

  useEffect(() => {
    getBooksFromServer().catch((error) => {
      console.log('error', error);
      dispatch(setBooks(Book));
    });
  }, [dispatch]);

  return (
    <div>
      {booksList.map((hBook) => (
        <Book
          key={hBook.id}
          title={hBook.title}
          author={hBook.author}
          id={hBook.id}
          type="Nothing to display"
        />
      ))}
      <SingleBook />
    </div>
  );
};

export default BookList;
