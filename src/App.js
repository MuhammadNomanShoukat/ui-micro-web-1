import React, { useState, useEffect } from "react";
import './App.scss';
import Home from './pages/home-page.component';

import { GetAllServices,
         GetWorkHistory, 
         GetCodeLevel, 
         GetOurStrategies } from "./redux/actions/home/home.actions";
import { GetBanner, 
         GetServies, 
         GetGreatProduct } from "./redux/actions/mob-app/mob-app.action";
import { connect } from "react-redux";

import { navigation_list } from "./context/navigation/navigation.data";

import { copyright } from "./pages/services/web-app/web-app.data";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from './pages/about/about.component';
import ContactUs from './pages/contact-us/contact-us.component';
import Services from "./pages/services/services.component";
import WebApp from "./pages/services/web-app/web-app.component";
import MobApp from "./pages/services/mob-app/mob-app.component";
import Ecommerce from "./pages/services/ecommerce/ecommerce.component";
import DesignAndBranding from "./pages/services/design-and-branding/design-and-branding.component";
import SeoAndDigitalMarketing from "./pages/services/seo-and-digital-mark/seo-and-digital-mark.component";
import StrategicConsultancy from "./pages/services/strategic-consultancy/strategic-consultancy.component";
import BusinessProOut from "./pages/services/business-pro-out/business-pro-out.component";
import ManageHostingServices from "./pages/services/manage-hosting-services/manage-hosting-services.component";
import GetFreeQuote from "./pages/get-free-qoute/get-free-qoute.component";
import Portfolio from "./pages/portfolio/get-free-qoute.component";
import PageUpArrow from "./componenets/page-up-arrow/page-up-arrow.component";
import Careers from './pages/careers/careers.component';
import Navigation from "../src/context/navigation/navigation.component";

// import Footer from "./componenets/home/footer/footer.component";
// import CopyRight from "./componenets/home/copy-right.component.jsx/copy-right.component";

import Footer from "./context/footer/footer.component";
import CopyRight from "./context/copy-right/copy-right.component";


function App(props) {
  console.log(props)
  const [nav_list, setNavList] = useState([]);

  useEffect(()=>{
    setNavList(navigation_list);
    props.getAllServices();
    props.getWorkHistory();
    props.getCodeLevel();
    props.getOurStrategies();
    props.getBannerData();
    props.getServicesData();
    props.getGreatProductData();
  }, []);
  
  return (
    <Router>
      <Navigation nav_list={nav_list}/>
      
      <>
        <Routes>
          <Route path="/" caseSensitive="false" element={<Home />}/>
          <Route path="/about" caseSensitive="false" element={<AboutUs />}/>
          <Route path="/services" caseSensitive="false" element={<Services />}/>
          <Route path="/web-app" caseSensitive="false" element={<WebApp />}/>
          <Route path="/mob-app" caseSensitive="false" element={<MobApp />} />
          <Route path="/e-commerce" caseSensitive="false" element={<Ecommerce />} />
          <Route path="/design-and-branding" caseSensitive="false" element={<DesignAndBranding />} />
          <Route path="/seo-digital-marketing" caseSensitive="false" element={<SeoAndDigitalMarketing />} />
          <Route path="/strategic-consultancy" caseSensitive="false" element={<StrategicConsultancy />} />
          <Route path="/business-outsourcing" caseSensitive="false" element={<BusinessProOut />} />
          <Route path="/managed-hosting-services" caseSensitive="false" element={<ManageHostingServices />} />
          <Route path="/get-free-quote" caseSensitive="false" element={<GetFreeQuote />} />
          <Route path="/portfolio" caseSensitive="false" element={<Portfolio />} />
          <Route path="/careers" caseSensitive="false" element={<Careers />}/>
          <Route path="/contact-us" caseSensitive="false" element={<ContactUs />}/>
        </Routes>
      </>
      
      <Footer />
      <CopyRight copyright_obj={copyright}/>
    </Router>
  );
}

const mapStateToProps = state => ({
  data: state
});

const mapDisptachToProps = dispatch => ({
  getAllServices: data=>dispatch(GetAllServices(data)),
  getWorkHistory: data=>dispatch(GetWorkHistory(data)),
  getCodeLevel: data=>dispatch(GetCodeLevel(data)),
  getOurStrategies: data=>dispatch(GetOurStrategies(data)),
  getBannerData: data=>dispatch(GetBanner(data)),
  getServicesData: data=>dispatch(GetServies(data)),
  getGreatProductData: data=>dispatch(GetGreatProduct(data))
});

export default connect(mapStateToProps, mapDisptachToProps)(App);

