import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    step: 1,
  },
  reducers: {
    increse: (state)=>{
      state.value += state.step;
    },
    decrease: (state)=>{
      state.value > 0 ? state.value -= 1 : 0;
    },
    reset:(state)=>{
      state.value = 0;
    },
    setStep: (state, action)=>{
      state.step = action.payload;
    },
  },
});

export const {increse, decrease, reset, setStep} = counterSlice.actions;
export default counterSlice.reducer;