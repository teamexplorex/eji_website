import { createSlice } from "@reduxjs/toolkit";

const defaultDict = {
  home: {
    blogs: [],
  },
};

const initialState = defaultDict;

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateHome: (state, action) => {
      state.home = { ...state.home, ...action.payload };
    },
  },
});

export default homeSlice.reducer;
export const { updateHome } = homeSlice.actions;