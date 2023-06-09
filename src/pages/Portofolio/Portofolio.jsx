import React from "react";
import { Parallax } from "react-parallax";
import { yogabackground, yogabinaruser, yogabinaradmin } from "../../assets";
import { Button } from "react-bootstrap";
import "./Portofolio.css";

const Portofolio = () => {
  return (
    <>
      <Parallax
        className="backgroundportofolio"
        bgImage={yogabackground}
        bgImageAlt="yogabackground"
        strength={300}
      >
        <div className="welcomeportofolio">Welcome to my Portofolio</div>
      </Parallax>
      <div className="portocontainer">
        <div className="listjudul">
          <div className="judul">Binar Cademy as User</div>
          <a href="https://bcr-platinum-user.vercel.app/">
            <Button variant="success"> See More Detail </Button>
          </a>
        </div>
        <img
          className="imgportofolio"
          src={yogabinaruser}
          alt="yogabinaruser"
        />
      </div>
      <div className="portocontainer">
        <div className="listjudul">
          <div className="judul">Binar Cademy as Admin</div>
          <a href="https://bcr-platinum-admin.vercel.app/login">
            <Button variant="success"> See More Detail </Button>
          </a>
        </div>
        <img
          className="imgportofolio"
          src={yogabinaradmin}
          alt="yogabinaradmin"
        />
      </div>
    </>
  );
};

export default Portofolio;
