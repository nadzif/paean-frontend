import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "../../assets/css/navBar.css";
import Logo from "../../assets/media/images/logo/logo.png";
import LogoWhite from "../../assets/media/images/logo/logo-white.png";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import FooterComp from "./footer";

const NavbarComp = () => {
  const [onTopPage, setOnTopPage] = useState(true);

  const handleMouseOver = () => {
    setOnTopPage(false);
  };

  const handleMouseOut = () => {
    if (window.scrollY >= 56) {
      setOnTopPage(false);
    } else {
      setOnTopPage(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleMouseOut();
    });
  }, []);

  return (
    <>
      <Navbar
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        collapseOnSelect
        expand="sm"
        bg={onTopPage ? "transparent" : "white"}
        sticky="top"
        variant={onTopPage ? "dark" : "light"}
        style={{ boxShadow: onTopPage ? "" : "0 2px 4px 0 rgba(0,0,0,.2)" }}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <Image className="imgLogoNav" src={onTopPage ? LogoWhite : Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/" className="buttonSizeNav" style={{ color: onTopPage ? "white" : "black" }}>
                HOME
              </Nav.Link>
              <Nav.Link href="/science" className="buttonSizeNav" style={{ color: onTopPage ? "white" : "black" }}>
                SCIENCE
              </Nav.Link>
              <Nav.Link href="/aboutus" className="buttonSizeNav" style={{ color: onTopPage ? "white" : "black" }}>
                ABOUT US
              </Nav.Link>
              <Nav.Link href="/news" className="buttonSizeNav" style={{ color: onTopPage ? "white" : "black" }}>
                NEWS
              </Nav.Link>
              <Nav.Link href="/blog" className="buttonSizeNav" style={{ color: onTopPage ? "white" : "black" }}>
                BLOG
              </Nav.Link>
              <Nav.Link href="/contactus" className="buttonSizeNav" style={{ color: onTopPage ? "white" : "black" }}>
                CONTACT US
              </Nav.Link>
              {/* <Nav.Link href="/career" className="buttonSizeNav" style={{ color: onTopPage ? "white" : "black" }}>
                CAREER
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <FooterComp />
    </>
  );
};

export default NavbarComp;
