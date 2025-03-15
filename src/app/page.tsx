import { ThemeButton } from "@/components/button/theme-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-4/5">
        <ThemeButton />
        <div className="flex justify-end items-center">
          <Image
            className="dark:invert"
            src="/landing-page/robot.svg"
            alt="robot"
            width={105}
            height={105}
            priority
          />
          <div className="space-y-2">
            <div className="text-[#201860] text-6xl font-bold">RAG Chat</div>
            <div className="text-[#6B5F81] text-xl">
              AI-powered chatbot for ENKKU
            </div>
          </div>
        </div>

        <div className="relative flex flex-col -top-6">
          <div className="flex">
            <Image
              className="dark:invert"
              src="/landing-page/kku-logo.svg"
              alt="kku-logo"
              width={105}
              height={105}
              priority
            />
            <Image
              className="dark:invert"
              src="/landing-page/enkku.svg"
              alt="enkku"
              width={105}
              height={105}
              priority
            />
          </div>
          <div className="space-y-6">
            <div className="text-4xl font-bold">
              Welcome to the Future of AI at the Faculty of Engineering,
              <br />
              Khon Kaen University
            </div>
            <div className="text-[#6B5F81] text-xl">
              Seamless conversations. Intelligent answers. A smarter way to
              explore knowledge.
            </div>
          </div>

          <div className="relative flex justify-start mt-6">
            <button className="rounded-3xl border-4 border-[#9B27C6] px-12 py-1 font-bold text-xl">
              Get Started
            </button>
            <Image
              src="/landing-page/cursor.svg" // ไฟล์ cursor
              alt="cursor"
              width={70}
              height={70}
              className="absolute left-44 top-6"
            />
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0">
        <Image
          src="/landing-page/wave.svg"
          alt="wave"
          width={10}
          height={10}
          className="w-full absolute bottom-0 z-0"
        />
      </div>
    </div>
  );
}
