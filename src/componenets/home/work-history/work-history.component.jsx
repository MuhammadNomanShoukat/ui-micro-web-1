import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import WorkCardView from "./work-card-view.component";

import portfolio_1 from "../../../assets/images/portfolio_1_comp.png";
import portfolio_2 from "../../../assets/images/portfolio_2_comp.png";

import "./work-history.style.scss";

const WorkHistory = ({work_history_obj}) => {
    return(
        <section id='work_history_section'>
            <Container fluid className="main-container">
                <Container className="container">
                    <Row>
                        <Col lg={12} className="">
                            <div className="main-heading-wrapper">
                                <div className="heading-inner-wrapper">
                                    <div className="heading">
                                        <h1>We’re proud of all our work yet these deserve a spot up-front</h1>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    <Col lg={6} className="">
                        <div className="hotel-wrapper" >
                            <div className="hotel-inner-wrapper" >
                                <div className="content">
                                    <div className="heading">
                                        <h2>Hotels Finder</h2>
                                    </div>

                                    <div className="sub-heading">
                                        <p>A mobile app development to search hotels with price and features comparison.</p>
                                    </div>

                                    <div className="bg-img">
                                        <img src={portfolio_1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="">
                        <div className="regent-wrapper" >
                            <div className="regent-inner-wrapper">
                                <div className="content">
                                    <div className="heading">
                                        <h2>Regent Security</h2>
                                    </div>

                                    <div className="sub-heading">
                                        <p>Design, branding and website development for Australian based security services provider.</p>
                                    </div>

                                    <div className="bg-img" >
                                        <img src={portfolio_2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <WorkCardView />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default WorkHistory;