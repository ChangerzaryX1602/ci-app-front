"use client"
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

const AppNavbar = () => {
    const [language, setLanguage] = useState("English");

    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "about" },
        { name: "Help", href: "help" },
    ];

    return (
        <div className="bg-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <Link href="/" className="text-2xl font-bold text-purple-700">
                    RAG Chat
                </Link>
                
                <ul className="flex space-x-6">
                    {navigation.map((menu, index) => (
                        <li key={index}>
                            {menu.href === "/" ? (
                                <Link href="/" className="text-lg text-purple-600 hover:text-purple-800">
                                    {menu.name}
                                </Link>
                            ) : (
                                <ScrollLink
                                    to={menu.href}
                                    smooth={true}
                                    spy={true}
                                    offset={-70}
                                    className="text-lg text-purple-600 hover:text-purple-800 cursor-pointer"
                                >
                                    {menu.name}
                                </ScrollLink>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="flex items-center space-x-20">
                    <select
                        className="bg-purple-800 text-white px-4 py-2 rounded-md cursor-pointer"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="English">English</option>
                        <option value="Thai">ไทย</option>
                    </select>

                    <div className="inline-block ml-4 text-purple-600 hover:text-purple-800">
                        <Link href="/login">Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default AppNavbar;
