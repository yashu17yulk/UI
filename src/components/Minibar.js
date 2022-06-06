import React from "react";
import "../Assets/styles/Minibar.css";
import { Container, Row, Col} from "react-bootstrap";
import arrow from "../Assets/Images/arrow.png";

export const Minibar = () => {
  return (
    <div className="main-row110">
      <Container fluid>
        <Row className="main-row198">
          <Col className="main-column10"> 
          All Categories
 
          <img src={arrow} alt="Logo" className="arrows" />
          
          </Col>
          <Col className="main-column111">Books</Col>
          <Col className="main-column111">Electronics </Col>
          <Col className="main-column111"> Real Estate </Col>
          <Col className="main-column111"> Cars-Bikes</Col>
          <Col className="main-column111"> Dorm-Furniture</Col>
          <Col className="main-column111"> Men</Col>
          <Col className="main-column111">Women</Col>
          <Col className="main-column111"> Music</Col>
          <Col className="main-column111">Hobbies</Col>
          <Col className="main-column111">Games</Col>
          <Col className="main-column111"> Kids</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Minibar;
