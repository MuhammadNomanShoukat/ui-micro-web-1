import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import { Link } from "react-router-dom";


import Logo from "../../assets/images/logo.png";
import "./navigation.style.scss";

const Navigation = () => {
    return(
        <section id="navigation_section">
            <Container fluid className="main-container p-0">
                <Container className="container">
                    <div className="navigation-wrapper">
                        <div className="navigation-inner-wrapper">
                            <Row className="align-items-center">
                                <Col lg={2}>
                                    <div className="logo-block">
                                        <img src={Logo} alt="web-logo" width="206" height="55"/>
                                    </div>
                                </Col>
                                <Col lg={10}>
                                    <div className="nav-block">
                                        <ul>
                                            <li className="nav-link"><Link to="/">Home</Link></li>
                                            <li className="nav-link"><Link to="/about">About Us</Link></li>
                                            <li className="nav-link sub-menu"><Link to="/">Our Services</Link>
                                                <ul className="sub-nav">
                                                    <li id="" ><a href={window.location.hre} ><span>Web App Development</span></a></li>
                                                    <li id="" ><a href={window.location.hre} ><span>Mobile App Development</span></a></li>
                                                    <li id="" ><a href={window.location.hre} ><span>E-commerce development</span></a></li>
                                                    <li id="" ><a href={window.location.hre} ><span>Design &amp; Branding</span></a></li>
                                                    <li id="" ><a href={window.location.hre} ><span>SEO &amp; Digital Marketing</span></a></li>
                                                    <li id="" ><a href={window.location.hre} ><span>Strategic Consultancy</span></a></li>
                                                    <li id="" ><a href={window.location.hre} ><span>Business Process Outsourcing</span></a></li>
                                                    <li id="" ><a href={window.location.hre} ><span>Managed Hosting Services</span></a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-link"><Link to="/careers">Careers</Link></li>
                                            <li className="nav-link"><Link to="/contact-us">Contact Us</Link></li>
                                            <li className="nav-link"><Link to="/"><span className="free-quote">Get a free quote</span></Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </Container>
        </section>
    )
}

export default Navigation;