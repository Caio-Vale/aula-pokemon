'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)

  function helloWord() {
    const message = "Hello, Word"
    console.log(message);
  }

  useEffect(() => {
    helloWord()
  }, [count]) 

  return (
    <>
    <div className="flex flec-col w-full h-screen justify-center items-center">
      Constador: {count}   
      <button onClick={() => setCount(count + 1)} className="w-11 border-2 rounded mx-2"> + </button>
      <button onClick={() => setCount(count - 1)} className="w-11 border-2 rounded mx-2"> - </button>
    </div>
    </>
  );
}
