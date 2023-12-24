// In header required components i)cart ,ii)login iii)categories
// install react-bootstrap for bootstrap js,css and html by npm i react-bootstrap
// open App component and setup Routes to navigate one component to another component
// open https://react-bootstrap.netlify.app/ and click on navbar component and select navbar by copying and paste to your header.jsx file
import React from "react";
import { Navbar, Nav, Container,Carousel,Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styles from '../Navbar.module.css'
import { VscSignIn } from "react-icons/vsc";
import { FaCartShopping } from "react-icons/fa6";


const Header = () => {
  return (
    <>
      <Navbar  variant="dark" collapseOnSelect style={{backgroundColor:'grey', fontFamily:'impact'}}>
        <Container style={{ maxWidth: "1900px" }} > 
          <LinkContainer to="/">
            <Navbar.Brand><Image src="../Images/icon.png"/>-
            perfumes</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <LinkContainer to="/">
                <Nav.Link >Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link >About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link >Contact us</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to="/cart">
                <Nav.Link><FaCartShopping /></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signin">
                <Nav.Link ><VscSignIn />SignIn</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
