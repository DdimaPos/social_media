import React from 'react';
import nav_style from "./nav.module.css";
function Nav() {
    return(
      <div className={nav_style.nav}>
        <li>
          <ul className={`${nav_style.item} ${nav_style.active}`}><a href=''>My profile</a></ul>
          <ul className={nav_style.item}><a href=''>Friends</a></ul>
          <ul className={nav_style.item}><a href=''>Gallery</a></ul>
          <ul className={nav_style.item}><a href=''>Messages</a></ul>
        </li>
      </div>
    );
  }


export default Nav;