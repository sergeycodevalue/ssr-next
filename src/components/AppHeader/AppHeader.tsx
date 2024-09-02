"use client";

import Link from 'next/link';

export default () => {
  return (
    <div
      className="sticky top-0 flex flex-row justify-between items-center h-16 px-8 py-1 z-50"
      style={{ backgroundColor: "#aa00ff" }}
    >
      <img
        src="/pokemon_logo.png"
        alt="Pokemon Logo"
        className="w-[auto] h-[100%]"
      />
      <div className="flex">
        <Link href="/" className="text-xl text-black hover:text-blue">
          Home
        </Link>
      </div>
      <div className="flex">
        <a href="#" className="text-xl text-white hover:text-blue">
          Login
        </a>
      </div>
    </div>
  );
};
