import React from "react";
import { Row, Col, Container } from "react-bootstrap";


import { bannerData, subServicesDesc, greatProduct } from "./seo-and-digital-mark.data";

import Banner from "../../../context/banner/banner.component";
import SubServicesDesc from "../../../context/sub-servcie-desc/sub-servcie-desc.component";
import SubServicesList from "../../../context/sub-services-list/sub-servcie-list.component";
import GreatProduct from "../../../context/great-product/great-product.component";

import "./seo-and-digital-mark.style.scss";

const SeoAndDigitalMarketing = () => {
    return(
        <section id="web_application">
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

export default SeoAndDigitalMarketing;