import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import GreatWork_Img from "../../../assets/images/great-work.png";

import "./great-work.style.scss";

var sectionStyle = {
    backgroundImage: `url(${GreatWork_Img})`
};

const GreatWork = () => {
    return(
        <section style={ sectionStyle } id='great_work_section'>
            <Container fluid className="main-container">
                <Container className="container">
                    <Row>
                    <Col lg={12} className="">
                        <div className="work-wrapper">
                            <div className="work-inner-wrapper">
                                <div className="content">
                                    <h2>WE BELIEVE IN THE POWER OF GREAT WORK.</h2>
                                </div>
                            </div>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default GreatWork;