import React from "react";
import ProfilePage from "../profilepage/profile-page";

const AboutUS = () => {
  return (
    <div
      id="about"
      className="w-4/5 xl:w-3/5 mt-36 md:mt-20 mb-36 md:mb-0 flex flex-col items-center text-center"
    >
      <div className="text-3xl font-bold text-purple-600 mb-6">About</div>
      <ProfilePage />
    </div>
  );
};

export default AboutUS;
