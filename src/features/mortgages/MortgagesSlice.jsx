/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
}

export const MortgageSlice = createSlice({
  name: "mortgage",
  initialState,
  reducers: {
    resultCalculate: (state, action) => {
      // state.value = 15
      console.log(action.payload);
    },
  },
});

export const { resultCalculate } = MortgageSlice.actions;

export default MortgageSlice.reducer;
