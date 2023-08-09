import { http } from '@/apiService';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { userActions } from '@/store/user-slice';
import { useState } from 'react';
import { RootState } from '@/store';
import { User } from '@/types/User';
import { toast } from 'react-toastify';

const ProfileForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userProfile = useSelector((state: RootState) => state.user);
  const [tempName, updateTempName] = useState<string | null | undefined>(
    userProfile.username,
  );
  const [tempEmail, updateTempEmail] = useState<string | null | undefined>(
    userProfile.email,
  );

  const handleChangeName = (e) => {
    const { value } = e.target;
    console.log('handling so hard right now', value, tempName, tempEmail);
    updateTempName(value);
  };

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    updateTempEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = tempName;
    const email = tempEmail;
    const response = await http.update(username, email);
    if (response && response.status === 201) {
      return router.push(`/user/${tempName}`);
    }
    toast.error('User already exists');
  };

  // const handleSubmit = (e, tempEmail, tempName) => {
  //   e.preventDefault();
  //   console.log('Submitting so hard :)', tempName);
  //   // Here you can add the logic to send the updated profile to the server/API.
  //   dispatch(
  //     userActions.updateUserProfile({ username: tempName, email: tempEmail }),
  //   );
  // };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="username"
          value={tempName}
          onChange={handleChangeName}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={tempEmail}
          onChange={handleChangeEmail}
          className="p-2 border rounded w-full"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Update Profile
      </button>
    </form>
  );
};

export default ProfileForm;
