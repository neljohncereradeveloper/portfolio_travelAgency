import React from "react";
import Details from "./details";
import Image from "./image";

const LandingPage = () => {
  return (
    <div
      className="bg-gradient-to-r from-violet-300 to-blue-500 shadow-lg bg-white h-[400px]
     md:flex md:h-[550px] md:bg-none
    "
    >
      <Details />
      <Image />
    </div>
  );
};

export default LandingPage;
