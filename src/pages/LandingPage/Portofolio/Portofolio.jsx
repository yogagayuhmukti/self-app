import React from "react";
import { Parallax } from "react-parallax";
import { yogabackground, yogabackground2 } from "../../../assets";

const Portofolio = () => {
  return (
    <>
      <Parallax
        className="backgroundparallax"
        bgImage={yogabackground}
        bgImageAlt="yogabackground"
        strength={200}
      >
        <h1>Hi, I'm Yoga.</h1>
      </Parallax>
      <Parallax
        className="backgroundparallax"
        bgImage={yogabackground2}
        bgImageAlt="yogabackground"
        strength={200}
      >
        Content goes here. Parallax height grows with content height.
      </Parallax>
    </>
  );
};

export default Portofolio;
