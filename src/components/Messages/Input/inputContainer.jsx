import Input from "./input";
import { MesChangedActionCreator, SendActionCreator } from "../../../redux/MessagesReducer";
const InputContainer = (props) =>{
    let Send = (message) =>{
        props.dispatch(SendActionCreator(message));
    }
    let MesChanged = (text) =>{
        props.dispatch(MesChangedActionCreator(text));
    }
    return(<Input 
        Send={Send}
        MesChanged={MesChanged}/>)
}
export default InputContainer;