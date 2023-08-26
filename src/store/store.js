// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './noteSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    notes: notesReducer, // Assign the notesReducer to the "notes" state slice
  },
});

export default store; // Export the configured Redux store
