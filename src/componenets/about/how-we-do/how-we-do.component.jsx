import React from "react";
import "./how-we-do.style.scss";
import {Row, Col, Container} from "react-bootstrap";

import About_3_bg from "../../../assets/images/about-3-bg.png";

var sectionStyle = {
    backgroundImage: `url(${About_3_bg})`
};

const HowWeDo = () => {
    return(
        <section id="how_we_do_section" style={ sectionStyle }>
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <div className="content">
                        <div className="heading">
                            <h2>HOW <span className="green-text">WE DO</span></h2>
                        </div>
                        <div className="description">
                            <p>
                            From identifying possibilities, to engineering solutions, to carrying out strategies we work with clients to produce superior results and achieve higher level of business performance through flexible, low-risk, low-cost IT business solutions that enable our clients to adapt as their marketplace evolves. We deliver the right IT solutions that build value, beat the competition and generate substantial, lasting financial impact for our clients. Our strategic approach towards creating dynamic IT solutions provides a competitive advantage to our customers, enabling them to enjoy on-demand scalable solutions at low cost with no surprises.
                            </p>
                        </div>
                    </div>
                </Container>
            </Container>
        </section>
    )
}

export default HowWeDo;