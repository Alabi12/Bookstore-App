import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksSlice from './books/books';
import categoriesReducer from './categories/categories';

const rootReduce = {
  reducer: {
    books: booksSlice.reducer,
    categories: categoriesReducer,
  },
};

const store = configureStore(rootReduce, applyMiddleware(thunk));

export default store;
