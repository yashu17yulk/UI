import React from "react";
import "../Assets/styles/Mainbar.css";
import { Row, Col, Container } from "react-bootstrap";
import Rectangle from "../Assets/Images/Rectangle 9.png";
import placeholder from "../Assets/Images/placeholder.png";
//import Placeh  from '../Images/placeh.png';
import font from "../Assets/Images/font.png";
import placeh from "../Assets/Images/placeh.png";
import d112 from "../Assets/Images/d11.jpg";
import d4 from "../Assets/Images/star1.jpg";
import d5 from "../Assets/Images/d12.jpg";
import d6 from "../Assets/Images/d13.jpg";
import d7 from "../Assets/Images/d14.jpg";
import d8 from "../Assets/Images/d15.jpg";
import d9 from "../Assets/Images/d16.jpg";
import d10 from "../Assets/Images/d17.jpg";
import d11 from "../Assets/Images/d18.jpg";
import d12 from "../Assets/Images/d19.jpg";
import d13 from "../Assets/Images/d20.jpg";
import load from "../Assets/Images/load.jpg";
export const Mainbar = () => {
  return (
    <div className="main-bar">
      <Container fluid>
        <Row className="main-row11">
          <Col className="main-col11">
            {" "}
            <h1>
              <img className="main-image1"alt="Logo" src={placeh} />
            </h1>
          </Col>

          <Col className="main-col2">
            {" "}
            <h1>
              <img className="main-image"alt="Logo" src={Rectangle} />
            </h1>
            <Col className="main-col29">
              <img className="main-i"alt="Logo" src={font} />
            </Col>
          </Col>
          {/* <Col className="main-col200">    
                   <img className="main-image4" src={font} /> 
                   </Col> */}

          <Col className="main-col33">
            <h1>
              <img className="main-image3" alt="Logo"src={placeholder} />
            </h1>{" "}
          </Col>
        </Row>
        <Row className="main-col44">
          <Col>
            <img src={load} alt="Logo"className="main-image404" />
          </Col>
        </Row>

        <Row>
          <Col className="best-deals">best deal</Col>
          <Col className="viewall">View all</Col>
          <Col>
            <img src={d112} alt="Logo" className="d112" />
            <p className="d2">
              Fitness and <br></br>activity Tracker
            </p>
            <p className="d3">$33.3</p>
            <img src={d4} alt="Logo" className="d4" />
          </Col>
          <Col>
            <img src={d5} alt="Logo" className="d5"/>
            <p className="d61">
            Ice White <br></br>Airpods  
            </p>
            <p className="d71">$521.3</p>
            <img src={d4} alt="Lo " className="d81"/>
          </Col>
          <Col>
          <img src={d6} alt="Logo" className="d6"/> 
          <p className="d611">Xbox White Joystick</p>
          <p className="d6111">$98.4</p>
          <img src={d4} alt="Lo " className="d61111"/>
          </Col>
          <Col>
          <img src={d7} alt="Logo" className="d7"/> 
          <p className="d711">Hazor Mouse Gaming</p>
          <p className="d7111">$21.3</p>
          <img src={d4} alt="Lo " className="d71111"/>
          </Col>
          <Col>
          <img src={d8} alt="Logo" className="d8"/> 
          <p className="d811">Super Boost Headphones</p>
          <p className="d8111">$33.3</p>
          <img src={d4} alt="Lo " className="d81111"/>

          </Col>
          <Col>
          <img src={d9} alt="Logo" className="d9"/> 
          <p className="d911">LG 260 L 3 Star Frost</p>
          <p className="d9111">$333.3</p>
          <img src={d4} alt="Lo " className="d91111"/>
          </Col>
          <Col>
          <img src={d10} alt="Logo" className="d10"/> 
          <p className="d1011"> X-Ray 2 Square PACK</p>
          <p className="d10111">$33.3</p>
          <img src={d4} alt="Lo " className="d101111"/>
          </Col>
          <Col>
          <img src={d11} alt="Logo" className="d1198"/> 
         
          
           
          </Col>
          <Col>
          <img src={d12} alt="Logo" className="d12"/> 
          <p className="d1211"> Levi's Men's Printed T-Shirt</p>
          <p className="d12111">$33.3</p>
          <img src={d4} alt="Lo " className="d121111"/>
          </Col>
          <Col>
          <img src={d13} alt="Logo" className="d13"/> 
          <p className="d1311">  AX1326 Automatic Analog</p>
          <p className="d13111">$33.3</p>
          <img src={d4} alt="Lo " className="d131111"/>
          <p className="d1411">  SONY PLAYSTATION 5</p>
          <p className="d14111">$323.3</p>
          <img src={d4} alt="Lo " className="d141111"/>
          </Col>
        </Row>

        {/* <img className="main-image" src={Rectangle} /> 
         <img className="main-image2" src={placeholder} /> 
         <img className="main-image1" src={Placeh} />  */}
      </Container>
    </div>
  );
};

export default Mainbar;
