import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";

import "./sub-servcie-img.style.scss";

const SubServicesImg = ({subServicesContent}) => {
    const all_services = subServicesContent.services_list.map((item, index)=>{
        if(item.image){
            return(
                <li><img src={window.origin + `/assets/images/${item.image}`} alt={item.image} title={item.image}/></li>
            )
        }
    });
    return(
        <section id="web_application_description">
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <div className="content-wrapper-img">
                        <Row>
                            <Col lg={12}>
                                <div className="heading">
                                    <h2>{subServicesContent.title}</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="description">
                                    <p>
                                        {subServicesContent.description}
                                    </p>
                                    <ul className="ul-img">
                                        {all_services.length > 0 ? all_services : "loading"}
                                        {/* <li>Database programming</li>
                                        <li>Responsive/multi-platform compatible solutions</li>
                                        <li>High performance resilient systems</li>
                                        <li>SEO compliant Industry standards</li> */}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
        </section>
    )
}

export default SubServicesImg;