import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import { bannerData, subServicesDesc, greatProduct } from "./ecommerce.data";

import Banner from "../../../context/banner/banner.component";
import SubServicesDesc from "../../../context/sub-servcie-desc/sub-servcie-desc.component";
import SubServicesImg from "../../../context/sub-services-img/sub-servcie-img.component";
import GreatProduct from "../../../context/great-product/great-product.component";

import "./ecommerce.style.scss";

const Ecommerce = () => {
    return(
        <section id="web_application">
            <Banner bannerContent={bannerData} />
            <SubServicesImg subServicesContent={subServicesDesc}/>
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

export default Ecommerce;