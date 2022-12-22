import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/books/books';

const SingleBook = () => {
  const [data, setData] = useState({
    title: '',
    author: '',
    category: 'Fiction',
  });

  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      ...data,
    };
    dispatch(addBook(newBook));
    // setData({ title: '', author: '', category: '' });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={changeHandler}
          placeholder="Book Title"
        />
        <input
          type="text"
          name="author"
          value={data.author}
          onChange={changeHandler}
          placeholder="Author"
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default SingleBook;
