import React from "react";
import mes_style from "./his_message.module.css";
const His_message = (props) =>{
    return(
        <div className={mes_style.wrapper}>
            <div className={mes_style.text}>{props.text}</div>
        </div>
    );
}
export default His_message;