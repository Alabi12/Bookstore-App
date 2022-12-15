import React from 'react';

const AddBook = () => (
  <div className="addBook">
    <form>
      <label htmlFor="title">
        Title
        <input type="text" id="title" placeholder="Title" />
      </label>
      <label htmlFor="author">
        Author
        <input type="text" id="author" placeholder="Author" />
      </label>
      <button type="button">Add Book</button>
    </form>
  </div>
);

export default AddBook;
