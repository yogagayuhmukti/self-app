import React, { useState, useRef } from "react";
import {
  yoga,
  yogabackground2,
  email,
  facebook,
  instagram,
  whatsapp,
} from "../../../assets";
import Button from "react-bootstrap/Button";
import ReactWhatsapp from "react-whatsapp";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

const YogaIntroduce = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

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
              <div className="yogaprifileintro">
                <h3>Hi, I am</h3>
                <h1>Yoga Gayuh Mukti</h1>
                <h4>Frontend Web Developer</h4>
              </div>
            </div>
            <div>
              <p className="desktopintro">
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
              <p className="mobileintro">
                I'm a passionate programmer looking for a company with good
                ethics and high standards. I'm a team player who communicates
                well and strives for excellence. I'm adaptable, eager to learn,
                and dedicated to programming and technology.
              </p>
              <p>
                <strong>Address</strong> Klapagading RT02/03, Kecamatan Wangon,
                Kabupaten Banyumas, Jawa Tengah, Indonesia
              </p>
            </div>
            <div className="yogabutton">
              <Button variant="success">Curriculum Vitae</Button>
              <br></br>
              <Button variant="success">Portofolio</Button>
            </div>
            <div className="yogalink">
              <Button
                className="buttonmail"
                ref={target}
                onClick={() => setShow(!show)}
              >
                <img className="yogalinkpic" src={email} alt="email" />
              </Button>
              <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                  <Tooltip id="overlay-example" {...props}>
                    ygmukti@gmail.com
                  </Tooltip>
                )}
              </Overlay>
              <a href="https://www.facebook.com/yogagayuh.mukti?mibextid=ZbWKwL">
                <img className="yogalinkpic" src={facebook} alt="facebook" />
              </a>
              <a href="https://instagram.com/gmstudi0_?igshid=ZDdkNTZiNTM= ">
                <img className="yogalinkpic" src={instagram} alt="instagram" />
              </a>
              <ReactWhatsapp
                className="whatsappbutton"
                number="=+6285326721633"
                message="hello"
              >
                <img className="yogalinkpic" src={whatsapp} alt="whatsapp" />
              </ReactWhatsapp>
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
