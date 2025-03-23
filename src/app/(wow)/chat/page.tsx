"use client"
import React, { useState, useEffect } from "react";

const Page = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("test");
    
  }, [count])

  return (
    <>
      <div>Page</div>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
      <button onClick={() => setCount2((prev) => prev + 1)}>click2</button>
      <div>{count}</div>
    </>
  );
};

export default Page;
