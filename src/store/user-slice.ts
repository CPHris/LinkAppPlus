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
      avatarImg: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
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