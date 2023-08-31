import PostForm from "./Postform";
import { onSubmitActionCreator, onTextChangeActionCreator } from '../../../redux/ProfileReducer';
import { connect } from "react-redux";
/*const PostFormContainer = () =>{
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
}*/
let mapDispatchToProps = (dispatch) =>{
  return{
    onSubmit: (el) =>{
      dispatch(onSubmitActionCreator(el));
    },
    onTextChange: (el) =>{
      dispatch(onTextChangeActionCreator(el));
    }
  }
}
let mapStoreToProps = (store) =>{
  return{
    
  }
}
const PostFormContainer = connect(mapStoreToProps,mapDispatchToProps)(PostForm);
export default PostFormContainer;
