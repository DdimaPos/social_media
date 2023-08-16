import React from "react";
import mes_style from "./messages.module.css";
import My_message from "./my_message/my_message";
import His_message from "./his_message/his_message";
import Friend from "./Friend/Friend";
import Input from "./Input/input";


const Messages = (props) =>{
    let FriendEl = props.mesData.fData.map((el) => <Friend id={el.id} photo={el.src} name={el.Fname}/>);
    let MessageElem = props.mesData.mesData.map((el) => {
        if(el.type == 'my'){return <My_message text={el.message} id={el.id}/>;}
        else{return <His_message text={el.message} id={el.id}/>;}
    });
    return(
        <div className={mes_style.wrapper}>
            <div className={mes_style.fr_list}>
                {FriendEl}
            </div>
            <div className={mes_style.chat}>
                {MessageElem}
                <Input state={props.mesData} sendMes={props.sendMes} changeMesText={props.changeMesText} mesTextchanged={props.mesData.mesChangedText}/>
            </div>
        </div>
    );
}
export default Messages;