import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router";
import { Container, Nav, Navbar as Nvb } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
const Navbar = (props) => {
  return (
    <div className={style.Navbar} data-testid="Navbar">
      <Nvb bg="primary" data-bs-theme="dark">
        <Container>
          <Link className="navbar-brand" to={"/"}>
            Navbar
          </Link>
          {/* <Nvb.Brand href="#home">Navbar</Nvb.Brand> */}
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/editor">
              Nouveau
            </Link>
            <Link className="nav-link" to="/editor/2">
              edit id:2
            </Link>
          </Nav>
        </Container>
      </Nvb>
    </div>
  );
};
export default Navbar;
