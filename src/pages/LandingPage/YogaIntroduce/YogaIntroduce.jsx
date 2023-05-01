import React from "react";
import { yoga } from "../../../assets";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const YogaIntroduce = () => {
  return (
    <>
      <div className="yogaIntroduce">
        <div className="yogaleft">
          <Card>
            <Card.Body>
              <Card.Title>Hi, I am</Card.Title>
              <div>Yoga Gayuh Mukti</div>
              <Card.Text>Frontend Web Developer</Card.Text>
              <Button variant="primary">My portofolio</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="yogaright">
          <Card>
            <Card.Img
              variant="top"
              className="fotoyoga"
              src={yoga}
              alt="yoga"
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default YogaIntroduce;
