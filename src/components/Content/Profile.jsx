import React from 'react';
import PostformContainer from './Postform/PostformContainer';
import cont_style from './Profile.module.css';
import Post from './Post/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';
function Profile(props) {
  let PostEl = props.profData.postData.map((el) => <Post message={el.message} src={props.profData.avatar}/>);
    return(
      <div className={cont_style.content}>
        <img src="" alt="" />
        <ProfileInfo />
        <PostformContainer dispatch={props.dispatch} textChanged={props.profData.textChange}/>
        {PostEl}
      </div>
    );
  }

export default Profile;