import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";

import { bannerData, subServicesDesc, greatProduct } from "./business-pro-out.data";

import Banner from "../../../context/banner/banner.component";
import SubServicesDesc from "../../../context/sub-servcie-desc/sub-servcie-desc.component";
import SubServicesList from "../../../context/sub-services-list/sub-servcie-list.component";
import GreatProduct from "../../../context/great-product/great-product.component";

import "./business-pro-out.style.scss";

const BusinessProOut = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
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

export default BusinessProOut;