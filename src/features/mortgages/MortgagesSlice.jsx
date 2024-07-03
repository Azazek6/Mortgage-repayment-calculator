/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import {
  convertInterestAnual,
  calculatePayment,
  calculateMonthPayment,
} from "../../helpers/general";

const initialState = {
  value: 0,
};

export const MortgageSlice = createSlice({
  name: "mortgage",
  initialState,
  reducers: {
    resultCalculate: (state, action) => {
      const { amount, term, rate } = action.payload;
      const monthlyInterestRate = convertInterestAnual(rate);
      const numberOfPayments = calculatePayment(term);
      const monthlyPaymen = calculateMonthPayment(
        amount,
        monthlyInterestRate,
        numberOfPayments
      );
      state.value = monthlyPaymen ;
    },
  },
});

export const { resultCalculate } = MortgageSlice.actions;

export default MortgageSlice.reducer;
