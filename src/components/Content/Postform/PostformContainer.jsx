import PostForm from "./Postform";
import { onSubmitActionCreator, onTextChangeActionCreator } from '../../../redux/ProfileReducer';
import { connect } from "react-redux";
const mapDispatchToProps = (dispatch) =>{
  return{
    onSubmit: (el) =>{dispatch(onSubmitActionCreator(el));},
    onTextChange: (el) =>{dispatch(onTextChangeActionCreator(el));}
  }
}
const mapStoreToProps = (store) =>{return{}}
const PostFormContainer = connect(mapStoreToProps,mapDispatchToProps)(PostForm);
export default PostFormContainer;
