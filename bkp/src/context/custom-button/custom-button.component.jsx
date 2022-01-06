import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({title, href, icon, name}) => {
    return(
        <div className="custom-button-wrapper">
            <div className="custom-button">
                <a href={href} className={name ? name : "custom-btn-style"}>
                    {title} {icon ? `<span className="btn-icon">${icon}</span>` : ""}
                </a>
            </div>
        </div>
    )
}

export default CustomButton;