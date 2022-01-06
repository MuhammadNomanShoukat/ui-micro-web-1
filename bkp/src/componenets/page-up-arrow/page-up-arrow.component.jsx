import React from "react";

import "./page-up-arrow.scss";

const PageUpArrow = () => {
    const moveToTop = () => {
        window.scrollTo(0, 0);
    }
    return(
        <div className="page-up-wrapper">
            <div className="arrow-content">
                <div className="arrow-block" onClick={()=>moveToTop()}>
                    <span>^</span>
                </div>
            </div>
        </div>
    )
}

export default PageUpArrow;