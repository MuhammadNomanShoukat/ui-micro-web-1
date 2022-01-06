import React from "react";
import { Col } from "react-bootstrap";

import "./our-strategy-card-view.style.scss";

const OurStrategyCardView = ({additional_data}) => {
    const {id, title, image, url} = additional_data;
    
    return(
        <>
            <Col lg={3} className="p-0">
                <div className={`our-service${id}-wrapper`}>
                    <div className="content">
                        <div className={`service${id}-img`}>
                            <img src={window.location.href + `assets/images/${image}`} alt={image}/>
                        </div>
                        <div className="heading">
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default OurStrategyCardView;