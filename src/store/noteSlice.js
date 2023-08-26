// src/notesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [
    {
      "id": 1,
      "title": "Grocery List",
      "description": "Milk, eggs, bread, vegetables",
      "date": "2023-08-27T10:30:00Z"
    },
    {
      "id": 2,
      "title": "Meeting Notes",
      "description": "Discuss project timeline and goals",
      "date": "2023-08-28T14:00:00Z"
    },
    {
      "id": 3,
      "title": "Travel Plans",
      "description": "Book flights, find accommodations",
      "date": "2023-08-29T09:00:00Z"
    }
  
  ],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    editNote: (state, action) => {
      const { id, title, description } = action.payload;
      const noteToEdit = state.find(note => note.id === id);
      if (noteToEdit) {
        noteToEdit.title = title;
        noteToEdit.description = description;
      }
    },
    deleteNote: (state, action) => {
      const idToDelete = action.payload;
      return state.filter(note => note.id !== idToDelete);
    },
  },
});

export const { addNote, editNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
