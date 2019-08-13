import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
  return (
    <Navbar variant="light" bg="light" fixed="bottom" data-ref={"footer"}>
      <Container className="justify-content-end py-4">
        <small>Copyright &copy; 2019 Tim Willis</small>
      </Container>
    </Navbar>
  );
};

export default Footer;
