import React from "react";
import Loader from "./Loader/Loader";
// import Portofolio from "./Portofolio/Portofolio";
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
