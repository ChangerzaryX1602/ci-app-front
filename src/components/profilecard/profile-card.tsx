import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Profile = {
  name: string;
  role: string;
  student_id: string;
  image: string;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    github?: string;
  };
};

type ProfileCardProps = {
  profile: Profile;
};

export default function ProfileCard({ profile }: ProfileCardProps) {
  const { name, role, student_id, image, socialLinks } = profile;

  return (
    <Card className="w-4/5 md:w-80 shadow-lg rounded-2xl overflow-hidden">
      <div className="bg-purple-600 h-20 w-full"></div>
      <div className="flex justify-center -mt-10">
        <Image
          className="rounded-full border-4 border-white"
          src={image}
          alt={`${name}'s profile picture`}
          width={80}
          height={80}
        />
      </div>

      <CardHeader className="text-center">
        <CardTitle className="text-lg font-bold">{name}</CardTitle>
        <p className="text-gray-500 text-sm">{student_id}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </CardHeader>

      <CardContent className="flex justify-center gap-3">
        {socialLinks.facebook && (
          <Link
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </Link>
        )}
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        )}
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        )}
      </CardContent>
    </Card>
  );
}
