import classnames from "classnames";
import Image from "next/image";
import React from "react";

type Props = {
  img: any;
  altImg: string;
  className?: string;
  imgClassname?: string;
};

const CImage = ({ img, altImg, className, imgClassname }: Props) => {
  return (
    <div className={classnames("relative", className)}>
      <Image
        src={img}
        alt={altImg}
        layout="fill"
        priority={true}
        className={imgClassname}
      />
    </div>
  );
};

export default CImage;
