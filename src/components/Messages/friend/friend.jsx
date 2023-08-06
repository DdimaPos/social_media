import React from "react";
import f_style from './friend.module.css';
const Friend = (props) =>{
    return(
        <div className={f_style.friend}>
            <img src={props.photo} alt="" />
            <div className={f_style.name}>{props.name}</div>
        </div>
    );
}

export default Friend;