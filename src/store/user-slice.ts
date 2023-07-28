import { User } from "@/types/User";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  username: "",
  email: ""
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      //store user data in the store
      state = action.payload.user;
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