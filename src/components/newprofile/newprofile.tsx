"use client";

import Newcard from "../newcard/new-card";

type Profile = {
    name: string;
    studentid: string;
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
        studentid: "653040624-9",
        image: "/profiles/best.jpg",
        about: "Fongt",
        socialLinks: {
            facebook: "https://www.facebook.com/naruebet.sriwarom",
            linkedin: "https://www.linkedin.com/in/naruebet-sriwarom-680012316/",
            github: "https://github.com/bste101",
        },
    },
    {
        name: "Naruebet Sriwarom",
        studentid: "653040624-9",
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
        studentid: "653040624-9",
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
        studentid: "653040624-9",
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
        studentid: "653040624-9",
        image: "/profiles/best.jpg",
        about: "Best",
        socialLinks: {
            facebook: "https://www.facebook.com/naruebet.sriwarom",
            linkedin: "https://www.linkedin.com/in/naruebet-sriwarom-680012316/",
            github: "https://github.com/bste101",
        },
    },
];

export default function NewProfile() {
    return (
        <div className="w-full items-center flex flex-wrap gap-8">
            <div className="flex flex-col items-center p-6">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 xl:grid-cols-3 max-w-7xl">
                    {profiles.map((profile, index) => (
                        <Newcard key={index} profile={profile} />
                    ))}
                </div>
            </div>
        </div>
    );
}

