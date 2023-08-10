import React from 'react';
import Postform from './Postform/Postform';
import cont_style from './Profile.module.css';
import Post from './Post/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';
function Profile(props) {
  let PostEl = props.pData.map((el) => <Post message={el.message} src={props.ava}/>);
    return(
      <div className={cont_style.content}>
        <ProfileInfo />
        <Postform />
        {PostEl}
      </div>
    );
  }

export default Profile;