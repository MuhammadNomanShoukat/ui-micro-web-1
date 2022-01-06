import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Map from "../../../context/location-map/map";

import "./location-map.style.scss";

const location = {
    address: 'Zainab Tower, MB-60، Model Town Link Rd, Bhatti Colony, Lahore, Punjab 54770, Pakistan',
    lat: 31.468965,
    lng: 74.317506,
}

const LocationMap = () => {
    return(
        <section id="location_map">
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <div className="content-wrapper">
                        <Row>
                            <Col lg={4}>
                                <div className="heading-content">
                                    <div className="heading">
                                        <h3>Get in touch</h3>
                                    </div>
                                    <div className="description">
                                        <p>MB-60, Zainab Tower, Model Town Link Road, Lahore, Pakistan.</p>
                                        <p>Phone: <a href="" >042-35942474</a></p>
                                        <p>Email: <a href="" >info@microrage.com</a></p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="map-content">
                                    <div className="map">
                                        <Map location={location} zoomLevel={17}/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
        </section>
    )
}

export default LocationMap;