import React from "react";
import in_style from "./input.module.css";
const Input = (props) =>{
    let Send = (message) =>{
        message.preventDefault();
        let newMes = newMessageInput.current.value;
        newMessageInput.current.value = '';
        if(newMes == "") return;
        props.sendMes(newMes);
    }
    let newMessageInput = React.createRef();
    return(
        <div className={in_style.wrapper}>
            <div className={in_style.textInput}>
                <textarea ref={newMessageInput}></textarea>
            </div>
            <div className={in_style.button_wrapper}>
                <button onClick={Send}>Send</button>
            </div>
        </div>
    );
}

export default Input;