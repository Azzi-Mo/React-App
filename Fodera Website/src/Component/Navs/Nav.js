import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../imgs/logo.png";
import "../Css_Style/Nav.css";

const Navs = () => {
  return (
    <section className="NavBar">

      <Navbar bg="light" expand="lg">

        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className='logo' alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"></Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#link">Explore Foods</Nav.Link>
              <Nav.Link href="#link">Reviews</Nav.Link>
              <Nav.Link href="#link">FAQ</Nav.Link>
              <Nav.Link href="#link">1800789123</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </section>
  );
};

export default Navs;
