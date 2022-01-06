import React from "react";
import "./heading.style.scss";

const Heading = ({text1, text2, left_green}) => {
    return(
        <div className="heading-wrapper">
            <div className="heading-text" >
                {
                (left_green === "true")
                ?
                <h2><span className="green-text">{text2}</span> {text1}</h2>
                :
                <h2>{text1} <span className="green-text">{text2}</span></h2>
                }
            </div>
        </div>
    )
}

export default Heading;