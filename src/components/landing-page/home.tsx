import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div id="home" className="h-[80vh] w-4/5 flex justify-between items-center">
      <div className="w-2/5">
        <DotLottieReact src=".\animation\ai.lottie" loop autoplay />
      </div>

      <div className="w-3/5 space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-5xl font-bold text-[#8B1E3F]">KKU</span>
          <span className="text-5xl font-bold text-[#1E3F8B]">Advisor</span>
          <span>
            <div className="flex items-center space-x-4 mt-6">
              <span className="text-gray-500 text-sm">Powered by</span>
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
          <span className="text-[#5A2D59] font-bold">
            Welcome to the Future of AI at the Faculty of Engineering, Khon Kaen
            University
          </span>
        </div>
        <p className="text-gray-600 text-lg">
          Seamless conversations. Intelligent answers. A smarter way to explore
          knowledge.
        </p>

        <button
          className="rounded-full border-2 border-purple-500 text-purple-500 px-6 py-2 text-lg font-semibold hover:bg-purple-500 hover:text-white transition"
          onClick={() => router.push("/testside")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
