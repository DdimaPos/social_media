import React from "react";
import mes_style from "./my_message.module.css";
const My_message = (props) =>{
    return(
        <div className={mes_style.wrapper}>
            <div className={mes_style.text}>{props.text}</div>
        </div>
    );
}
export default My_message;