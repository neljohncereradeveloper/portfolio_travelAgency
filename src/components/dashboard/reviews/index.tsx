import React from "react";
import Flex from "../../shared/flex";
import Section from "../../shared/section";
import Review from "./review";

const Reviews = () => {
  return (
    <Section.Col className="bg-gray-50">
      <Section.Title title="Reviews" />
      <Flex.Row
        className="bg-white shadow-lg rounded 
        snap-x scroll-smooth overflow-x-scroll overflow-hidden
        p-5 space-x-5
        md:space-x-16 md:p-10"
      >
        <>
          <Review name="Marco malwit" message="Services are well ahndled" />
          <Review name="Jasmine Malnod" message="Services are well ahndled" />
          <Review name="Jenny Miller" message="Services are well ahndled" />
          <Review name="John Jandaya" message="Services are well ahndled" />
          <Review name="Dianne Cortez" message="Services are well ahndled" />
          <Review name="Paulo Agunti" message="Services are well ahndled" />
        </>
      </Flex.Row>
    </Section.Col>
  );
};

export default Reviews;
