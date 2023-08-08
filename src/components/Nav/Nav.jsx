import React from 'react';
import nav_style from "./nav.module.css";
import { NavLink } from 'react-router-dom';
function Nav() {
    return(
      <div className={nav_style.nav}>
        <li>
          <ul className={nav_style.item}>
            <NavLink className={({ isActive }) => {const linkClasses = [nav_style.link];
              if (isActive) linkClasses.push(nav_style.active);
              return linkClasses.join(" "); }}
              to="/profile"
            >
              Profile
            </NavLink>
          </ul>
          <ul className={nav_style.item}><NavLink className={({ isActive }) => {const linkClasses = [nav_style.link];
              if (isActive) linkClasses.push(nav_style.active);
              return linkClasses.join(" "); }}
              to="/friends"
            >Friends</NavLink></ul>
          <ul className={nav_style.item}><NavLink className={({ isActive }) => {const linkClasses = [nav_style.link];
              if (isActive) linkClasses.push(nav_style.active);
              return linkClasses.join(" "); }}
              to="/gallery"
            >Gallery</NavLink></ul>
          <ul className={nav_style.item}><NavLink className={({ isActive }) => {const linkClasses = [nav_style.link];
              if (isActive) linkClasses.push(nav_style.active);
              return linkClasses.join(" "); }}
              to="/chat"
            >Messages</NavLink></ul>
        </li>
      </div>
    );
  }


export default Nav;