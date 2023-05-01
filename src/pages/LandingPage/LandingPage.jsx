import React from "react";
import Loader from "./Loader/Loader";
import YogaIntroduce from "./YogaIntroduce/YogaIntroduce";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <Loader></Loader>
      <YogaIntroduce></YogaIntroduce>
      {/* <Portofolio></Portofolio> */}
    </>
  );
};

export default LandingPage;
