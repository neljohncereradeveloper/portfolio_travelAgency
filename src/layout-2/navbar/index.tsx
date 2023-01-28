import React from "react";
import { Logo } from "./logo";

const Navbar = () => {
  const [open, setOPen] = React.useState(false);
  const handleClose = () => {
    setOPen((prev) => !prev);
  };
  return (
    <nav className="flex w-full px-16 py-4 z-20">
      <div className="flex-1 flex items-center">
        <Logo />
        <ul className="w-full flex items-center justify-center space-x-10">
          <li className="text-lg uppercase font-normal track-wider cursor-pointer">
            Home
          </li>
          <li className="text-lg uppercase font-normal track-wider">
            Destinations
          </li>
          <li className="text-lg uppercase font-normal track-wider">
            Promotions
          </li>
          <li className="text-lg uppercase font-normal track-wider">
            About Us
          </li>
        </ul>
      </div>
      <ul className="flex-1 flex justify-end space-x-10 items-center">
        <li className="text-lg uppercase font-black track-widest cursor-pointer">
          Signin
        </li>
        <li
          className="text-lg uppercase font-black track-widest px-8 py-3 
        border-4 border-black cursor-pointer"
        >
          Register
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
