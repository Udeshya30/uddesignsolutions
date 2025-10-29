import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.scss";
import logo from "/logo-name.png"; // replace with your company logo path

export default function TopNavbar() {
  return (
    <Navbar expand="lg" className="ud-navbar fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="nav-logo d-flex align-items-center">
          <img src={logo} alt="UDDesignSolutions" className="me-2" />
          {/* <span>UDDesignSolutions</span> */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
