import React from "react";
import CImage from "../../../shared/image";
import landingImg from "./landing.jpg";

const Image = () => {
  return (
    <div className="relative flex-1 h-full w-full flex justify-center items-center">
      <div className="absolute inset-0 bg-blue-500/10 z-10"></div>
      <CImage
        img={landingImg}
        altImg="Landing Page Image"
        className="h-full w-full"
      />
    </div>
  );
};

export default Image;
