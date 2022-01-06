import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import portfolio_6 from "../../../assets/images/portfolio_6_comp.png";

import "./code-level.style.scss";

const CodeLevel = ({code_level_obj}) => {
    const {image, title, description, url} = code_level_obj;
    return(
        <section id='code_level_section'>
            <Container fluid className="main-container">
                <Container className="container">
                    <Row>
                        <Col lg={7} className="align-items-center d-flex">
                            <div className="content-wrapper" >
                                <div className="content-inner-wrapper" >
                                    <div className="content">
                                        <div className="heading">
                                            <h2>{title}</h2>
                                        </div>

                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} className="">
                            <div className="content-wrapper" >
                                <div className="content-inner-wrapper" >
                                    <div className="img">
                                    <img src={window.location.href + `ui-micro-web-1/assets/images/${image}`} alt="code-level"/>
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

export default CodeLevel;