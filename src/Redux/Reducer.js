import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  tasks: [],
};

export const Slice = createSlice({
  name: "Reducer",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
  },
});
export const { setUser } = Slice.actions;
export default Slice.reducer;
