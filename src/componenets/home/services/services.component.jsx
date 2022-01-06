import React from "react";
import {Col, Row, Container} from "react-bootstrap";
import "./services.style.scss";

import ServiceView from "./service-view.component";

const Services = ({all_services}) => {
    const services_arr = all_services.map((service, index)=>{
        return(
            <ServiceView additional_data={service} key={service.id}/>
        )
    });
    
    return(
        <section id="services">
            <Container fluid className="services-main-container">
                <Container className="container">
                    <Row>
                        <Col lg={12}>
                            <div className="services-heading">
                                <h2>CORE COMPETENCIES</h2>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="services-list-preview">
                                {services_arr.length > 0 ? services_arr : "Loading..."}
                            </div>
                        </Col>
                </Row>
                </Container>
            </Container>
        </section>
    )
}

export default Services;