"use client";
import React, { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DotWave } from "ldrs/react";
import "ldrs/react/DotWave.css";
import { useTheme } from "next-themes";

const AuthHandler = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async (code: string) => {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      if (!res.ok) {
        router.push("/");
        // throw new Error("Failed to authenticate");
      }
      const data = await res.json();
      localStorage.setItem("name", data.username);
      router.push("/chat");
    };

    if (code) {
      handleAuth(code);
    }
  }, [code]);

  return null;
};

const Page = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <AuthHandler />
      </Suspense>
      <DotWave
        size="47"
        speed="1"
        color={`${theme == "dark" ? "white" : "black"}`}
      />
    </div>
  );
};

export default Page;
