import React from 'react';
import PostformContainer from './Postform/PostformContainer';
import cont_style from './Profile.module.css';
import Post from './Post/Post';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import { useSelector } from 'react-redux';
function Profile() {
  const profilePage = useSelector(state => state.profilePage);
  let PostEl = profilePage.postData.map((el) => <Post message={el.message} src={profilePage.avatar}/>);
  return(
        <div className={cont_style.content}>
        <img src="" alt="" />
        <ProfileInfoContainer />
        <PostformContainer/>
        {PostEl}
    </div>
  );
}

export default Profile;