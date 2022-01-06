import React from "react";
import "./about.style.scss";
import {Row, Col, Container} from "react-bootstrap";


import Heading from "../../../context/heading.component";

const About = () => {
    return(
        <section id="about_section">
            <Container fluid className="main-container p-0">
                <Container className="inner-container">
                    <div className="about-content">
                        <Row>
                            <Col lg={6}>
                                <div className="content">
                                    <Heading text1="ABOUT " text2="MICRORAGE SOLUTIONS"/>
                                    <div className="description">
                                        <p className="desc">
                                        At Microrage Solutions we design and develop digital products including mobile apps, websites and web applications. The two cornerstones upon which we build successful software are user-centered interaction design and scalable software architecture. We offer flexible solutions custom-designed to meet your specific requirement. Our skilled experts not only have the technical experience, but an understanding of the business and industry to help you make the most of your IT investment.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="content">
                                    <div className="about-card">
                                        <div className="heading">
                                            <h2>Vision</h2>
                                        </div>
                                        <div className="desc">
                                            <p>
                                                <q>To provide the best solutions and technology that enable businesses to excel</q>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <div className="content">
                                    <div className="about-card">
                                        <div className="heading">
                                            <h2>Mission</h2>
                                        </div>
                                        <div className="points">
                                            <p>
                                                Microrage Solutions is founded on five guiding principles:
                                            </p>
                                            <ul>
                                                <li>To consistently deliver superior quality service</li>
                                                <li>To proactively communicate with clients throughout the process</li>
                                                <li>To honor client commitments for every project</li>
                                                <li>To execute projects with complete work ethic and integrity</li>
                                                <li>To keep our client as our first priority always</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="content">
                                    <div className="description">
                                        <p>
                                        Established in 2012, Microrage Solutions is forward looking and as a policy explores new fronts to stay abreast of the competition. The activities in export sector are being expanded and today the company is one of the leading service providers in its area of work. Large-scale modernization of existing systems is part of the continuing efforts to remain at the cutting edge of the IT business. Company works with our valued customers from around the globe.
                                        </p>
                                        <p>
                                        At Microrage Solutions, with Technical proficiency and expertise, we cohesively integrate graphic design with web page layout, with interactive programming, with database driven content, to plan, build and deploy e- business and to emerge as one of the top IT service provider. The business philosophy of the company is to lay emphasis on Human Values and Personal Relations. At Microrage – Technology meets emotions and limits are higher than the sky.’ Great stress is laid on proper communication, transparency and human relations, which forms an integral part of the corporate culture.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container >
            </Container >
        </section>
    )
}

export default About;