import React from "react";
import classnames from "classnames";

const NavList = ({
  name,
  promotions = false,
}: {
  name: string;
  promotions?: boolean;
}) => {
  return (
    <li
      className={classnames(
        "cursor-pointer bg-blue-500 py-5 px-5",
        "text-lg font-medium uppercase tracking-widest text-white",
        "hover:bg-blue-400",
        "md:py-2 md:px-6 md:text-lg",
        "md:normal-case  ",
        {
          "md:rounded md:bg-blue-500 md:font-semibold md:text-wtite md:hext-white md:hov":
            promotions === true,
          "md:bg-gray-50 md:p-0 md:text-gray-500 md:hover:bg-gray-50":
           
            promotions === false,
        }
      )}
    >
      {name}
    </li>
  );
};

export default NavList;
