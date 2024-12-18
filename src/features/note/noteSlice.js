import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    // Converts strings to an array. if anything is stored in the local storage. If not, display an array.
    userNotes: JSON.parse(localStorage.getItem("notes")) || [],
  },
  reducers: {
    addNewNote: (state, action) => {
      const date = new Date();
      state.userNotes = [
        {
          note_id: Math.floor(Math.random() * 9999),
          note_content: action.payload,
          note_createdAt: date.toDateString(),
        },
        ...state.userNotes,
      ];

      // Converts local storage to a string to store notes in the local storage.
      localStorage.setItem("notes", JSON.stringify(state.userNotes));
    },
    editNoteContent: (state, action) => {
      state.userNotes = state.userNotes.map((item) => {
        if (item.note_id === action.payload.note_to_editId) {
          item.note_content = action.payload.content_to_update;
        }
        return item;
      });
      localStorage.setItem("notes", JSON.stringify(state.userNotes));
    },

    deleteUserNote: (state, action) => {
      state.userNotes = state.userNotes.filter(
        (item) => item.note_id !== action.payload
      );
      localStorage.setItem("notes", JSON.stringify(state.userNotes));
    },
  },
});

export const { addNewNote, editNoteContent, deleteUserNote } =
  noteSlice.actions;

export default noteSlice.reducer;
