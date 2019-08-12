import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <Navbar className="nav">
      <Container>
        <Navbar.Brand href="#" className="px-2">
          <img
            width="230"
            alt="logo"
            src="http://weareloup.com/deploy/images/logo.png"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
