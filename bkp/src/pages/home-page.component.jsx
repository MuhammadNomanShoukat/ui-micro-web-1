import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { clients_images, clients_desc, copyright } from "./home.data";

import Banner from "../componenets/home/banner/banner-component";
import Services from "../componenets/home/services/services.component";
import Innovate from "../componenets/home/innovate/innovate.component";
import GreatWork from "../componenets/home/great-work/great-work.component";
import WorkHistory from "../componenets/home/work-history/work-history.component";
import CodeLevel from "../componenets/home/code-level/code-level.component";
import OurStrategy from "../componenets/home/our-strategy/our-strategy.component";
import OurClients from "../componenets/home/our-clients/our-clients.component";

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const Home = (props) => {
    const { services_list, work_history, code_level, our_strategies } = props.data.HomeReducer;
    const servicesDataArr = services_list ? services_list : [];
    const workHistoryDataArr = work_history ? work_history : [];
    const codeLevelArr = code_level ? code_level : [];
    const ourStrategiesArr = our_strategies ? our_strategies : [];

    return(
        <div>
            <Banner />
            <Services all_services={servicesDataArr}/>
            <Innovate />
            <GreatWork />
            <WorkHistory work_history_obj={workHistoryDataArr}/>
            <CodeLevel code_level_obj={codeLevelArr}/>
            <OurStrategy all_strategies={ourStrategiesArr}/>
            <OurClients all_clients={clients_images} client_desc_obj={clients_desc}/>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state
});
  

export default connect(mapStateToProps, null)(Home);