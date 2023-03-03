import React from "react";

// Import react-router-dom
import { Link } from "react-router-dom";

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
          <Navbar.Brand href="#home">
            <img src={unlamLogo} className="navbar_logo" alt="Logo marca" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to={"/"}>
                <Nav.Item className="nav_text">Inicio</Nav.Item>
              </Link>
              <Link to={"/productos"}>
                <Nav.Item className="nav_text">Productos</Nav.Item>
              </Link>

              <NavDropdown
                className="nav_text"
                title="Categorias"
                id="basic-nav-dropdown"
              >
                <Nav.Item className="nav_text_drop">
                  <Link to={"/categoria/proyector"}>Proyectores</Link>
                </Nav.Item>

                <Nav.Item className="nav_text_drop">
                  <Link to={"/categoria/notebook"}>Notebooks</Link>
                </Nav.Item>
              </NavDropdown>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
