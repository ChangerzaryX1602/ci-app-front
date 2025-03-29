import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeButton } from "../button/theme-button";

const Home = () => {
  return (
    <div
      id="home"
      className="h-[80vh] md:h-auto w-4/5 flex flex-col md:flex-row md:justify-between items-center md:mb-20"
    >
      <div className="w-full md:w-2/5">
        <DotLottieReact src=".\animation\ai.lottie" loop autoplay />
      </div>

      <div className="w-full md:w-3/5 space-y-4">
        <div className="flex flex-col lg:flex-row items-center space-x-2">
          <div className="flex space-x-2 lg:hidden">
            <span className="text-5xl font-bold text-[#8B1E3F]">KKU</span>
            <span className="text-5xl font-bold text-[#1E3F8B]">Advisor</span>
          </div>
          <span className="hidden lg:block text-3xl lg:text-5xl font-bold text-[#8B1E3F]">
            KKU
          </span>
          <span className="hidden lg:block text-3xl lg:text-5xl font-bold text-[#1E3F8B]">
            Advisor
          </span>
          <span>
            <div className="flex items-center space-x-4 mt-2 mr-6 md:mr-0 md:mt-6">
              <span className="text-gray-500 text-sm dark:text-white">
                Powered by
              </span>
              <Image
                src="/landing-page/kku-logo.svg"
                alt="kku-logo"
                width={50}
                height={50}
                priority
              />
              <Image
                src="/landing-page/enkku.svg"
                alt="enkku"
                width={50}
                height={50}
                priority
              />
            </div>
          </span>
        </div>
        <div className="text-gray-700 font-semibold text-lg">
          <span className="text-[#5A2D59] font-bold dark:text-white">
            Welcome to the Future of AI at the Faculty of Engineering, Khon Kaen
            University
          </span>
        </div>
        <p className="text-gray-600 text-lg dark:text-white">
          Seamless conversations. Intelligent answers. A smarter way to explore
          knowledge.
        </p>
        <div className="flex justify-center md:justify-start items-center space-x-4">
          <button className="rounded-full border-2 border-purple-500 text-purple-500 px-6 py-2 text-lg font-semibold hover:bg-purple-500 hover:text-white transition">
            <Link href={process.env.NEXT_PUBLIC_LOGIN_ENDPOINT as string}>Get Started</Link>
          </button>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
