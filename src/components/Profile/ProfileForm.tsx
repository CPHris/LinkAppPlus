import { http } from '@/apiService';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { userActions } from '@/store/user-slice';
import { useState } from 'react';
import { RootState } from '@/store';
import { toast } from 'react-toastify';
import Link from 'next/link';

const ProfileForm: React.FC = () => {
  const router = useRouter();
  const userProfile = useSelector((state: RootState) => state.user);
  const [tempName, updateTempName] = useState<string | null | undefined>(
    userProfile.username,
  );
  const [tempEmail, updateTempEmail] = useState<string | null | undefined>(
    userProfile.email,
  );

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    updateTempEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = userProfile.username;
    const newUsername = tempName;
    const email = tempEmail;
    const response = await http.update(username, email, newUsername);
    if (response && response.status === 200) {
      toast.success('Email updated successfully');
      return router.push(`/user/${tempName}`);
    } else {
      toast.error('User already exists');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
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
      <Link
        href={`/user/${userProfile.username}`}
        className="text-white bg-red-400 rounded-md p-3 mr-3 font-semibold"
      >
        Cancel
      </Link>
      <button
        type="submit"
        className="text-white bg-green-400 rounded-md p-3 font-semibold"
      >
        Update email
      </button>
    </form>
  );
};

export default ProfileForm;
