import React from "react";
import "./why-choose-us.style.scss";
import {Row, Col, Container} from "react-bootstrap";

import ChooseUsCardView from "./choose-us-card-view.component";

const WhyChooseUs = ({card_list}) => {
    const card_list_data = card_list.map((item, index)=>{
        return(
            <ChooseUsCardView card_data={item} key={index.id}/>
        )
    });
    return(
        <section id="why_choose_us_section">
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <Row>
                        <Col lg={12}>
                            <div className="heading-content">
                                <div className="heading">
                                    <h2>WHY <span className="green-text">CHOOSE US</span></h2>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {card_list_data.length > 0 ? card_list_data : "Loading..."}
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default WhyChooseUs;