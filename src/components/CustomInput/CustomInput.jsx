import React from "react";
import "./CustomInput.css"
const CustomInput = ({type="text", placeholder=""}) => {
    return(
        <>
            <div>
                <input className="custom-input" type={type} placeholder={placeholder}/>
            </div>
        </>
    )
} 
export default CustomInput