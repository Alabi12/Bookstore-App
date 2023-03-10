import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from '../components/AddBook';
import Book from '../components/Book';
import { loadBooks } from '../Redux/books/books';

const Home = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  return (
    <>
      <div className="app-container">
        {Object.keys(books).map((id) => (
          <Book
            key={id}
            id={id}
            title={books[id][0].title}
            author={books[id][0].author}
            category={books[id][0].category}
          />
        ))}
        <AddBook />
      </div>
    </>
  );
};

export default Home;
