import { configureStore } from "@reduxjs/toolkit";
import MortgageSlice from "../features/mortgages/MortgagesSlice";

export const store = configureStore({
  reducer: {
    mortgages: MortgageSlice,
  },
});
