import React from 'react';
import Postform from './Postform/Postform';
import cont_style from './Profile.module.css';
import Post from './Post/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';
function Content() {
    let avatar ='https://oir.mobi/uploads/posts/2021-04/1619454473_8-oir_mobi-p-krutoi-kot-zhivotnie-krasivo-foto-9.jpg';
  let PostData = [
    {message:'my first post'},
    {message:'how do you do bro'},
    {message:'YEAH BITCH! Magnets'},
  ];
  let PostEl = PostData.map((p) => <Post  message={p.message} src={avatar}/>);
    return(
      <div className={cont_style.content}>
        <ProfileInfo />
        <Postform />
        {PostEl}
      </div>
    );
  }

export default Content;