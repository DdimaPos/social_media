import React from "react";
import mes_style from "./messages.module.css";
import My_message from "./my_message/my_message";
import His_message from "./his_message/his_message";
import { NavLink } from "react-router-dom";

const Friend = (props) =>{
    return(
        <div className={mes_style.friend + ' ' + mes_style.active}>
            <img src={props.photo} alt="" />
            <div className={mes_style.name}><NavLink to={props.id}>{props.name}</NavLink></div>
        </div>
    );
}

const Messages = (props) =>{
    return(
        <div className={mes_style.wrapper}>
            <div className={mes_style.fr_list}>
            <Friend id='1' photo="https://i.pinimg.com/736x/6e/ef/37/6eef3770e8aaf4a22e2e28944e0f0478.jpg" name="Walter White"/>
            <Friend id='2'photo="https://koshka.top/uploads/posts/2021-12/1640328596_1-koshka-top-p-kota-na-avatarku-1.jpg" name="Dima"/>
            <Friend id='3'photo="https://avatars.mds.yandex.net/i?id=5596d24cb431856c74aa0a15a051ab1ee75b7acb-4612849-images-thumbs&n=13" name="Jessie Pinkman" />
            </div>
            <div className={mes_style.chat}>
                <My_message text="hello nick"/>
                <His_message text="hello"/>
                <My_message text="как дела"/>
                <His_message text="I don't understand you"/>
                <My_message text="Еблан..."/>
                <My_message text="How do you do suka?"/>
            </div>
        </div>
    );
}
export default Messages;