import React from "react";
import NavList from "./list";
import classnames from "classnames";

const Navigation = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <nav
      className={classnames(
        "absolute top-[105px] z-10 w-full",
        "transition-all duration-500 ease-in",
        "md:static md:z-auto md:flex md:w-auto md:items-center md:opacity-100",
        {
          "left-0 opacity-100": isOpen === true,
          "-left-full opacity-0": isOpen === false,
        }
      )}
    >
      <ul
        className="flex flex-col divide-y divide-blue-400 
      md:flex-row md:space-x-5 md:divide-transparent md:bg-gray-50"
      >
        <NavList name="Home" />
        <NavList name="Promotions" promotions />
        <NavList name="Destinations" />
        <NavList name="Contact" />
        <NavList name="Account" />
      </ul>
    </nav>
  );
};

export default Navigation;
