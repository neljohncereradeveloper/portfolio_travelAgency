import React from "react";

const Details = () => {
  return (
    <div
      className="mx-auto flex h-full flex-col items-center justify-center p-10 md:m-0
    md:w-[600px] md:items-start md:justify-center md:pl-16"
    >
      <h1
        className="max-w-2xl text-4xl font-black 
      leading-tight tracking-tight text-gray-900 sm:text-7xl"
      >
        <span
          className="-mx-2 bg-gradient-to-r from-pink-500 to-purple-700 
        decoration-clone bg-clip-text px-2 text-transparent sm:text-7xl"
        >
          Travel
        </span>
        <span
          className="-mx-2 bg-gradient-to-r from-cyan-500 to-blue-500 
        decoration-clone bg-clip-text px-2 text-transparent sm:text-7xl"
        >
          Davao
        </span>
      </h1>
      <h3
        className="my-2 text-lg font-semibold text-gray-50  
      md:my-5 md:text-xl md:tracking-wider md:text-blue-500"
      >
        WHERE YOU CAN NEVER FORGET
      </h3>
      <ul className="flex list-disc flex-col">
        <li
          className="mb-1 text-base font-normal
        text-white md:ml-5 md:text-lg md:tracking-wider md:text-gray-500"
        >
          Davao best places
        </li>
        <li
          className="mb-1 text-base font-normal
        text-white md:ml-5 md:text-lg md:tracking-wider md:text-gray-500"
        >
          Davao best places
        </li>
        <li
          className="mb-1 text-base font-normal
        text-white md:ml-5 md:text-lg md:tracking-wider md:text-gray-500"
        >
          Meet New Friends
        </li>
      </ul>
      <button
        type="button"
        className="mt-6 inline-block w-60 animate-bounce rounded bg-violet-600 py-3 text-lg font-normal 
        uppercase leading-tight text-white shadow-md transition 
        duration-150 ease-in-out 
        hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg 
        focus:outline-none focus:ring-0 
        active:bg-violet-800 active:shadow-lg md:w-64
        md:animate-none md:py-5 md:text-xl "
      >
        Book NOW {">>"}
      </button>
    </div>
  );
};

export default Details;
