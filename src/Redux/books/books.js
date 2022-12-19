const initialState = {
  books: [],
};

// Actions
export const ADD_BOOK = 'add-book';
export const REMOVE_BOOK = 'remove-book';
export const GET_BOOKS = 'get-books';
export const SET_BOOKS = 'set-books';

// Action Creators
export function addBook(newBook) {
  return { type: ADD_BOOK, newBook };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.newBook],
      };

    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((newBook) => newBook !== action.id),
      };
    case GET_BOOKS: {
      return state;
    }
    case SET_BOOKS: {
      return action.books;
    }
    default:
      return state;
  }
}
