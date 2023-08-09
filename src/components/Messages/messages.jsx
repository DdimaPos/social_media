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
    
    let FData = [
        {Fname: 'Walter White',id: '1', src:'https://i.pinimg.com/736x/6e/ef/37/6eef3770e8aaf4a22e2e28944e0f0478.jpg'},
        {Fname: 'Dima',id: '2', src:'https://koshka.top/uploads/posts/2021-12/1640328596_1-koshka-top-p-kota-na-avatarku-1.jpg'},
        {Fname: 'Jessie',id: '3', src:'https://avatars.mds.yandex.net/i?id=5596d24cb431856c74aa0a15a051ab1ee75b7acb-4612849-images-thumbs&n=13'}];
    let FriendEl = FData.map((el) => <Friend id={el.id} photo={el.src} name={el.Fname}/>);
    
    let MessagesData = [
        {message: 'hello nick',id: 1, type:'my'},
        {message: 'hello',id: 2, type:'his'},
        {message: 'как дела',id: 4, type:'my'},
        {message: 'I don`t understand you',id: 5, type:'his'},
        {message: 'Еблан...',id: 6, type:'my'},
        {message: 'How do you do suka?',id: 7, type:'my'},];
    let MessageElem = MessagesData.map((el) => {
        if(el.type == 'my'){
            return <My_message text={el.message} id={el.id}/>;
        }
        else{
            return <His_message text={el.message} id={el.id}/>;
        }
        
    });

    return(
        <div className={mes_style.wrapper}>
            <div className={mes_style.fr_list}>
                {FriendEl}
            </div>
            <div className={mes_style.chat}>
                {MessageElem}
            </div>
        </div>
    );
}
export default Messages;