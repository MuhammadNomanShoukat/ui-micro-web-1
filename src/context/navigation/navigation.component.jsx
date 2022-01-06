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

    const newNav = [...nav_list];
    const setActiveNavbar = (navigator) => {
        window.scrollTo(0, 0);
        
        newNav.map((item, index)=>{
            if(typeof(navigator) === 'number' && index === navigator){
                // window.scrollTo(0, 0);
                return(item.status="active");
                
            }else if(typeof(navigator) === 'string' && item.url === navigator){
                // window.scrollTo(0, 0);
                return(item.status="active");
            }
            else{
                return(item.status="");
            }
        });
        setNavigationList(newNav);
    }

    const setActiveSubNavbar = (navigator) => {
        newNav.filter((item, index)=>{
            if(index === 2){
                return(item.status="active");
            }else{
                return(item.status="");
            }
        })
        setNavigationList(newNav);
        // window.scrollTo(0, 0);
        // const newNav = [...nav_list];
        // newNav.map((item, index)=>{
        //     if(typeof(navigator) === 'number' && index === navigator){
        //         // window.scrollTo(0, 0);
        //         return(item.status="active");
                
        //     }else if(typeof(navigator) === 'string' && item.url === navigator){
        //         // window.scrollTo(0, 0);
        //         return(item.status="active");
        //     }
        //     else{
        //         return(item.status="");
        //     }
        // });
        // setNavigationList(newNav);
    }

    const nav_data = navigation_list.map((item, index)=>{
        if(item.id === 3 || item.title.toLowerCase() === "our services"){
            return(
                <>
                <li className={`nav-link sub-menu ${item.status}`} ><Link to={`${item.url}`} onClick={(e)=>setActiveNavbar(index)}>{item.title}</Link>
                    <ul className="sub-nav" key={item.id}>
                        {
                            item.sub_services.map((sub_item, index)=>{
                                return(<li id="" onClick={()=>setActiveSubNavbar(index)}><Link to={`${sub_item.url}`}><span>{sub_item.title}</span></Link></li>)
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
                                        </ul>
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