import { createSlice, current } from "@reduxjs/toolkit";

const userList = localStorage?.getItem("userList")
  ? JSON.parse(localStorage?.getItem("userList"))
  : [];

export const userSlice = createSlice({
  name: "user",
  initialState: {
    list: userList?.length ? userList : [],
    authenticated: { state: false, user: null },
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    login: (state, action) => {
      const userListLocal = current(state.list);
      console.log(userListLocal)
      const inputUser = action.payload;
      console.log(inputUser)
      const searchedUser = userListLocal.find((user) => {
        return (
          user.email === inputUser.email && user.password === inputUser.password
        );
      });
      console.log(searchedUser)

      if (searchedUser) {
        state.authenticated = { state: true, user: searchedUser };
      }
    },
    logout:(state,action) => {
      state.authenticated.state= false;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setList, login, logout } = userSlice.actions;

export default userSlice.reducer;
