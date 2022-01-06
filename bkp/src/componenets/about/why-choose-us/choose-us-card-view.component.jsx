import React from "react";
import "./choose-us-card-view.style.scss";
import {Row, Col, Container} from "react-bootstrap";

const ChooseUsCardView = ({card_data}) => {
    const {title, description} = card_data;
    console.log(title)
    return(
        <>
        <Col lg={6}>
            <div className="card-content">
                <div className="heading">
                    <h3>{title}</h3>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
        </Col>
        </>
    )
}

export default ChooseUsCardView;