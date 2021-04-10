import React from 'react';

import UserInformationForm from '../components/UserInformationForm';

const Index = () => {
  return (
    <div className="flex flex-col 2xl:max-w-5xl md:px-0 px-2 w-full mx-auto justify-center">
      <h1 className="text-4xl text-center">Welcome to React Hook Form V7</h1>
      <UserInformationForm />
    </div>
  );
};

export default Index;
