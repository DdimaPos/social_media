import React from 'react';
import form_style from "./Postform.module.css";
function PostForm(){
    return(
      <div className={form_style.postForm}>
        <div className={form_style.new__post}>New post</div>
        <form>
          <input type='text' placeholder='Type text'></input>
          <input type='submit' value='Post'></input>
        </form>
      </div>
    );
  }

export default PostForm;