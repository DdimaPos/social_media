import React from 'react';
import logo from './../../logo.svg';
import header_style from './Header.module.css';
function Header(){
    return(
      <div className={header_style.header}>
        <img src={logo}></img>
      </div>
    );
  }

export default Header;