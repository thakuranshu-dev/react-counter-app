import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    step: 1,
    recent: [],
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
    setRecent: (state)=>{
      state.recent.push(state.value)
    },
    deleteRecent: (state)=>{
      state.recent=[];
    },
    pickRecent: (state, action)=>{
      state.value = action.payload;
    },
  },
});

export const {increse, decrease, reset, setStep,setRecent,deleteRecent,pickRecent} = counterSlice.actions;
export default counterSlice.reducer;