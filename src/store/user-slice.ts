import { User } from "@/types/User";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  _id: "64c24e9f6dd93215123c2e12",
  username: "patata",
  email: "patata@gmail.com",
  linkPages: [
    {
      pageid: "page1",
      name: "page1",
      avatarImg: "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor erat mi, at dapibus nisl vulputate et. Etiam vestibulum, dolor at sodales venenatis, nisl massa mattis mauris, vel pretium nisi velit nec risus. Morbi sem mi, feugiat vitae nisl commodo, vulputate dignissim ex.",
      backgroundImg: "https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000&t=st=1690479611~exp=1690480211~hmac=a296a912f664c46cb81ece08ee7d2658fe8e916abfbd520d1db1414af9d46202",
      links: [
        {
          img: "https://w7.pngwing.com/pngs/968/223/png-transparent-logo-twitch-logos-brands-icon-thumbnail.png",
          title: "Title of my first link",
          subtitle: " Subtitle of my first link",
          url: "http://twitch.tv",
        },
        {
          img: "https://w7.pngwing.com/pngs/968/223/png-transparent-logo-twitch-logos-brands-icon-thumbnail.png",
          title: "Title of my second link",
          subtitle: "Subtitle of my second link",
          url: "http://twitch.tv"
        }
      ],
      _id: "64c2ac24b7cee64086ad0c72"
    }
  ]
};

// const initialState: User = {
//   username: "",
//   email: "",
//   linkPages: []
// }

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
    //   replaceLinkPage: (state, action) => {
    //     const newPage = action.payload;
    //     let existingPage = state.linkPages.find(page => page.pageid === newPage.pageid);
    //     console.log("🚀 ~ file: user-slice.ts:55 ~ state.linkPages:", state.linkPages);
    //     console.log("🚀 ~ file: user-slice.ts:58 ~ existingItem:", existingPage);
    //     if (existingPage && newPage) {
    //       existingPage.name = newPage.name;
    //       existingPage.pageid = newPage.pageid;
    //       existingPage.description = newPage.description;
    //       existingPage.avatarImg = newPage.avatarImg;
    //       existingPage.links = [...newPage.links];
    //     }
    //   },
    //   deleteLinkPage: (state, action) => {
    //     // delete link page
    //   }
  }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;