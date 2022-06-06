import React from 'react';
import "../Assets/styles/Products.css";
import { Row, Col, Container } from "react-bootstrap";
import eclipsel from '../Assets/Images/Ellipsel.svg';
import eclipselr from '../Assets/Images/Ellipser.svg';
import arrowl from '../Assets/Images/arrowl.svg';
import arrowr from '../Assets/Images/arrowr.svg';
import arrow55 from "../Assets/Images/arrow55.svg";
import img11 from "../Assets/Images/img11.jpg";
import img12 from '../Assets/Images/img12.jpg';
import img13 from '../Assets/Images/img13.jpg';
import img14 from '../Assets/Images/img44.jpg';


export const Products = () => {
    return (
        <div className="products">
            <Container> 
              <Row className="prod11">

               
                  <Col className="product-logo"> 
                  Classified Products on<br></br>the week
                  </Col>
                  <Col>
                  <img src={eclipsel} alt="Logo" className="e1"/>
                  <img src={arrowl} alt="Logo" className="e2" />  
                  </Col>
                  <Col>
                  <img src={ eclipselr} alt="Logo" className="e3" />
                  <img src={arrowr} alt="Logo" className="e4"/>
                  </Col>
                  <Col className="e5"></Col>
                  <Col className="e6">Explore</Col>
                  <Col className="e7">
                   
                  <img src={arrow55} alt="Logo" className="e7"/>
                  </Col>
                 <Col>
                  
                 <img src={img11} alt="Logo" className="e9"/>
                 <img src={img12} alt="Logo" className="e10"/>
                 <img src={img13} alt="Logo" className="e11"/>
                 <img src={img14} alt="Logo" className="e12"/>



                 </Col>



              </Row>
              </Container>
        </div>
    )
}

export default Products;