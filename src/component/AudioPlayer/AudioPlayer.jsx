import React from "react";
import ReactAudioPlayer from "react-audio-player";
import beyondTheTime from "../../assets/beyondthetime.mp3";

function AudioPlayer() {
  return (
    <div>
      <ReactAudioPlayer src={beyondTheTime} autoPlay />
    </div>
  );
}

export default AudioPlayer;
