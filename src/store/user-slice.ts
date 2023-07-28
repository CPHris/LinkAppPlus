import { User } from "@/types/User";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  username: "",
  email: "",
  linkPages: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("🚀 ~ file: user-slice.ts:15 ~ action:", action.payload);
      //store user data in the store
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.linkPages = [...action.payload.linkPages];
    },
    addNewLinkPage: (state, action) => {
      //create a new link page
    },
    replaceLinkPage: (state, action) => {
      // modify a certain link page
    },
    deleteLinkPage: (state, action) => {
      // delete link page
    }
  }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;