import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <Navbar className="nav" data-ref={"header"}>
      <Container>
        <Navbar.Brand href="/" className="px-2">
          <img width="230" alt="logo" src={logo} />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
