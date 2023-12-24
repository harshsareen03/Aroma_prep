import React from "react";
import { Navbar, Nav, Container, Carousel, Row, Col } from "react-bootstrap";

const Header = () => {
    const currentYear= new Date().getFullYear()
  return (
    <>
    
    <footer className="mt-5" style={{backgroundColor:'black', color:'white', fontFamily:'impact'}}>
      <Container >
        <Row>
          <Col className="text-center">
            <p>&copy; {currentYear} Your Company Name. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
          
        
      
    </>
  );
};

export default Header;
