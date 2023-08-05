import React from 'react';
import Postform from './Postform/Postform';
import cont_style from './Content.module.css';
import Post from './Post/Post';
function Content() {
    return(
      <div className={cont_style.content}>
        <div className={cont_style.description}>
          <div className={cont_style.photo}><img src='https://koshka.top/uploads/posts/2021-12/thumbs/1638599322_3-koshka-top-p-kotiki-na-avatarku-3.jpg'></img></div>
          <div className='quote'>Королева бала в рот вас ебала</div>
        </div>
        <Postform />
        <Post src='https://i.pinimg.com/736x/6e/ef/37/6eef3770e8aaf4a22e2e28944e0f0478.jpg' message='my first post'/>
        <Post message='how do you do' src='https://koshka.top/uploads/posts/2021-12/1640328596_1-koshka-top-p-kota-na-avatarku-1.jpg'/>
        <Post message='magnets bitch' src='https://avatars.mds.yandex.net/i?id=5596d24cb431856c74aa0a15a051ab1ee75b7acb-4612849-images-thumbs&n=13'/>
        
      </div>
    );
  }

export default Content;