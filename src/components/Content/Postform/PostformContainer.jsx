import PostForm from "./Postform";
import { onSubmitActionCreator, onTextChangeActionCreator } from '../../../redux/ProfileReducer';
import StoreContext from "../../../StoreContext";
const PostFormContainer = () =>{
    return(<StoreContext.Consumer>
      {(store) => {
        let onSubmit = (el) =>{
          store.dispatch(onSubmitActionCreator(el));
        }
        let onTextChange = (el) =>{
          store.dispatch(onTextChangeActionCreator(el));
        }
        return <PostForm 
          onSubmit={onSubmit}
          onTextChange={onTextChange}/>
        }
      }
    </StoreContext.Consumer>
        
    );
}
export default PostFormContainer;
