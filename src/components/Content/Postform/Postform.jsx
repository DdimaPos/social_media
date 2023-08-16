import React from 'react';
import form_style from "./Postform.module.css";
function PostForm(props){
  let newPostInput = React.createRef();
  let onSubmit = (el) =>{
    el.preventDefault();
    if(newPostInput.current.value == '') return;
    newPostInput.current.value = '';
    props.addPost();

  }
  let onTextChange = (el) =>{
    let text = newPostInput.current.value;
    props.changeText(text);
  }
  return(
    <div className={form_style.postForm}>
      <div className={form_style.new__post}>New post</div>
      <form>
        <textarea onChange={onTextChange} ref={newPostInput} type='text' placeholder='Type text' value={props.textChanged}/>
        <button onClick={onSubmit} className={form_style.submit}>Post</button>
      </form>
    </div>
  );
} 

export default PostForm; 