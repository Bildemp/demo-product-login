import { createSlice } from "@reduxjs/toolkit";

const productList = localStorage?.getItem("productList")
  ? JSON.parse(localStorage?.getItem("productList"))
  : [];
export const productSlice = createSlice({
  name: "product",
  initialState: {
    list: productList?.length ? productList : [],
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
      console.log(action.payload);
      const list = localStorage?.getItem("productList")
        ? JSON.parse(localStorage?.getItem("productList"))
        : [];
      list.push(action.payload);
      localStorage.setItem("productList", JSON.stringify(list));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setList } = productSlice.actions;

export default productSlice.reducer;
