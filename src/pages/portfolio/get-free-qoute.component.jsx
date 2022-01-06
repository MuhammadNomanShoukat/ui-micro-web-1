import React, { useEffect } from "react";

import GreatProduct from "../../context/great-product/great-product.component";

import "./portfolio.style.scss";

const Portfolio = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
    return(
        <section id="get_free_quote">
            <GreatProduct title="Let’s build a great product together!" rightSide="hide"/>
        </section>
    )
}

export default Portfolio;