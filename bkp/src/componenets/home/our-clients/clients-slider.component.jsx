import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Slider from "react-slick";

// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

import Service_1 from "../../../assets/images/Service-1_comp.png";
import Service_2 from "../../../assets/images/Service-2_comp.png";
import Service_3 from "../../../assets/images/Service-3_comp.png";
import Service_4 from "../../../assets/images/Service-4_comp.png";

import "./clients-slider.style.scss";

const ClientsSlider = ({all_clients}) => {
    const client_images = all_clients.map((item, index)=>{
        return(
            <div className="img-wrapper" key={item.id}>
                <img src={window.location.href + `assets/images/clients/${item.image}`} alt={item.image}/>
            </div>
        );
    });
    
    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
  
    return(
        <section id='clients_slider_section'>
            <Container fluid className="main-container">
                <Container className="container">
                    <Row>
                        <Col lg={12} className="p-0">
                            <div className="clients-slider-wrapper">
                                <div className="client-slider">
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