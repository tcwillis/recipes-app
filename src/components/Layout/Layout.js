import React from "react";
import Header from "library/Header";
import Footer from "library/Footer";
import { Container } from "react-bootstrap";
import classnames from "classnames";

const Layout = ({ children, className }) => {
  return (
    <div className={classnames("main", className)}>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
