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
      console.log(state.userNotes);
    },
  },
});

export const { addNewNote } = noteSlice.actions;

export default noteSlice.reducer;
