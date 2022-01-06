import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Banner_Img from "../../../assets/images/main-banner.png";

import CustomButton from "../../../context/custom-button/custom-button.component";

import "./banner.style.scss";

const Banner = () => {
    return(
            <section className="banner">
                <Container fluid className="main-container">
                    <Container className="container">
                        <div className="banner-wrapper">
                            <div className="banner-inner-wrapper">
                                <Row>
                                    <Col lg={12}>
                                        <div className="banner-wrapper">
                                            <div className="banner-inner-wrapper">
                                                <div className="title">
                                                    <h1><p>INNOVATIVE SOLUTIONS FOR YOU <br /> THAT <span className="inner-text">ACTUALLY</span> WORK!</p></h1>
                                                </div>
                                                <div className="desc">
                                                    <p>
                                                    We are a web/mobile app, E-commerce and custom software development agency!
                                                    </p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col lg={3}>
                                        <div className="in-touch-wrapper pt-5">
                                            <div className="in-touch-text">
                                                <p>
                                                Have an idea for a great project?
                                                </p>
                                            </div>
                                            <div className="in-touch-btn">
                                                <CustomButton title="Get in touch" name="" href="" icon=""/>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={9}>
                                        <img src={Banner_Img} alt="main-banner" width="73%"/>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </Container>
            </section>
    )
}

export default Banner;