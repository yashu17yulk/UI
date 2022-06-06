import React from "react";
import "../Assets/styles/Foot-bar.css";
import l1 from "../Assets/Images/l1.jpg";
import fb from "../Assets/Images/fb.jpg";
import hphone from "../Assets/Images/hfone.svg";
import border from "../Assets/Images/brde.svg";
import chat from "../Assets/Images/CHAT.svg";
import apple from "../Assets/Images/apple.svg";
import playstore from "../Assets/Images/pstore.svg";

import { Row, Col } from "react-bootstrap";
export const Footer = () => {
  return (
    <div className="foot-bar">
      <div className="logo1">
        <img src={l1} alt="Logo" className="l1" />
        <p className="lo1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore{" "}
        </p>
        <img src={fb} alt="Logo" className="fb" />
      </div>

      <div className="logo2">
        <Row className="flex">
          <Col className="hd">QUICK LINKS</Col>
          <Col className="col1">Products</Col>
          <Col className="col1">Classfieds</Col>
          <Col className="col1">Contact us</Col>
          <Col className="col1">Login</Col>
          <Col className="col1">Sign Up</Col>
        </Row>
      </div>

      <div className="logo21">
        <Row className="flex">
          <Col className="hd1">CUSTOMER AREA</Col>
          <Col className="col2">My Account</Col>
          <Col className="col2">Orders</Col>
          <Col className="col2">Tracking List</Col>
          <Col className="col2">Terms</Col>
          <Col className="col2">Privacy Policy</Col>
          <Col className="col2">Return policy</Col>
          <Col className="col2">My Cart</Col>
        </Row>
      </div>
      <div className="logo22">
        <Row className="flex">
          <Col className="hd2">VENDOR AREA</Col>
          <Col className="col3">Partner with us</Col>
          <Col className="col3">Traning</Col>
          <Col className="col3">Procedures</Col>
          <Col className="col3">Terms</Col>
          <Col className="col3">Privacy Policy</Col>
        </Row>
      </div>

      <div className="logo3">
        <Row>
          <Col className="hd2"> CONTACT</Col>
          <Col className="col4">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit,
            sed do eiusmod tempor incididunt ut
          </Col>
          <Col>
            <img src={hphone} alt="Logo" className="call" />
            <p className="q">Have any question?</p>
            <p className="no">+ 123 456 789</p>
          </Col>
          <Col className="bcol">
            {" "}
            <img src={border} alt="Logo" className="border11" />
            <img src={chat} alt="Logo" className="border12" />
          </Col>
        </Row>

        <Row>
          <Col className="glogo">
          <img src={apple} alt="Logo" className="apple1" />
            <p className="d11">Download on the</p>
            <p className="a1">App Store</p>
          </Col>
          <Col className="glogo1">
             
            <img src={playstore} alt="Logo" className="play1" />
            <p className="play2" >GET IT ON</p>
            <p className="play3">Google Play</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
