import { useSelector, useDispatch } from 'react-redux';
import { updateUserSettings } from '../redux/user/actions';

const SettingsForm: React.FC = () => {
  const dispatch = useDispatch();
  const userSettings = useSelector((state: any) => state.user.settings);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    dispatch(updateUserSettings({ ...userSettings, [name]: checked }));
  };

  return (
    <div className="p-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          name="darkMode"
          checked={userSettings.darkMode}
          onChange={handleChange}
          className="mr-2"
        />
        Dark Mode
      </label>
      <label className="flex items-center mt-2">
        <input
          type="checkbox"
          name="emailNotifications"
          checked={userSettings.emailNotifications}
          onChange={handleChange}
          className="mr-2"
        />
        Email Notifications
      </label>
      {/* Add more settings as needed */}
    </div>
  );
};

export default SettingsForm;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type Settings = {
//   darkMode: boolean;
//   emailNotifications: boolean;
// };

// type Profile = {
//   name: string;
//   email: string;
//   bio: string;
// };

// type UserState = {
//   settings: Settings;
//   profile: Profile;
// };

// const initialState: UserState = {
//   settings: {
//     darkMode: false,
//     emailNotifications: true,
//   },
//   profile: {
//     name: '',
//     email: '',
//     bio: '',
//   },
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     updateUserSettings: (state, action: PayloadAction<Settings>) => {
//       state.settings = action.payload;
//     },
//     updateUserProfile: (state, action: PayloadAction<Profile>) => {
//       state.profile = action.payload;
//     },
//   },
// });

// export const { updateUserSettings, updateUserProfile } = userSlice.actions;

// export default userSlice.reducer;
