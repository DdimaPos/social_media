import { React } from "react";
import f_style from "./../messages.module.css";
import { NavLink } from "react-router-dom";
const Friend = (props) =>{
    return(
        <div className={f_style.friend + ' ' + f_style.active}>
            <img src={props.photo} alt="" />
            <div className={f_style.name}><NavLink to={props.id}>{props.name}</NavLink></div>
        </div>
    );
}
export default Friend;
