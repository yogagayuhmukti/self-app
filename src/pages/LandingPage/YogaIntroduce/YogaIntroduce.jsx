import React from "react";
import { yoga, yogabackground2 } from "../../../assets";
import Button from "react-bootstrap/Button";

const YogaIntroduce = () => {
  return (
    <>
      <div className="yogaIntroduce">
        <img
          className="yogabackground"
          src={yogabackground2}
          alt="yogabackground2"
        />
        <div className="yogaleft">
          <div>
            <div className="yogaprofile">
              <img className="mobileintropic" src={yoga} alt="yoga" />
              <div>
                <h3>Hi, I am</h3>
                <h1>Yoga Gayuh Mukti</h1>
                <h4>Frontend Web Developer</h4>
              </div>
            </div>
            <p className="desktopintro">
              I am an enthusiastic and committed programmer with a deep passion
              for technology. I am seeking to join a company that values ethics
              and maintains high standards. As a good communicator and team
              player, I enjoy collaborating with others and contributing to a
              shared vision of excellence. I am highly adaptable and always
              eager to learn new skills and gain new experiences. My dedication
              to programming and technology is a driving force in my life, and I
              am committed to pursuing my passion with hard work, enthusiasm,
              and a commitment to excellence.
            </p>
            <p className="mobileintro">
              I'm a passionate programmer looking for a company with good ethics
              and high standards. I'm a team player who communicates well and
              strives for excellence. I'm adaptable, eager to learn, and
              dedicated to programming and technology.
            </p>
            <p>
              <strong>Address</strong> Klapagading RT02/03, Kecamatan Wangon,
              Kabupaten Banyumas, Jawa Tengah, Indonesia
            </p>
            <div className="yogabutton">
              <Button variant="success">Curriculum Vitae</Button>
              <br></br>
              <Button variant="success">Portofolio</Button>
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
