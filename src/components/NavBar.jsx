import React from "react";

// Import components from react-bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Import components propios
import CartWidget from "./CartWidget";

// Import images
import unlamLogo from "../assets/logo_unlam.svg";



function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={unlamLogo} className="navbar_logo" alt="Logo marca" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-dark" href="#home">
                Inicio
              </Nav.Link>
              <Nav.Link className="text-dark" href="#link">
                Proyectores
              </Nav.Link>
              <Nav.Link className="text-dark" href="#link">
                Notebooks
              </Nav.Link>
              <Nav.Link className="text-dark" href="#link">
                Instrumentos
              </Nav.Link>
            </Nav>
          <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
