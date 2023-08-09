import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { User } from '@/types/User';
import ProfileForm from '@/components/Profile/ProfileForm';
import { userActions } from '@/store/user-slice';
import { useState } from 'react';

export interface IProfilePageProps { }

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Update Profile</h1>
        <ProfileForm />
      </div>
    </div>
  );
};

export default ProfilePage;