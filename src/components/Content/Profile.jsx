import React from 'react';
import Postform from './Postform/Postform';
import cont_style from './Profile.module.css';
import Post from './Post/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';
function Content() {
    return(
      <div className={cont_style.content}>
        <ProfileInfo />
        <Postform />
          <Post src='https://i.pinimg.com/736x/6e/ef/37/6eef3770e8aaf4a22e2e28944e0f0478.jpg' message='my first post'/>
          <Post message='how do you do bro' src='https://koshka.top/uploads/posts/2021-12/1640328596_1-koshka-top-p-kota-na-avatarku-1.jpg'/>
          <Post message='YEAH BITCH! Magnets' src='https://avatars.mds.yandex.net/i?id=5596d24cb431856c74aa0a15a051ab1ee75b7acb-4612849-images-thumbs&n=13'/>
        
      </div>
    );
  }

export default Content;