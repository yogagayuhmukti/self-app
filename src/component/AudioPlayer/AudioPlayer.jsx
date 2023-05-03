import React from "react";
import ReactAudioPlayer from "react-audio-player";
import beyondTheTime from "./beyondthetime.mp3";

function AudioPlayer() {
  return (
    <div>
      <ReactAudioPlayer src={beyondTheTime} autoPlay />
    </div>
  );
}

export default AudioPlayer;
