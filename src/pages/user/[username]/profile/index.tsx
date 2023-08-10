import * as React from 'react';
import Footer from '@/components/Layout/Footer';
import ProfileForm from '@/components/Profile/ProfileForm';

export interface IProfilePageProps {}

const ProfilePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="mb-5 relative shadow-sm">
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-400 relative bg-gray-100 shadow-sm  min-h-[60px]">
            <div className="font-bold text-lg">
              <h1>
                LinkApp<span className="text-cyan-500">Plus</span>
              </h1>
            </div>
          </div>
        </div>
        <main className="mb-auto mx-auto my-auto w-full max-w-2xl">
          <div className="w-full max-w-xs rounded-2xl border p-5 mx-auto shadow-md bg-white">
            <h4 className="font-bold text-center">Update Email</h4>
            <div className="mx-auto my-0 flex justify-center items-center mb-5"></div>
            <ProfileForm />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProfilePage;
