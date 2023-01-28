import Image from "next/image";
import React from "react";
import Ratings from "../../destinations/ratings";
import img from "../../../../assets/images/eden.jpg";
import classnames from "classnames";
import Flex from "../../../shared/flex";

type Props = {
  name: string;
  message: string;
};

const Review = ({ message, name }: Props) => {
  return (
    <div className="snap-center h-72  md:px-16 px-4 rounded shawdow-lg bg-violet-50 flex flex-col">
      <div className="flex md:space-x-5 space-x-3 pt-10 w-full mb-5">
        <div className={classnames("relative md:w-24 md:h-24 w-16 h-16")}>
          <Image
            src={img}
            alt="Review Image"
            layout="fill"
            priority={true}
            className="rounded-full"
          />
        </div>
        <Flex.Col>
          <p className="md:text-lg md:font-bold text-base font-bold">{name}</p>
          <hr className="md:my-3 my-2" />
          <Ratings />
        </Flex.Col>
      </div>
      <hr className="mb-3" />
      <p className="text-justify text-base md:text-lg">{message}</p>
    </div>
  );
};

export default Review;
