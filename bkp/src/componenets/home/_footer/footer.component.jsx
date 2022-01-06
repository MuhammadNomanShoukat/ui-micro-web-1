import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import Logo from "../../../assets/images/logo.png";

import "./footer.style.scss";


const Footer = () => {
    return(
        <section id="footer">
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <div className="footer-wrapper">
                        <div className="content">
                            <Row>
                                <Col lg={4}>
                                    <div className="section">
                                        <div className="content">
                                            <div className="web-logo">
                                                <img src={Logo} alt="logo" />
                                            </div>
                                            <div className="web-desc">
                                                <p>Microrage is a web design and development company that specializes in building nice websites and rich internet applications. Our staff is comprised of passionate IT professionals, who are brought alongside with numerous abilities to provide you such solutions that create a powerful relationship between you and your customers.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="section">
                                        <div className="content">
                                            <div className="section-heading">
                                                <h4>IMPORTANT LINKS</h4>
                                            </div>
                                            <div className="web-links">
                                                <ul>
                                                    <li><a href={window.location.href}>About Us</a></li>
                                                    <li><a href={window.location.href}>Our Services</a></li>
                                                    <li><a href={window.location.href}>Portfolio</a></li>
                                                    <li><a href={window.location.href}>Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="section">
                                        <div className="content">
                                            <div className="section-heading">
                                                <h4>GET IN TOUCH</h4>
                                            </div>
                                            <div className="web-address">
                                                <p>MB-60, Zainab Tower, Model Town Link Road,</p>
                                                <p>Lahore, Pakistan.</p>
                                                <p>Phone: <a href={window.location.href}>042-35942474</a></p>
                                                <p>Email: <a href={window.location.href}>info@microrage.com</a></p>
                                            </div>
                                            <div className="web-social-links">

                                            </div>
                                        </div>
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

export default Footer;