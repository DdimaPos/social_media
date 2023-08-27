import Input from "./input";
import { MesChangedActionCreator, SendActionCreator } from "../../../redux/MessagesReducer";
import StoreContext from "../../../StoreContext";
const InputContainer = (props) =>{    
    return(<StoreContext.Consumer>
            {(store) =>{
                let Send = (message) =>{
                    store.dispatch(SendActionCreator(message));
                }
                let MesChanged = (text) =>{
                    store.dispatch(MesChangedActionCreator(text));
                   } 
                return <Input 
                Send={Send}
                MesChanged={MesChanged}/> 
                }
            }
        </StoreContext.Consumer>)
}
export default InputContainer;