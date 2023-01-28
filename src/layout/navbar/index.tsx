import React from "react";
import classnames from "classnames";
import { Logo } from "./logo";
import Navigation from "./navigation";

const Navbar = () => {
  const [open, setOPen] = React.useState(false);
  const handleClose = () => {
    setOPen((prev) => !prev);
  };
  return (
    <header
      className="relative flex h-full flex-col shadow-lg
    md:h-24 md:flex-row"
    >
      <Logo handleClose={handleClose} />
      <Navigation isOpen={open} />
    </header>
  );
};

export default Navbar;
