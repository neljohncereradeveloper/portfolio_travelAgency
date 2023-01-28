import React from "react";
import Image from "next/image";
import Ratings from "../ratings";
import classnames from "classnames";

type Props = {
  img: any;
  place: string;
  content: string;
  altImg: string;
  lastImg?: boolean;
  left?: boolean;
};

const Destination = ({
  img,
  place,
  content,
  altImg,
  lastImg = false,
  left = false,
}: Props) => {
  return (
    <div className="flex md:flex-row flex-col mb-10 md:mb-0 shadow-lg p-5 md:shadow-none md:p-0">
      {/*If Image is not left hidden on small screens*/}
      {left && (
        <div
          className={classnames(
            "md:flex-1 md:relative md:w-full md:h-96 md:block hidden",
            {
              "md:mb-32": lastImg === false,
              "md:mb-0": lastImg === true,
            }
          )}
        >
          <Image
            src={img}
            alt={altImg}
            layout="fill"
            priority={true}
            className="rounded"
          />
        </div>
      )}
      {/* Content */}
      <div
        className={classnames(
          "flex-1 flex flex-col justify-center items-center md:justify-start md:items-start p-0",
          {
            "md:pl-16": left === true,
            "md:pr-16": left === false,
          }
        )}
      >
        <h3 className="uppercase font-bold text-xl text-blue-700 mb-2 md:text-2xl">
          {place}
        </h3>
        <hr className="w-1/2" />
        <h4 className="font-normal text-base text-blue-700 md:text-lg">
          Ratings
        </h4>
        <Ratings />
        {/* This image is hidden on md screen and up */}
        <div className={classnames("relative w-3/4 my-2 h-32 md:hidden")}>
          <Image
            src={img}
            alt={altImg}
            layout="fill"
            priority={true}
            className="rounded"
          />
        </div>
        <p className="text-justify leading-loose text-base md:text-lg">
          {content}
        </p>
        <button
          type="button"
          className="inline-block py-2 w-40 bg-blue-600 text-white font-semibold text-base 
        leading-tight uppercase rounded shadow-md mt-5
        hover:bg-blue-700 hover:shadow-lg 
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
        active:bg-blue-800 active:shadow-lg 
        transition duration-150 ease-in-out
        md:py-4 md:w-56 md:text-lg"
        >
          Book NOW
        </button>
        <hr className="md:w-full w-3/4" />
      </div>
      {/*If Image is left hidden on small screens*/}
      {!left && (
        <div
          className={classnames(
            "md:flex-1 md:relative md:w-full md:h-96 md:block hidden",
            {
              "md:mb-32": lastImg === false,
              "md:mb-0": lastImg === true,
            }
          )}
        >
          <Image
            src={img}
            alt={altImg}
            layout="fill"
            priority={true}
            className="rounded"
          />
        </div>
      )}
    </div>
  );
};

export default Destination;
