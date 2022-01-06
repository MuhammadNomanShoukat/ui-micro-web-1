import React from "react";
import "./who-are-we.style.scss";
import {Row, Col, Container} from "react-bootstrap";

import CustomButton from "../../../context/custom-button/custom-button.component";
import Heading from "../../../context/heading.component";

import About_Banner from "../../../assets/images/about-banner.png";


const WhoAreWe = () => {
    return(
        <section id="who_are_we_section">
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <div className="content-wrapper">
                        <Row>
                            <Col lg={6}>
                                <div className="content">
                                    <Heading text1="WHO" text2="ARE WE" left-green="true"/>
                                    <div className="description">
                                        <h5 className="title">
                                            We are a passionate experienced team with big ambitions.
                                        </h5>
                                        
                                        <p className="desc">
                                        Microrage Solutions is a technology service and support company committed to delivering innovation. Microrage provides high quality IT solutions and hosting services with optimal skills and service level. With deep industry and business process expertise and proven track record Microrage can utilize the right skills and technologies to help clients achieve real business outcome.
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
                                    <img src={About_Banner} alt="about banner"/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
        </section>
    )
}

export default WhoAreWe;