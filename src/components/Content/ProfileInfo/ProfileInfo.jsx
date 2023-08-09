import { React } from "react";
import Info_style from './profileInfo.module.css';
const ProfileInfo = () =>{
    return(
        <div className={Info_style.description}>
          <div className={Info_style.photo}><img src='https://koshka.top/uploads/posts/2021-12/thumbs/1638599322_3-koshka-top-p-kotiki-na-avatarku-3.jpg'></img></div>
          <div className={Info_style.quote}>Королева бала в рот вас ебала</div>
        </div>
    );
}
export default ProfileInfo;