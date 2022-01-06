import React, { useState, useEffect} from "react";
import { why_choose_us } from "./about-us-data";
import "./about.style.scss";

import { copyright } from "./about-us-data";

import Navigation from "../../context/navigation/navigation.component";
import About from "../../componenets/about/about/about.component";
import WhoAreWe from "../../componenets/about/who-are-we/who-are-we.component";
import HowWeDo from "../../componenets/about/how-we-do/how-we-do.component";
import WhyChooseUs from "../../componenets/about/why-choose-us/why-choose-us.component";


const AboutUs = () => {
    const [whyChoseUs, setWhyChoseUs] = useState([]);

    useEffect(()=>{
        setWhyChoseUs(why_choose_us);
    }, [])

    console.log(whyChoseUs)
    return(
        <>
        {/* <Navigation /> */}
        <section id="about_us_section">
            <WhoAreWe />
            <About />
            <HowWeDo />
            <WhyChooseUs card_list={whyChoseUs}/>
        </section>
        </>
    )
}

export default AboutUs;