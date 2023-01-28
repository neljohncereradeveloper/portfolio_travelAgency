import React from "react";
import Destinations from "./destinations";
import Feedback from "./feedback";
import LandingPage from "./landing-page";
import Reviews from "./reviews";

const Dashboard = () => {
  return (
    <>
      <LandingPage />
      <hr />
      <Destinations />
      <hr />
      <Feedback />
      <hr />
      <Reviews />
    </>
  );
};

export default Dashboard;
