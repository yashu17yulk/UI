import React from 'react';
import "../Assets/styles/Topbar.css";
import { Container, Row, Col} from "react-bootstrap";
import logo from "../Assets/Images/phone.svg";
import logo1 from "../Assets/Images/envelope.svg";
import loc from "../Assets/Images/loc.svg";
import sptr from "../Assets/Images/sptr.svg";
import Re12 from "../Assets/Images/dar.jpg";

export const Topbar = () => {
    return (
        <div className="main-container">
       
       
       <Container fluid>
       <Row>
       <Row className="main-row">
       <Col >
       <img src={logo} alt="Logo" className="logo-1" />

       </Col>
       <Col >
       <img src={logo1} alt="Logo" className="logo-2" />

       </Col>
    <Col className="main-column">+221 33 66 22</Col>
    <Col className="main-column1">   support@elextra.io</Col>
    <Col>   <img src={loc} alt="Logo" className="logo-3" />
    </Col>
    <Col className="main-column2">Locations</Col>
     <Col >

     <img src={sptr} alt="Logo" className="logo-4" />
     </Col>
     <Col className="main-column4">$Dollar (us)</Col>
     <Col >
     <img src={Re12} alt="Lo" className="main6" />
     </Col>
     <Col className="main-column5">EN</Col>
     <Col >
     <img src={Re12} alt="Loo" className="main7" /></Col> 
  </Row>
   
  
  </Row>
   
</Container>
    </div>
           

       
    );
}

export default Topbar;
