import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    userNotes: [],
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
    },
    editNoteContent: (state, action) => {
      state.userNotes = state.userNotes.map((item) => {
        if (item.note_id === action.payload.note_to_editId) {
          item.note_content = action.payload.content_to_update;
        }
        return item;
      });
    },

    deleteUserNote: (state, action) => {
      state.userNotes = state.userNotes.filter(
        (item) => item.note_id !== action.payload
      );
    },
  },
});

export const { addNewNote, editNoteContent, deleteUserNote } =
  noteSlice.actions;

export default noteSlice.reducer;
