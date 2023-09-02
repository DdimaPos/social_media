import React from "react";
import mes_style from "./messages.module.css";
import My_message from "./my_message/my_message";
import His_message from "./his_message/his_message";
import Friend from "./Friend/Friend";
import InputContainer from "./Input/inputContainer";
import { useSelector } from "react-redux";

const Messages = (props) =>{
    const mesPage = useSelector(state => state.mesPage)
    let FriendEl = mesPage.fData.map((el) => <Friend id={el.id} photo={el.src} name={el.Fname}/>);
    let MessageElem = mesPage.mesData.map((el) => {
        if(el.type == 'my'){return <My_message text={el.message} id={el.id}/>;}
        else{return <His_message text={el.message} id={el.id}/>;}
    });
    return(
            <div className={mes_style.wrapper}>
            <div className={mes_style.fr_list}>
                {FriendEl}
            </div>
            <div className={mes_style.chat}>
                <div className={mes_style.messages_wrapper}>{MessageElem}</div>                
                <InputContainer/>
            </div>
        </div>
    );
}
export default Messages;