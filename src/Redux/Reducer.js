import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  tasks: [],
};

export const Slice = createSlice({
  name: "GeneralReducer",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    setTasks: (state, { payload }) => {
      state.tasks = [...payload];
    },
  },
});
export const { setUser, setTasks } = Slice.actions;
export default Slice.reducer;
