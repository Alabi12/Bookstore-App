/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/books/books';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="books-container">
      <div className="book-info">
        <h4 className="book-category">{category}</h4>
        <h2 className="book-name">{title}</h2>
        <p className="book-author">{author}</p>
        <div className="book-buttons-container">
          <button type="button" className="book-button">
            Comments
          </button>
          <button
            type="button"
            className="book-button"
            onClick={() => dispatch(removeBook(id))}
          >
            Remove
          </button>
          <button type="button" className="book-button">
            Edit
          </button>
        </div>
      </div>
      <div className="progress-container">
        <div className="circular-progress-bar" />
        <div className="completed">
          <p>57%</p>
          <p>Completed</p>
        </div>
        <div className="divider" />
        <div className="chapter-container">
          <div className="current-chapter">Current Chapter</div>
          <div className="chapter">Chapter 20</div>
          <button type="button" className="update-progress-button">
            Update Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
