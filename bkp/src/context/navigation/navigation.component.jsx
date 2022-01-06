import React, { useState, useEffect } from "react";
import {Row, Col, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import "./navigation.style.scss";

const Navigation = ({nav_list}) => {
    const [navigation_list, setNavigationList] = useState([]);
    const [urlPath, setUrlPath] = useState();
    
    useEffect(()=>{
        setUrlPath(window.location.pathname)
        setActiveNavbar(urlPath)

    }, [nav_list]);

    const setActiveNavbar = (navigator) => {
        const newNav = [...nav_list];
        newNav.map((item, index)=>{
            if(typeof(navigator) === 'number' && index === navigator){
                window.scrollTo(0, 0);
                return(item.status="active");
                
            }else if(typeof(navigator) === 'string' && item.url === navigator){
                window.scrollTo(0, 0);
                return(item.status="active");
            }
            else{
                return(item.status="");
            }
        });
        setNavigationList(newNav);
    }

    const nav_data = navigation_list.map((item, index)=>{
        if(item.id === 3 || item.title.toLowerCase() === "our services"){
            return(
                <>
                <li className={`nav-link sub-menu ${item.status}`} ><Link to={`${item.url}`} onClick={(e)=>setActiveNavbar(index)}>{item.title}</Link>
                    <ul className="sub-nav" key={item.id}>
                        {
                            item.sub_services.map((sub_item, index)=>{
                                return(<li id="" ><Link to={`${sub_item.url}`}><span>{sub_item.title}</span></Link></li>)
                            })
                        }
                    </ul>
                </li>
                </>
            )
        }else{
            return(
                <li className={`nav-link ${item.status}`} ><Link to={`${item.url}`} onClick={(e)=>setActiveNavbar(index)}>{item.title}</Link></li>
            )    
        }
        
    });
    return(
        <section id="navigation_section">
            <Container fluid className="main-container p-0">
                <Container className="container">
                    <div className="navigation-wrapper">
                        <div className="navigation-inner-wrapper">
                            <Row className="align-items-center">
                                <Col lg={2}>
                                    <div className="logo-block">
                                        <Link to='/' onClick={(e)=>setActiveNavbar(0)}><img src={Logo} alt="web-logo" width="206" height="55"/></Link>
                                    </div>
                                </Col>
                                <Col lg={10}>
                                    <div className="nav-block">
                                        <ul>
                                            {nav_data}
                                            {/* <li className="nav-link get-quote-btn"><Link to="/get-free-quote"><span className="free-quote">Get a free quote</span></Link></li> */}
                                        </ul>
                                        {/* <ul> */}
                                            
                                            {/* <li className="nav-link"><Link to="/">Home</Link></li>
                                            <li className="nav-link"><Link to="/about">About Us</Link></li>
                                            <li className="nav-link sub-menu"><Link to="/">Our Services</Link>
                                                <ul className="sub-nav">
                                                    <li id="" ><a href={window.location.hre} ><span>Web App Development</span></a></li>
                                                    <li id="" ><a href={window.location.hre} ><span>Mobile App Development</span></a></li>
                                                    <li id="" ><a href={window.location.hre} ><span>E-commerce development</span></a></li>
                                                    <li id="" ><a href={window.location.hre} ><span>Design &amp; Branding</span></a></li>
                                                    <li id="" ><a href={window.location.hre} ><span>SEO &amp; Digital Marketing</span></a></li>
                                                    <li id="" ><a href={window.location.hre} ><span>Strategic Consultancy</span></a></li>
                                                    <li id="" ><a href={window.location.hre} ><span>Business Process Outsourcing</span></a></li>
                                                    <li id="" ><a href={window.location.hre} ><span>Managed Hosting Services</span></a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-link"><Link to="/careers">Careers</Link></li>
                                            <li className="nav-link"><Link to="/contact-us">Contact Us</Link></li> */}
                                            
                                        {/* </ul> */}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </Container>
        </section>
    )
}

export default Navigation;