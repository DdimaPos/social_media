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
    return(
      <div className={nav_style.nav}>
        <li>
          <ul className={nav_style.item}>
            <NavLink className={({ isActive }) => {const linkClasses = [nav_style.link];
              if (isActive) linkClasses.push(nav_style.active);
              return linkClasses.join(" "); }}
              to="/profile"
            ><img className={nav_style.unactive}src={profileLogo} alt="" />
            <img className={nav_style.active} src={profileLogoActive} alt="" />
            </NavLink>
          </ul>
          <ul className={nav_style.item}><NavLink className={({ isActive }) => {const linkClasses = [nav_style.link];
              if (isActive) linkClasses.push(nav_style.active);
              return linkClasses.join(" "); }}
              to="/friends"
            ><img className={nav_style.unactive}src={FriendsLogo} alt="" />
            <img className={nav_style.active} src={FriendsLogoActive} alt="" /></NavLink></ul>
          <ul className={nav_style.item}><NavLink className={({ isActive }) => {const linkClasses = [nav_style.link];
              if (isActive) linkClasses.push(nav_style.active);
              return linkClasses.join(" "); }}
              to="/gallery"
            ><img className={nav_style.unactive}src={galleryLogo} alt="" />
            <img className={nav_style.active} src={galleryLogoActive} alt="" /></NavLink></ul>
          <ul className={nav_style.item}><NavLink className={({ isActive }) => {const linkClasses = [nav_style.link];
              if (isActive) linkClasses.push(nav_style.active);
              return linkClasses.join(" "); }}
              to="/chat"
            ><img className={nav_style.unactive}src={chatLogo} alt="" />
            <img className={nav_style.active} src={chatLogoActive} alt="" /></NavLink></ul>
        </li>
      </div>
    );
  }


export default Nav;