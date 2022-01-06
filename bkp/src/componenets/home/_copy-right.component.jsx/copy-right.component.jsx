import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import "./copy-right.style.scss";


const CopyRight = ({copyright_obj}) => {
    const { copyright, web_title} =  copyright_obj;
    return(
        <section id="copy_right">
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <div className="copy-right-wrapper">
                        <Row>
                            <Col lg={12}>
                                <div className="content">
                                    <p>{copyright} <a href={window.location.href} >{web_title}</a></p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
        </section>
    )
}

export default CopyRight;