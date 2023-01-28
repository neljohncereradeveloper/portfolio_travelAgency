import React from "react";

const Details = () => {
  return (
    <div className="relative pl-16 flex-1 h-full w-full flex flex-col justify-center items-start">
      <h1 className="mt-10 text-4xl leading-loose font-black tracking-widest text-gray-500 uppercase">
        <span
          className="text-7xl font-black bg-gradient-to-r from-pink-500 to-blue-700
        decoration-clone bg-clip-text text-transparent tracking-widest uppercase"
        >
          Wanna Go To
        </span>
        <br />
        The Best <br />
        <span
          className="text-5xl font-black bg-gradient-to-r from-gray-500 to-blue-700
        decoration-clone bg-clip-text text-transparent tracking-widest uppercase"
        >
          Places Of Davao
        </span>
      </h1>
      <p className="w-5/6 text-2xl font-normal text-gray-500 text-justify my-8 leading-10">
        Discover all that Davao has to offer. Offering a variety of options for
        every traveler, thoughtful amenities, and pleasant service. Book safely
        with us.
      </p>
      <button
        type="button"
        className="inline-block w-64 py-3 animate-bounce rounded bg-violet-600 text-2xl font-normal 
        uppercase leading-tight text-white shadow-md 
        transition duration-150 ease-in-out 
        hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg 
        focus:outline-none focus:ring-0 
        active:bg-violet-800 active:shadow-lg md:w-64
        md:animate-none md:py-5 md:text-2xl md:font-semibold"
      >
        Book Now
      </button>
      {/* <div
        className="mix-blend-lighten h-60 w-60 rounded-full bg-violet-500/20 
      absolute bottom-0 left-0 filter blur-xl"
      ></div>
      <div
        className="mix-blend-lighten h-60 w-60 rounded-full bg-pink-500/20 
      absolute bottom-5 left-20 filter blur-xl"
      ></div>
      <div
        className="mix-blend-lighten h-60 w-60 rounded-full bg-violet-500/20 
      absolute bottom-12 left-0 filter blur-xl"
      ></div> */}
    </div>
  );
};

export default Details;
