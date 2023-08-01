import { User } from "@/types/User";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  username: "default",
  email: "default",
  linkPages: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.linkPages = [...action.payload.linkPages];
    },
    addNewLinkPage: (state, action) => {
      const newState = [...state.linkPages];
      newState.push(action.payload);
      state.linkPages = [...newState];
    },
    deleteLinkPage: (state, action) => {
      // delete link page
      const newState = [...state.linkPages];
      state.linkPages = newState.filter(page => page.pageid !== action.payload);
    }
  }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;