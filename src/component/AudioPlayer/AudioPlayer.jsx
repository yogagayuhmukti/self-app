import React from "react";
import ReactAudioPlayer from "react-audio-player";
import beyondTheTime from "./beyondthetime.ogg";

function AudioPlayer() {
  return (
    <div>
      <ReactAudioPlayer
        className="AudioPlayer"
        src={beyondTheTime}
        autostart="true"
        controls
        loop
      />
    </div>
  );
}

export default AudioPlayer;
