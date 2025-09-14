import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode : localStorage.getItem("theme") || "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers:{
    toggleTheme: (state)=>{
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.mode);
      document.documentElement.setAttribute("data-theme", state.mode);
    },
  },
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer

//TODO: save counter history in localStorage.