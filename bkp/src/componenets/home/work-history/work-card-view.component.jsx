import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import portfolio_3 from "../../../assets/images/portfolio_3_comp.png";
import portfolio_4 from "../../../assets/images/portfolio_4_comp.png";
import portfolio_5 from "../../../assets/images/portfolio_5_comp.png";


import "./work-card-view.style.scss";


const WorkCardView = () => {
    return(
        <section id='work_card_section'>
            <Container fluid className="main-container p-0">
                <Container className="container p-0">
                    <Row>
                        <Col lg={4} className="">
                            <div className="card-wrapper" >
                                <div className="card-inner-wrapper" >
                                    <div className="content">
                                        <div className="card-img">
                                            <img src={portfolio_3} />
                                        </div>

                                        <div className="card-heading">
                                            <h1>Upgrade</h1>
                                        </div>

                                        <div className="card-detail">
                                            <p>
                                            A marketplace for tourism industry for tours bookings and itinerary management.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className="">
                            <div className="card-wrapper" >
                                <div className="card-inner-wrapper" >
                                    <div className="content">
                                        <div className="card-img">
                                            <img src={portfolio_4} />
                                        </div>

                                        <div className="card-heading">
                                            <h1>Canvas Studio</h1>
                                        </div>

                                        <div className="card-detail">
                                            <p>
                                            A marketplace for tourism industry for tours bookings and itinerary management.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className="">
                            <div className="card-wrapper" >
                                <div className="card-inner-wrapper" >
                                    <div className="content">
                                        <div className="card-img">
                                            <img src={portfolio_5} />
                                        </div>

                                        <div className="card-heading">
                                            <h1>Source App</h1>
                                        </div>

                                        <div className="card-detail">
                                            <p>
                                            A marketplace for tourism industry for tours bookings and itinerary management.
                                            </p>
                                        </div>
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

export default WorkCardView;