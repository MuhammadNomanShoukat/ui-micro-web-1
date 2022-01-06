import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import { bannerData, subServicesDesc, greatProduct } from "./strategic-consultancy.data";

import Banner from "../../../context/banner/banner.component";
import SubServicesDesc from "../../../context/sub-servcie-desc/sub-servcie-desc.component";
import SubServicesList from "../../../context/sub-services-list/sub-servcie-list.component";
import GreatProduct from "../../../context/great-product/great-product.component";

import "./strategic-consultancy.style.scss";

const StrategicConsultancy = () => {
    return(
        <section id="strategic_consulting_application">
            <Banner bannerContent={bannerData} />
            <SubServicesList subServicesContent={subServicesDesc} style="center_list"/>
            <GreatProduct greatProduct={greatProduct}/>
            {/* <Container fluid className="main-container">
                <Container className="inner-container">
                    <div className="content-wrapper">
                        <Row>
                            <Col lg={6}>6</Col>
                            <Col lg={6}>6</Col>
                        </Row>
                    </div>
                </Container>
            </Container> */}
        </section>
    )
}

export default StrategicConsultancy;