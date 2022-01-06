import React from "react";

import GreatProduct from "../../context/great-product/great-product.component";

import "./get-free-qoute.style.scss";

const GetFreeQuote = () => {
    return(
        <section id="get_free_quote">
            <GreatProduct title="Let’s build a great product together!" rightSide="hide"/>
        </section>
    )
}

export default GetFreeQuote;