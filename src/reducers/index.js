import { combineReducers } from 'redux';
import BooksReducer from './reducer-books';
import ActiveBook from './reducer-active-books';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  // state: (state = {}) => state
});

export default rootReducer;
