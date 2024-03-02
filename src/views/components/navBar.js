import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "../../assets/css/navBar.css";
import Logo from "../../assets/media/images/logo/logo.png";
import LogoWhite from "../../assets/media/images/logo/logo-white.png";
import {useEffect, useState} from "react";
import {Link, Outlet, useLocation} from "react-router-dom";
import FooterComp from "./footer";
import {NavDropdown} from "react-bootstrap";
import Usa from "../../assets/media/images/flag/usa.png";
import Korea from "../../assets/media/images/flag/korea.png";
import {LanguageProvider} from "./utils/LanguageProvider";

const NavbarComp = () => {
    const location = useLocation();
    const [onTopPage, setOnTopPage] = useState(true);
    const [language, setLanguage] = useState(localStorage.getItem("lng"));
    const [activeItem, setActiveItem] = useState(location.pathname.substring(1));

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

    const handleLanguage = async (data) => {
        await setLanguage(data)
        await localStorage.removeItem('lng')
        localStorage.setItem('lng', data)
    }

    useEffect(() => {
        if (!localStorage.getItem("lng")) {
            localStorage.setItem('lng', 'kr')
        }
    }, []);

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
                style={{boxShadow: onTopPage ? "" : "0 2px 4px 0 rgba(0,0,0,.2)"}}
            >
                <Container fluid>
                    <Navbar.Brand href="/">
                        <Image className="imgLogoNav" src={onTopPage ? LogoWhite : Logo}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link>
                                <Link
                                    to="/"
                                    className="buttonSizeNav"
                                    style={{
                                        color: onTopPage ? (activeItem === 'home' ? 'rgba(50, 250, 148, 0.8)' : 'white') : (activeItem === 'home' ? 'rgba(50, 250, 148, 0.8)' : 'black'),
                                    }}
                                    onClick={() => {
                                        setActiveItem('home');
                                    }}
                                >
                                    {language === 'en' ? 'HOME' : language === 'kr' ? '집' : ''}
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="/science"
                                    className="buttonSizeNav"
                                    style={{
                                        color: onTopPage ? (activeItem === 'science' ? 'rgba(50, 250, 148, 0.8)' : 'white') : (activeItem === 'science' ? 'rgba(50, 250, 148, 0.8)' : 'black')
                                    }}
                                    onClick={() => {
                                        setActiveItem('science');
                                    }}
                                >
                                    {
                                        language === 'en' ? 'SCIENCE' : language === 'kr' ? '과학' : ''
                                    }
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="/aboutus"
                                    className="buttonSizeNav"
                                    style={{
                                        color: onTopPage ? (activeItem === 'aboutUs' ? 'rgba(50, 250, 148, 0.8)' : 'white') : (activeItem === 'aboutUs' ? 'rgba(50, 250, 148, 0.8)' : 'black')
                                    }}
                                    onClick={() => {
                                        setActiveItem('aboutUs');
                                    }}
                                >
                                    {
                                        language === 'en' ? 'ABOUT US' : language === 'kr' ? '회사 소개' : ''
                                    }
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="/news"
                                    className="buttonSizeNav"
                                    style={{
                                        color: onTopPage ? (activeItem === 'news' ? 'rgba(50, 250, 148, 0.8)' : 'white') : (activeItem === 'news' ? 'rgba(50, 250, 148, 0.8)' : 'black')
                                    }}
                                    onClick={() => {
                                        setActiveItem('news');
                                    }}
                                >
                                    {
                                        language === 'en' ? 'NEWS' : language === 'kr' ? '소식' : ''
                                    }

                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="/career"
                                    className="buttonSizeNav"
                                    style={{
                                        color: onTopPage ? (activeItem === 'career' ? 'rgba(50, 250, 148, 0.8)' : 'white') : (activeItem === 'career' ? 'rgba(50, 250, 148, 0.8)' : 'black')
                                    }}
                                    onClick={() => {
                                        setActiveItem('career');
                                    }}
                                >
                                    {
                                        language === 'en' ? 'CAREER' : language === 'kr' ? '직업' : ''
                                    }
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="/contactus"
                                    className="buttonSizeNav"
                                    style={{
                                        color: onTopPage ? (activeItem === 'contactUs' ? 'rgba(50, 250, 148, 0.8)' : 'white') : (activeItem === 'contactUs' ? 'rgba(50, 250, 148, 0.8)' : 'black')
                                    }}
                                    onClick={() => {
                                        setActiveItem('contactUs');
                                    }}
                                >
                                    {
                                        language === 'en' ? 'CONTACT US' : language === 'kr' ? '문의하기' : ''
                                    }

                                </Link>
                            </Nav.Link>

                            <NavDropdown
                                title={
                                    <Image
                                        className="flag-img"
                                        src={language === 'en' ? Usa : Korea}
                                        alt={language}
                                        roundedCircle
                                        width="35" height="30"
                                    />
                                }
                                id="basic-nav-dropdown"
                                className="dropstart"
                                style={{color: onTopPage ? "white" : "black"}}
                            >
                                <NavDropdown.Item onClick={() => handleLanguage('en')}>
                                    <img src={Usa} alt="en" width="30" height="30"/>
                                    <span className="dropdown-text ms-2">ENGLISH</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleLanguage('kr')}>
                                    <img src={Korea} alt="kr" width="30" height="30"/>
                                    <span className="dropdown-text ms-2">KOREA</span>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LanguageProvider>
                <Outlet/>
                <FooterComp/>
            </LanguageProvider>
        </>
    );
};

export default NavbarComp;
