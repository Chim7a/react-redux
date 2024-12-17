import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    userNotes: [],
  },
  reducers: {
    addNewNote: (state, action) => {
      console.log("User added a new note");
    },
  },
});

export const { addNewNote } = noteSlice.actions;

export default noteSlice.reducer;
