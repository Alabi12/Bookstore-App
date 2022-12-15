import React from 'react';
import PropTypes from 'prop-types';

const SingleBook = (props) => {
  const { title, author } = props;

  const handleClick = () => {
    alert('Do You really want to delete this book from the list');
  };
  return (
    <div className="singleBook">
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={handleClick}>
        Remove Book
      </button>
    </div>
  );
};

SingleBook.defaultProps = {
  title: '',
  author: '',
};

SingleBook.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default SingleBook;
