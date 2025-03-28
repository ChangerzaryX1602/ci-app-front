import React from 'react'
import { Facebook, Github, Linkedin } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

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

type ProfileCardProps = {
    profile: Profile;
};



const Newcard = ({ profile }: ProfileCardProps) => {
    const { name, studentid, image, socialLinks } = profile;

    return (
            <Card className="w-60 justify-between shadow-lg rounded-2xl overflow-hidden relative mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-4" >
                <div className="bg-purple-600 h-20 w-full"></div>
                <div className="flex justify-center -mt-10">
                    <Image src={image} alt="Landing Page" width={120} height={120} className="rounded-full" />
                </div>
                <CardHeader className="flex flex-col items-center">
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{studentid}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center gap-3">
                    {socialLinks.facebook && (
                        <Link href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                            <Facebook />
                        </Link>
                    )}
                    {socialLinks.linkedin && (
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin />
                        </a>
                    )}
                    {socialLinks.github && (
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                            <Github />
                        </a>
                    )}
                </CardContent>
            </Card>

    )
}

export default Newcard
