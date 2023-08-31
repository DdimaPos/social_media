import Input from "./input";
import { MesChangedActionCreator, SendActionCreator } from "../../../redux/MessagesReducer";
import { connect } from "react-redux";
let mapDispatchToProps = (dispatch) =>{
    return{
        Send: (message) =>{
            dispatch(SendActionCreator(message));
        },
        MesChanged:(text) =>{
            dispatch(MesChangedActionCreator(text));
        }
    }
}
let mapStoreToProps = (store) =>{
    return{}
}
const InputContainer = connect(mapStoreToProps, mapDispatchToProps)(Input);
export default InputContainer;