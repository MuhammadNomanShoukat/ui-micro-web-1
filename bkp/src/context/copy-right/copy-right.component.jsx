import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

import PageUpArrow from "../../componenets/page-up-arrow/page-up-arrow.component";
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
                                    <p>{copyright} <Link to='/'>{web_title}</Link></p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <PageUpArrow />
                </Container>
            </Container>
        </section>
    )
}

export default CopyRight;