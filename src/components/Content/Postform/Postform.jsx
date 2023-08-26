import React from 'react';
import form_style from "./Postform.module.css";
//import { onSubmitActionCreator, onTextChangeActionCreator } from '../../../redux/ProfileReducer';
const PostForm = (props) => {
  let newPostInput = React.createRef();
  let onSubmit = (el) =>{
    el.preventDefault();
    if(newPostInput.current.value == '') return;
    newPostInput.current.value = '';
    props.onSubmit(el)

  }
  let keyDownTrack = (el) => {
    if (el.code == 'Enter') onSubmit(el);
  }
  let onTextChange = (el) =>{
    let text = newPostInput.current.value;
    props.onTextChange(text);
  }
  return(
    <div className={form_style.postForm}>
      <div className={form_style.new__post}>New post</div>
      <form>
        <textarea onKeyDown={keyDownTrack} onChange={onTextChange} ref={newPostInput} type='text' placeholder='Type text' value={props.textChanged}/>
        <button onClick={onSubmit} className={form_style.submit}>Post</button>
      </form>
    </div>
  );
} 

export default PostForm; 