import React from "react";
import ProfilePage from "../profilepage/profile-page";

const AboutUS = () => {
  return (
    <div
      id="about"
      className="mt-36 mb-36 flex flex-col items-center text-center"
    >
      <div className="text-3xl font-bold text-purple-600 mb-6">About</div>
      <ProfilePage />
    </div>
  );
};

export default AboutUS;