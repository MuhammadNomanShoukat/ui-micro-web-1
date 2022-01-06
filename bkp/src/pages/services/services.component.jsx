import React, { useState, useEffect } from "react";
import Banner from "../../componenets/our-services/banner/banner.component";
import OurServices from "../../componenets/our-services/services/services.component";
import GreatProduct from "../../context/great-product/great-product.component";

import { services_list } from "./our-services.data";
import { our_strategies, code_level, work_history, clients_images, clients_desc, copyright } from "../home.data";

const Services = () => {
    
    return(
        <section>
            <Banner />
            <OurServices all_services={services_list}/>
            <GreatProduct />
            {/* <Footer />
            <CopyRight copyright_obj={copyright}/> */}
        </section>
    )
}

export default Services;