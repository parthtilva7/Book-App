// redux/bookSlice.js
import {createSlice} from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    borrowedBooks: [],
  },
  reducers: {
    borrowBook: (state, action) => {
      state.borrowedBooks.push(action.payload);
    },
    returnBook: (state, action) => {
      state.borrowedBooks = state.borrowedBooks.filter(
        book => book.id !== action.payload,
      );
    },
  },
});

export const {borrowBook, returnBook} = bookSlice.actions;
export default bookSlice.reducer;
