import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./careers.style.scss";

import { copyright } from "./careers.data";

const Careers = () => {
    return(
        <section id="careers">
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <div className="content-wrapper">
                        <Row>
                            <Col lg={12}>
                                <div className="heading-content">
                                    <div className="heading">
                                        <h1>Careers</h1>
                                    </div>
                                    <div className="description">
                                        <p>
                                        Being a strong team of high-skilled programmers, we are passionate about delivering tangible results.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
        </section>
    )
}

export default Careers;