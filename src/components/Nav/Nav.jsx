import React from 'react';
import nav_style from "./nav.module.css";
import { NavLink } from 'react-router-dom';
import profileLogo from './logos/profile_logo.png';
import profileLogoActive from './logos/profile_logo_active.png';
import FriendsLogo from './logos/friends_logo.png';
import FriendsLogoActive from './logos/friends_logo_active.png';
import galleryLogo from './logos/gallery_logo.png';
import galleryLogoActive from './logos/gallery_logo_active.png';
import chatLogo from './logos/chat_logo_active.png';
import chatLogoActive from './logos/chat_logo.png';
function Nav() {
  const concatClasses = (isActive) => {
    const linkClasses = [nav_style.link];
    if (isActive) linkClasses.push(nav_style.active);
    return linkClasses.join(" "); 
  }
  const NavLogo = (props) =>{
    return(<div>
      <img className={nav_style.unactive}src={props.logo} alt="" />
      <img className={nav_style.active} src={props.logoActive} alt="" />
    </div>
    )
  }
    return(
      <div className={nav_style.nav}>
        <ul>
          <li className={nav_style.item}>
            <NavLink className={({ isActive }) => concatClasses(isActive)}
              to="/profile">
              <NavLogo logo={profileLogo} logoActive ={profileLogoActive}/>
            </NavLink>
          </li>
          <li className={nav_style.item}>
            <NavLink className={({ isActive }) => concatClasses(isActive)}
              to="/friends">
              <NavLogo logo={FriendsLogo} logoActive ={FriendsLogoActive}/>
            </NavLink>
          </li>
          <li className={nav_style.item}>
            <NavLink className={({ isActive }) => concatClasses(isActive)}
              to="/gallery">
              <NavLogo logo={galleryLogo} logoActive ={galleryLogoActive}/>
            </NavLink></li>
          <li className={nav_style.item}>
            <NavLink className={({ isActive }) => concatClasses(isActive)}
              to="/chat">
              <NavLogo logo={chatLogo} logoActive ={chatLogoActive}/>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }


export default Nav;