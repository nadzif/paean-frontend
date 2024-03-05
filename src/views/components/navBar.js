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
import {ButtonGroup, NavDropdown} from "react-bootstrap";
import Usa from "../../assets/media/images/flag/usa.png";
import Korea from "../../assets/media/images/flag/korea.png";
import {LanguageProvider} from "./utils/LanguageProvider";
import {useTranslation} from "react-i18next";

const NavbarComp = () => {
    const {t} = useTranslation();
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
                                        color: onTopPage ? (activeItem === 'home' ? 'rgba(0, 176, 80, 0.8)' : 'white') : (activeItem === 'home' ? 'rgba(0, 176, 80, 0.8)' : 'black'),
                                    }}
                                    onClick={() => {
                                        setActiveItem('home');
                                    }}
                                >
                                    {t('home')}
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="/science"
                                    className="buttonSizeNav"
                                    style={{
                                        color: onTopPage ? (activeItem === 'science' ? 'rgba(0, 176, 80, 0.8)' : 'white') : (activeItem === 'science' ? 'rgba(0, 176, 80, 0.8)' : 'black')
                                    }}
                                    onClick={() => {
                                        setActiveItem('science');
                                    }}
                                >
                                    {t('science')}
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="/aboutus"
                                    className="buttonSizeNav"
                                    style={{
                                        color: onTopPage ? (activeItem === 'aboutUs' ? 'rgba(0, 176, 80, 0.8)' : 'white') : (activeItem === 'aboutUs' ? 'rgba(0, 176, 80, 0.8)' : 'black')
                                    }}
                                    onClick={() => {
                                        setActiveItem('aboutUs');
                                    }}
                                >
                                    {t('about us')}
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="/news"
                                    className="buttonSizeNav"
                                    style={{
                                        color: onTopPage ? (activeItem === 'news' ? 'rgba(0, 176, 80, 0.8)' : 'white') : (activeItem === 'news' ? 'rgba(0, 176, 80, 0.8)' : 'black')
                                    }}
                                    onClick={() => {
                                        setActiveItem('news');
                                    }}
                                >
                                    {t('news')}
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="/career"
                                    className="buttonSizeNav"
                                    style={{
                                        color: onTopPage ? (activeItem === 'career' ? 'rgba(0, 176, 80, 0.8)' : 'white') : (activeItem === 'career' ? 'rgba(0, 176, 80, 0.8)' : 'black')
                                    }}
                                    onClick={() => {
                                        setActiveItem('career');
                                    }}
                                >
                                    {t('career')}
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="/contactus"
                                    className="buttonSizeNav"
                                    style={{
                                        color: onTopPage ? (activeItem === 'contactUs' ? 'rgba(0, 176, 80, 0.8)' : 'white') : (activeItem === 'contactUs' ? 'rgba(0, 176, 80, 0.8)' : 'black')
                                    }}
                                    onClick={() => {
                                        setActiveItem('contactUs');
                                    }}
                                >
                                    {t('contact us')}

                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="#"
                                    className="buttonSizeNav"
                                    style={{
                                        color: onTopPage ? (language === 'kr' ? 'rgba(0, 176, 80, 0.8)' : 'white') : (language === 'kr' ? 'rgba(0, 176, 80, 0.8)' : 'black'),
                                    }}
                                    onClick={() => handleLanguage('kr')}
                                >
                                    kr
                                </Link>
                                <Link
                                    to="#"
                                    className="buttonSizeNav"
                                    style={{
                                        color: onTopPage ? 'white' : 'black', margin: '0 5px'
                                    }}
                                    onClick={() => handleLanguage('kr')}
                                >
                                    |
                                </Link>
                                <Link
                                    to="#"
                                    className="buttonSizeNav me-2"
                                    style={{
                                        color: onTopPage ? (language === 'en' ? 'rgba(0, 176, 80, 0.8)' : 'white') : (language === 'en' ? 'rgba(0, 176, 80, 0.8)' : 'black'),
                                    }}
                                    onClick={() => handleLanguage('en')}
                                >
                                    en
                                </Link>
                            </Nav.Link> </Nav>
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
