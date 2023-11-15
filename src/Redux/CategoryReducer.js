// import apiCall from "Middlewares/ApiClient";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { apiCallTypes } from "Constants";
//
// const initialState = {
//   isLoading: false,
//   categories: [],
// };
//
// export const CategoryAction = createAsyncThunk(
//   "Category/CategoryAction",
//   async (payload, thunkApi) => {
//     const res = await apiCall("/my/category/list", apiCallTypes.get);
//
//     if (res.error !== true) {
//       return res;
//     }
//     return thunkApi.rejectWithValue(res);
//   }
// );
//
// export const CategorySlice = createSlice({
//   name: "CategoryReducer",
//   initialState,
//   extraReducers: {
//     [CategoryAction.fulfilled]: (state, { payload }) => {
//       state.categories = payload?.data?.data;
//       state.isLoading = false;
//     },
//     [CategoryAction.rejected]: (state) => {
//       state.isLoading = false;
//     },
//     [CategoryAction.pending]: (state) => {
//       state.isLoading = true;
//     },
//   },
// });
//
// export default CategorySlice.reducer;
