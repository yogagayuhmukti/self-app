import React from "react";
import { Parallax } from "react-parallax";
import { yogabackground, yogabinaruser, yogabinaradmin } from "../../assets";
import { Button } from "react-bootstrap";
import "./Portofolio.css";

const Portofolio = () => {
  return (
    <>
      <Parallax
        className="backgroundparallax"
        bgImage={yogabackground}
        bgImageAlt="yogabackground"
        strength={200}
      >
        <div className="welcomeportofolio">Welcome to my Portofolio</div>
      </Parallax>
      <div className="listjudul">
        <div className="judul">Binar Cademy as User</div>
        <a href="https://bcr-platinum-user.vercel.app/">
          <Button variant="success"> See More Detail </Button>
        </a>
      </div>
      <Parallax
        className="backgroundparallax"
        bgImage={yogabinaruser}
        bgImageAlt="yogabinaruser"
        strength={200}
      ></Parallax>
      <div className="listjudul">
        <div className="judul">Binar Cademy as Admin</div>
        <a href="https://bcr-platinum-admin.vercel.app/login">
          <Button variant="success"> See More Detail </Button>
        </a>
      </div>
      <Parallax
        className="backgroundparallax"
        bgImage={yogabinaradmin}
        bgImageAlt="yogabinaradmin"
        strength={200}
      ></Parallax>
    </>
  );
};

export default Portofolio;
