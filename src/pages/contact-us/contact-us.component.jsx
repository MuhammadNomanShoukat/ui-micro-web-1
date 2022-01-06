import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./contact-us.style.scss";

import { copyright } from "./contact-us.data";

import Map from "../../context/location-map/map";
import LocationMap from "../../componenets/contact-us/location-map/location-map.component";
import GreatProduct from "../../context/great-product/great-product.component";

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 31.4712,
    lng: 74.3187,
}
  
const ContactUs = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    return(
        <section id="contact_us">
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <div className="content-wrapper">
                        <Row>
                            <Col lg={12}>
                                <div className="heading-content">
                                    <div className="heading">
                                        <h1>Contact Us</h1>
                                    </div>
                                    <div className="description">
                                        <p>
                                        Being a strong team of high-skilled programmers, we are passionate about delivering tangible results.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
            <LocationMap />
            <GreatProduct />
        </section>
    )
}

export default ContactUs;