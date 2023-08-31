import { React } from "react";
import Info_style from './profileInfo.module.css';
const ProfileInfo = (props) =>{
  let avatar = 'https://oir.mobi/uploads/posts/2021-04/1619454473_8-oir_mobi-p-krutoi-kot-zhivotnie-krasivo-foto-9.jpg';
    return(
        <div className={Info_style.info_wrapper}>
          <div className={Info_style.photo}><img src={props.avatar}></img></div>
          <div className={Info_style.description}>
            <div className={Info_style.name}>Dima_pos</div>
            <div className={Info_style.quote}>Королева бала в рот вас ебала</div>
          </div>
        </div>
    );
}
export default ProfileInfo;