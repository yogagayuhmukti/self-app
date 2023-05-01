import React from "react";
import { yoga } from "../../../assets";

const YogaIntroduce = () => {
  return (
    <>
      <div className="yogaIntroduce">
        <div className="yogaleft">
          <div>
            <div>
              <div>
                <h3>Hi, I am</h3>
                <h1>Yoga Gayuh Mukti</h1>
                <h4>Frontend Web Developer</h4>
              </div>
              <p>
                I am an enthusiastic and committed programmer with a deep
                passion for technology. I am seeking to join a company that
                values ethics and maintains high standards. As a good
                communicator and team player, I enjoy collaborating with others
                and contributing to a shared vision of excellence. I am highly
                adaptable and always eager to learn new skills and gain new
                experiences. My dedication to programming and technology is a
                driving force in my life, and I am committed to pursuing my
                passion with hard work, enthusiasm, and a commitment to
                excellence.
              </p>
              <p>
                <strong>Address</strong> Klapagading RT02/03, Kecamatan Wangon,
                Kabupaten Banyumas, Jawa Tengah, Indonesia
              </p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="yogabutton">
                <button variant="success">Work History</button>
                <button variant="success">Skills</button>
                <button variant="success">Education</button>
                <button variant="success">Language</button>
                <button variant="success">Certification</button>
                <button variant="success">PORTOFOLIO</button>
              </div>
            </div>
          </div>
        </div>
        <div className="yogaright">
          <div>
            <img variant="top" className="fotoyoga" src={yoga} alt="yoga" />
          </div>
        </div>
      </div>
    </>
  );
};

export default YogaIntroduce;
