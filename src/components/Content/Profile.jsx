import React from 'react';
import PostformContainer from './Postform/PostformContainer';
import cont_style from './Profile.module.css';
import Post from './Post/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import StoreContext from '../../StoreContext';
function Profile() {
    return(<StoreContext.Consumer>
      {store => {
        debugger
        let PostEl = store.getState().profilePage.postData.map((el) => <Post message={el.message} src={store.getState().profilePage.avatar}/>);
        debugger;
        return(
          <div className={cont_style.content}>
          <img src="" alt="" />
          <ProfileInfo />
          <PostformContainer/>
          {PostEl}
      </div>
        );
      }}
    </StoreContext.Consumer>
      
    );
  }

export default Profile;