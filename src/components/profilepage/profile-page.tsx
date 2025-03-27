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
    <div className="w-full items-center flex flex-wrap gap-8">
      <div className="w-full flex justify-between">
        {profiles.slice(0, 3).map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>

      <div className="w-full flex justify-around mt-4">
        {profiles.slice(3).map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
}
