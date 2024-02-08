import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
  name: 'display',
  initialState: {
    value: "",
  },
  reducers: {
    setDisplay: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setDisplay } = displaySlice.actions;

export default displaySlice.reducer;
