import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";

import "./sub-servcie-list.style.scss";

const SubServicesList = ({subServicesContent, style}) => {

    const all_services = subServicesContent.services_list.map((item, index)=>{
        if(item.title){
            return(
                <li>{item.title}</li>
            )
        } 
    });

    try{
        var services_list_img = "";
        var images = true;
        if(subServicesContent.services_list_img.length > 0){
            services_list_img = subServicesContent.services_list_img.map((item, index)=>{
                if(item.img){
                    return(
                        <li><img src={window.origin + `/assets/images/${item.img}`} alt={item.img} title={item.img}/></li>
                    )
                } 
            });
        }
    }catch(error){
        images = false;
    }

    
    
    return(
        <section id="web_application_description">
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <div className="content-wrapper-list">
                        <Row>
                            <Col lg={12}>
                                <div className="heading">
                                    <h2>{subServicesContent.title}</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="description">
                                    <p>
                                        {subServicesContent.description}
                                    </p>
                                    <div className="services-block">
                                        <ul className={`ul-list ${style ? style : ''}`}>
                                            {all_services.length > 0 ? all_services : "loading"}
                                        </ul>
                                        {images 
                                        ? 
                                        <ul className="ul-img">
                                            {services_list_img.length > 0 ? services_list_img : ""}
                                        </ul>
                                        : 
                                        null
                                        }                                        
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

export default SubServicesList;