import Input from "./input";
import { MesChangedActionCreator, SendActionCreator } from "../../../redux/MessagesReducer";
import { connect } from "react-redux";
const mapDispatchToProps = (dispatch) =>{
    return{
        Send: (message) =>{dispatch(SendActionCreator(message));},
        MesChanged:(text) =>{dispatch(MesChangedActionCreator(text));}
    }
}
const mapStoreToProps = (store) =>{return{}}
const InputContainer = connect(mapStoreToProps, mapDispatchToProps)(Input);
export default InputContainer;