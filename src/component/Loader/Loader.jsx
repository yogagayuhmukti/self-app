import React from "react";
import { yogaintro } from "../../assets";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

const Loader = () => {
  return (
    <div id="loader">
      <img className="yogaintro" src={yogaintro} alt="yogaintro" />
      <div id="wrapperload">
        <div className="elem">
          <h1>Hi, Welcome to ...</h1>
        </div>
        <div className="elem">
          <h1>Yoga Gayuh Mukti</h1>
        </div>
        <div className="elem">
          <h1>Frontend Website</h1>
        </div>
        <div className="elem">
          <h1>Let's hire me !</h1>
        </div>
      </div>
      <AudioPlayer />
    </div>
  );
};

export default Loader;
