import React from "react";
import Loader from "../../component/Loader/Loader";
import YogaIntroduce from "../../component/YogaIntroduce/YogaIntroduce";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <Loader></Loader>
      <YogaIntroduce></YogaIntroduce>
    </>
  );
};

export default LandingPage;
