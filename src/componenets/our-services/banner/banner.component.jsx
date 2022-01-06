import React from "react";
import "./banner.style.scss";
import {Row, Col, Container} from "react-bootstrap";

import CustomButton from "../../../context/custom-button/custom-button.component";
import Heading from "../../../context/heading.component";

import Service_Banner from "../../../assets/images/services-banner.png";


const Banner = () => {
    return(
        <section id="banner">
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <div className="content-wrapper">
                        <Row>
                            <Col lg={6}>
                                <div className="content">
                                    <Heading text1="OUR" text2="SERVICES" left-green="true"/>
                                    <div className="description">
                                        <p className="desc">
                                        Custom web development offers options for businesses who seek to provide a flexible, consistent experience for users across different platforms, we achieve it through innovative functionality, well designed architecture based on most suitable technology.
                                        </p>
                                        <div className="btn-wrapper">
                                            <CustomButton title="Check our portfolio" href="" icon="" name="" />
                                            <CustomButton title="Get in touch" href="" icon="" name="" />
                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="content">
                                    <img src={Service_Banner} alt="about banner"/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
        </section>
    )
}

export default Banner;