import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducers = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
