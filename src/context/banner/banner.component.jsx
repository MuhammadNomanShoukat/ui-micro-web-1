import React from "react";
import "./banner.style.scss";
import {Row, Col, Container} from "react-bootstrap";

import CustomButton from "../../../src/context/custom-button/custom-button.component";
import Heading from "../../../src/context/heading.component";

import Service_Banner from "../../../src/assets/images/services-banner.png";


const Banner = ({bannerContent}) => {
    const {
        id, 
        title1, 
        title2, 
        description, 
        btn1_text, 
        btn2_text, 
        btn1_url, 
        btn2_url, 
        image} = {...bannerContent};


    return(
        <section id="banner">
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <div className="content-wrapper">
                        <Row>
                            <Col lg={6}>
                                <div className="content">
                                    <Heading text1={title1} text2={title2} left-green="true"/>
                                    <div className="description">
                                        <p className="desc">
                                        {description}
                                        </p>
                                        <div className="btn-wrapper">
                                            <CustomButton title={btn1_text} href="" icon="" name="" />
                                            <CustomButton title={btn2_text} href="" icon="" name="" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="content">
                                    <img src={window.origin + `/ui-micro-web-1/assets/images/${image}`} alt={title1}/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
        </section>
    )
}

export default Banner;