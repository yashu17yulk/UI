import React from 'react';
//import {Container,Row,Col} from "react-bootstrap";
import "../Assets/styles/Navbar.css"
import { Row, Col} from "react-bootstrap";
import mlogo from "../Assets/Images/mle1.jpg";
import backg from "../Assets/Images/backg.svg";
import arrowd from "../Assets/Images/arrowd.svg";
import search from "../Assets/Images/search.svg";
import heart from "../Assets/Images/heart.svg";
import buck from "../Assets/Images/buck.svg";
import men from "../Assets/Images/men.svg";

 export  const Navbar = () => {
  return (
    <div className="navbar-header">  
 
      <Row className="main-row">
     
       <Col  > 
       <img src={mlogo} alt="Logo" className="myl1"  />
       </Col>      
       <Col> 
       <img src={backg} alt="Logo" className="bacg"  />
       <p className="cls1">Classifieds</p>
       <img src={arrowd} alt="Logo" className="ard"  /></Col>  
         <Col className="sh1"></Col>
         <Col className="sh2"> search here...</Col>
         <Col>   <img src={search} alt="Logo" className="se1"/>
          </Col>
          <Col>
          <img src={heart} alt="Logo" className="hr1"/> 
          </Col>
          <Col>
          <img src={buck} alt="Logo" className="bu1"/> 
          </Col>
           <Col className="bg11"></Col>
           <Col className="bg12">4</Col>
           <Col>
           <img src={men} alt="Logo" className="men"/> 
           </Col>
           <Col className="bgc"></Col>
           <Col className="bg112">Classifieds</Col>
      </Row>
    
      </div>
  )
}

export default Navbar;