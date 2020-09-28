import { createSlice } from "@reduxjs/toolkit";

// redux toolkit slice of store with initial state & reducers included
export const mainSlice = createSlice({
  name: "main",
  initialState: {
    colour: '',
  },
  reducers: {
    addColour: (state, action) => {
      state.colour = action.payload;
    },
  },
});

// export reducers to be called in comps
export const { addColour } = mainSlice.actions;

// export the current store state
export const selectMain = (state) => state.main.colour;

export default mainSlice.reducer; // export the slice to the store
