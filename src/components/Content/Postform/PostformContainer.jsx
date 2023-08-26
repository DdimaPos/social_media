import PostForm from "./Postform";
import { onSubmitActionCreator, onTextChangeActionCreator } from '../../../redux/ProfileReducer';

const PostFormContainer = (props) =>{
    let onSubmit = (el) =>{
      props.dispatch(onSubmitActionCreator(el));
    }
    let onTextChange = (el) =>{
      props.dispatch(onTextChangeActionCreator(el));
    }
    return(
        <PostForm 
            onSubmit={onSubmit}
            onTextChange={onTextChange}/>
    );
}
export default PostFormContainer;
