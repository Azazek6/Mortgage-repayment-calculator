/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import {
  convertInterestAnual,
  calculatePayment,
  calculateMonthPayment,
  totalRepayment,
} from "../../helpers/general";

const initialState = {
  value: 0,
  total_payment: 0,
};

export const MortgageSlice = createSlice({
  name: "mortgage",
  initialState,
  reducers: {
    resultCalculate: (state, action) => {
      const { amount, term, rate, type } = action.payload;
      if (type == "Repayment") {
        const monthlyInterestRate = convertInterestAnual(rate);
        const numberOfPayments = calculatePayment(term);
        const monthlyPaymen = calculateMonthPayment(
          amount,
          monthlyInterestRate,
          numberOfPayments
        );
        state.value = monthlyPaymen;
      }
    },
    resultPaymentMonth: (state, action) => {
      const { term } = action.payload;
      state.total_payment = totalRepayment(state.value, term);
    },
    resetAll: (state) => {
      state.value = 0;
    },
  },
});

export const { resultCalculate, resultPaymentMonth, resetAll } =
  MortgageSlice.actions;

export default MortgageSlice.reducer;
