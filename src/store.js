import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Redux";

export const store = configureStore({
  devTools: import.meta.env.NODE_ENV !== "production",
  reducer: rootReducer,
});
