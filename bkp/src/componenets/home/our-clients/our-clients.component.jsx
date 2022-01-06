import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import ClientsSlider from "./clients-slider.component";
import ClientsDescSlider from "./client-desc-slider.component";

// import OurStrategyCardView from "./our-strategy-card-view.component";

// import Service_1 from "../../../assets/images/Service-1_comp.png";
// import Service_2 from "../../../assets/images/Service-2_comp.png";
// import Service_3 from "../../../assets/images/Service-3_comp.png";
// import Service_4 from "../../../assets/images/Service-4_comp.png";

import "./our-clients.style.scss";

const OurClients = ({all_clients, client_desc_obj}) => {
    return(
        <section id='our_clients_section'>
            <Container fluid className="main-container">
                <Container className="container">
                    <Row>
                        <Col lg={12} className="p-0">
                            <div className="our-clients-wrapper">
                                <div className="content">
                                    <div className="heading">
                                        <h2>OUR <span className="green-text">Key Clients</span></h2>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="clients-slider-preview">
                                <ClientsSlider all_clients={all_clients}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="desc-slider-preview">
                                <ClientsDescSlider all_clients={client_desc_obj}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default OurClients;