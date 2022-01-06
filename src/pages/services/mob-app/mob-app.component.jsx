import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";

import { GetBanner, GetServies, GetGreatProduct} from "../../../redux/actions/mob-app/mob-app.action";
import { connect } from "react-redux";

import { bannerData, subServicesDesc, greatProduct } from "./mob-app.data";

import Banner from "../../../context/banner/banner.component";
import SubServicesDesc from "../../../context/sub-servcie-desc/sub-servcie-desc.component";
import SubServicesImg from "../../../context/sub-services-img/sub-servcie-img.component";
import GreatProduct from "../../../context/great-product/great-product.component";

import "./mob-app.style.scss";

const MobApp = (props) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
    // console.log("mob data");
    // console.log(bannerData)
    // const [mobAppContent, setMobAppContent] = useState({
    //                                                 bannerData:"", 
    //                                                 subServicesDesc: "", 
    //                                                 greatProduct:""
    //                                             });
    
    // useEffect(()=>{
    //     setMobAppContent({
    //         bannerData, ...bannerData, 
    //         subServicesDesc, ...subServicesDesc,
    //         greatProduct, ...greatProduct
    //     })
    // }, []);

    // console.log("======data======");
    // console.log(mobAppContent.bannerData);

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

const mapStatetoProps = (state) => ({
    data: state
});

const mapDispatchToProps = (dispatch) => ({
    "bannerData": user=>dispatch(GetBanner(user)),
    "servicesData": user=>dispatch(GetServies(user)),
    "greatProductData": user=>dispatch(GetGreatProduct(user)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(MobApp);