"use client";

import ProfileCard from "../profilecard/profile-card";

type Profile = {
  name: string;
  role: string;
  student_id: string;
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
    name: "Chatchanan Panyaprasirtkit",
    role: "Backend Developer, Modeler",
    student_id: "653040123-1",
    image: "/profiles/chang.jpg",
    about: "Chang",
    socialLinks: {
      facebook: "https://www.facebook.com/chang.cp.58",
      linkedin: "https://www.linkedin.com/in/tarathep-butka-277672316/",
      github: "https://github.com/ChangerzaryX1602",
    },
  },
  {
    name: "Jidapa Hongklang",
    role: "UX/UI Designer",
    student_id: "653040119-2",
    image: "/profiles/noey.jpg",
    about: "Noey",
    socialLinks: {
      facebook: "https://www.facebook.com/naruebet.sriwarom",
      linkedin: "https://www.linkedin.com/in/naruebet-sriwarom-680012316/",
      github: "https://github.com/bste101",
    },
  },
  {
    name: "Naruebet Sriwarom",
    role: "Frontend Developer",
    student_id: "653040624-9",
    image: "/profiles/best.jpg",
    about: "Best",
    socialLinks: {
      facebook: "https://www.facebook.com/naruebet.sriwarom",
      linkedin: "https://www.linkedin.com/in/naruebet-sriwarom-680012316/",
      github: "https://github.com/bste101",
    },
  },
  {
    name: "Nathachai Charoenchai",
    role: "Frontend Developer",
    student_id: "653040126-5",
    image: "/profiles/train.jpg",
    about: "Train",
    socialLinks: {
      facebook: "https://www.facebook.com/trainnakubb",
      linkedin: "https://www.linkedin.com/in/naruebet-sriwarom-680012316/",
      github: "https://github.com/Trainght",
    },
  },
  {
    name: "Sippakorn Worawattananukul",
    role: "Frontend Developer",
    student_id: "653040146-9",
    image: "/profiles/m.jpg",
    about: "M",
    socialLinks: {
      facebook: "https://www.facebook.com/Sippakorn.M.1",
      linkedin: "https://www.linkedin.com/in/sippa-m/",
      github: "https://github.com/sippam",
    },
  },
];

export default function ProfilePage() {
  return (
    <div className="w-full items-center flex flex-wrap gap-8">
      <div className="hidden lg:flex w-full justify-between gap-8">
        {profiles.slice(0, 3).map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>

      <div className="hidden lg:flex w-full justify-around gap-8 mt-4">
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
