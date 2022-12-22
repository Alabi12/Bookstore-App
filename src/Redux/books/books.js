import axios from 'axios';

// Books Display
const books = [];

// Actions
const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';
const GET_BOOKS = 'books/books/GET_BOOKS';
const SET_BOOKS = 'books/books/SET_BOOKS';

// Action Creators
export const getBooks = () => ({ type: GET_BOOKS });
export const setBooks = (books) => ({ type: SET_BOOKS, books });
export const addBook = (data) => async (dispatch) => {
  await axios({
    method: 'post',
    url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XxADzklnTkRWXlOgSbjV/books',
    data,
  });
  dispatch({ type: ADD_BOOK });
  dispatch(getBooks());
  dispatch(setBooks());
};

export const removeBook = (id) => async (dispatch) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XxADzklnTkRWXlOgSbjV/books/${id}`);
  dispatch({ type: REMOVE_BOOK, payload: id });
  dispatch(getBooks());
  dispatch(setBooks());
};

// Reducer
const booksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state];
    }

    case REMOVE_BOOK: {
      return state.filter((widget) => widget.id !== action.payload);
    }

    case GET_BOOKS: {
      axios({
        method: 'GET',
        url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XxADzklnTkRWXlOgSbjV/books',
        headers: {},
      }).then((response) => {
        const data = JSON.parse(JSON.stringify(response.data));
        for (let i = 0; i < Object.keys(data).length; i += 1) {
          const id = Object.keys(data)[i];
          const bookDetails = data[Object.keys(data)[0]];

          const { title, author } = bookDetails[0];
          const book = {
            id,
            title,
            author,
          };
          state.push(book);
        }
      });
      return state;
    }
    case SET_BOOKS: {
      return action.books;
    }
    default:
      return state;
  }
};

export default booksReducer;
