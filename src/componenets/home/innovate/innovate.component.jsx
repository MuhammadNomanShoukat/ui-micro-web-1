import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import "./innovate.style.scss";

import CustomButton from "../../../context/custom-button/custom-button.component";
import Innovative_img from "../../../assets/images/innovative-bg.jpg";

var sectionStyle = {
    backgroundImage: `url(${Innovative_img})`,
};

const Innovate = () => {
    return(
        <section style={ sectionStyle } id='innovative_section'>
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <Row>
                        <Col lg={6}>
                            <div className="innovative-content">
                                <div className="title">
                                    <h1>FLEXIBILITY TO INNOVATE</h1>
                                </div>
                                <div className="desc">
                                    <p>
                                    Microrage surpass in every technology powering native, hybrid, cross-platform and custom software package development with our phenomenal strategists, designers, architects, developers and quality analysts.
                                    </p>
                                </div>
                                <div className="innovative-btn">
                                    <CustomButton title="talk to us" name="talk-to-us" href="" icon="" />
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default Innovate;