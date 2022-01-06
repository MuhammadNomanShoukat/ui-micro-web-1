import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./service-view.style.scss";

const ServiceView = ({additional_data}) => {
    const {id, title, image, description, url} = additional_data;
    return(
        <>
            <Col lg={4}>
                <a href={window.location.href + `${url}`} key={id} className="link-wrapper">
                    <div className="service-wrapper">
                        <div className="service-inner-wrapper">
                            <div className="service-content">
                                <div className="image">
                                    <Link to={`${url}`}><img src={window.location.href + `ui-micro-web-1/assets/images/${image}`} alt={image}/></Link>
                                </div>
                                <div className="title">
                                    <h5>{title}</h5>
                                </div>
                                <div className="desc">
                                    <p>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </Col>
        </>
    )
}

export default ServiceView;