"use client";
import React, { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const AuthHandler = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    const handleAuth = async (code: string) => {
      await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
    };

    if (code) {
      handleAuth(code);
    }
  }, [code]);

  return null;
};

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthHandler />
      </Suspense>
      Page
    </div>
  );
};

export default Page;
