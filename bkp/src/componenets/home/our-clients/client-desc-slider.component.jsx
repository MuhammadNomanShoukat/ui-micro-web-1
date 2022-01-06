import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Slider from "react-slick";

import "./client-desc-slider.style.scss";

const ClientsSlider = ({all_clients}) => {
    const client_images = all_clients.map((item, index)=>{
        return(
            <div className="desc-wrapper" key={item.id}>
                <div className="content">
                    <div className="description">
                        <p>{item.desc}</p>
                    </div>
                    <div className="other-info">
                        <p>
                            <span className="client-name">{item.title},</span> 
                            <span className="contract-date">{item.date}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    });
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        adaptiveHeight: true,
        useTransform:true
    };
  
    return(
        <section id='desc_slider_section'>
            <Container fluid className="main-container">
                <Container className="container">
                    <Row>
                        <Col lg={12} className="p-0">
                            <div className="desc-slider-wrapper">
                                <div className="desc-slider">
                                    <Slider {...settings}>
                                        
                                        {client_images.length > 0 ? client_images : "loading" }
                                        
                                    </Slider>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default ClientsSlider;