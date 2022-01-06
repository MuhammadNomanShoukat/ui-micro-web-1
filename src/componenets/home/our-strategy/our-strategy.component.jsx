import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import OurStrategyCardView from "./our-strategy-card-view.component";

import Service_1 from "../../../assets/images/Service-1_comp.png";
import Service_2 from "../../../assets/images/Service-2_comp.png";
import Service_3 from "../../../assets/images/Service-3_comp.png";
import Service_4 from "../../../assets/images/Service-4_comp.png";

import "./our-strategy.style.scss";

const OurStrategy = ({all_strategies}) => {
    const strategies_arr = all_strategies.map((service, index)=>{
        return(
            <OurStrategyCardView additional_data={service} key={service.id}/>
        )
    });
    return(
        <section id='our_strategy_section'>
            <Container fluid className="main-container">
                <Container className="container">
                    <Row>
                        <Col lg={12} className="p-0">
                            <div className="our-strategy-wrapper">
                                <div className="content">
                                    <div className="heading">
                                        <h2>OUR <span className="green-text">STRATEGY</span></h2>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="strategies-list-preview">
                                {strategies_arr.length > 0 ? strategies_arr : "Loading..."}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default OurStrategy;