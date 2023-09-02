import React from "react";
import in_style from "./input.module.css";
const Input = (props) =>{
    const Send = (message) =>{
        message.preventDefault();
        if(newMessageInput.current.value == "") return;
        newMessageInput.current.value = '';
        props.Send(message);
    }
    const isEnter = (ev) =>{
        if(ev.code == 'Enter')Send(ev);
    }
    const MesChanged = () =>{
        let text = newMessageInput.current.value;
        props.MesChanged(text);
    }
    let newMessageInput = React.createRef();
    return(
        <div className={in_style.wrapper}>
            <div className={in_style.textInput}>
                <textarea onKeyDown={isEnter} onChange={MesChanged} ref={newMessageInput} value={props.mesChangedText}/>
            </div>
            <div className={in_style.button_wrapper}>
                <button onClick={Send}>Send</button>
            </div>
        </div>
    );
}

export default Input;