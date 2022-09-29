import React from "react";
import "./CustomButton.css"
const CustomButton = ({type="", placeholder="", className=""}) => {
    return(
        <>
            <div className={`${className} button-container`}>
                <button className="custom-button" type={type}>
                        {placeholder}
                </button>
            </div>
        </>
    )
} 
export default CustomButton