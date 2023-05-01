import React from "react";
// import { welcome } from "../../../assets";

const Loader = () => {
  return (
    <div id="loader">
      <div id="wrapperload">
        <div className="elem">
          <h1>Hi, Welcome to ...</h1>
          {/* <img className="img-loader" src={welcome} alt="welcome" /> */}
        </div>
        <div className="elem">
          <h1>Yoga Gayuh Mukti</h1>
        </div>
        <div className="elem">
          <h1>Curriculum Vitae</h1>
        </div>
        <div className="elem">
          <h1>Portofolio</h1>
        </div>
        <div className="elem">
          <h1>Let's hire me !</h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
