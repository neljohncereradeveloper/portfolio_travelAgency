import React from "react";
import Content from "./content";
import Destinations from "./destinations";
import Landingpage from "./landingpage";
import Promotions from "./promotions";

const DashboardTwo = () => {
  return (
    <>
      <Landingpage />
      <Promotions />
      <Content />
      <Destinations />
    </>
  );
};

export default DashboardTwo;
