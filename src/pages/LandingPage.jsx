import React from "react";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import WhyUS from "../components/WhyUs";

const LandingPage = () => {
  return (
    <>
      <Service />
      <WhyUS />
      <Testimonial />
      <Banner />
      <Faq />
    </>
  );
};

export default LandingPage;
