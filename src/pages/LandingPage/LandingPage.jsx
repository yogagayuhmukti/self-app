import React from "react";
import Loader from "../../component/Loader/Loader";
import YogaIntroduce from "../../component/YogaIntroduce/YogaIntroduce";
import AudioPlayer from "../../component/AudioPlayer/AudioPlayer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <AudioPlayer />
      <Loader></Loader>
      <YogaIntroduce></YogaIntroduce>
    </>
  );
};

export default LandingPage;
