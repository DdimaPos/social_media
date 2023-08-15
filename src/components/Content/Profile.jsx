import React from 'react';
import Postform from './Postform/Postform';
import cont_style from './Profile.module.css';
import Post from './Post/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';
function Profile(props) {
  let PostEl = props.profData.postData.map((el) => <Post message={el.message} src={props.profData.avatar}/>);
    return(
      <div className={cont_style.content}>
        <ProfileInfo />
        <Postform addPost={props.addPost} changeText={props.changePostText} textChanged={props.profData.textChange}/>
        {PostEl}
      </div>
    );
  }

export default Profile;