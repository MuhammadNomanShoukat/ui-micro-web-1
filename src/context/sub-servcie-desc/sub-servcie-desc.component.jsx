import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";

import "./sub-servcie-desc.style.scss";

const SubServicesDesc = ({subServicesContent}) => {
    const [addClass, setAddClass] = useState("")
    const all_services = subServicesContent.services_list.map((item, index)=>{
        if(item.image){
            // setAddClass("li-image");
            return(
                <li className="li-image"><img src={window.origin + `/ui-micro-web-1/assets/images/${item.image}`} alt={item.image} title={item.image}/></li>
            )
        }

        if(item.title){
            setAddClass("li-title");
            return(
                <li className="li-title">{item.title}</li>
            )
        } 
    });
    return(
        <section id="web_application_description">
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <div className="content-wrapper">
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
                                    <ul>
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

export default SubServicesDesc;