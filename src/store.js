import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Redux/Reducer.js";

export const store = configureStore({
  devTools: import.meta.env.NODE_ENV !== "production",
  reducer: Reducer,
});
