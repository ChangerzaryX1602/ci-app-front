"use client";

import ProfileCard from "../profilecard/profile-card";

type Profile = {
  name: string;
  role: string;
  image: string;
  about: string;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    github?: string;
  };
};

const profiles: Profile[] = [
  {
    name: "Chatchanan",
    role: "Software Developer",
    image: "/profiles/best.jpg",
    about: "Fongt",
    socialLinks: {
      facebook: "https://www.facebook.com/fong.f.tarathep.f.fong",
      linkedin: "https://www.linkedin.com/in/tarathep-butka-277672316/",
      github: "https://github.com/TarathepButka",
    },
  },
  {
    name: "Naruebet Sriwarom",
    role: "Software Developer",
    image: "/profiles/best.jpg",
    about: "Best",
    socialLinks: {
      facebook: "https://www.facebook.com/naruebet.sriwarom",
      linkedin: "https://www.linkedin.com/in/naruebet-sriwarom-680012316/",
      github: "https://github.com/bste101",
    },
  },
  {
    name: "Naruebet Sriwarom2",
    role: "Software Developer",
    image: "/profiles/best.jpg",
    about: "Best",
    socialLinks: {
      facebook: "https://www.facebook.com/naruebet.sriwarom",
      linkedin: "https://www.linkedin.com/in/naruebet-sriwarom-680012316/",
      github: "https://github.com/bste101",
    },
  },
  {
    name: "Naruebet Sriwarom3",
    role: "Software Developer",
    image: "/profiles/best.jpg",
    about: "Best",
    socialLinks: {
      facebook: "https://www.facebook.com/naruebet.sriwarom",
      linkedin: "https://www.linkedin.com/in/naruebet-sriwarom-680012316/",
      github: "https://github.com/bste101",
    },
  },
  {
    name: "Naruebet Sriwarom4",
    role: "Software Developer",
    image: "/profiles/best.jpg",
    about: "Frank",
    socialLinks: {
      facebook: "https://www.facebook.com/putthipong.kiti/",
      linkedin: "www.linkedin.com/in/putthipong-kiti",
      github: "https://github.com/putthipong-kiti",
    },
  },
];

export default function ProfilePage() {
  return (
    <div className="w-full items-center flex flex-wrap gap-8 lg:justify-center">  
      <div className="hidden lg:flex w-full justify-between gap-8">
        {profiles.slice(0, 3).map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>

        <div className="hidden lg:flex w-full justify-around gap-8 mt-4 lg:w-2/3 ">
        {profiles.slice(3).map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>

      <div className="flex flex-col lg:hidden w-full items-center space-y-4 mt-4">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
}
