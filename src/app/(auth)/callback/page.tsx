"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
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
  }, []);

  return <div>Page</div>;
};

export default Page;
