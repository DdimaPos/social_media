import React from 'react';
import logo from './img/logo.png';
import header_style from './Header.module.css';
function Header(){
    return(
      <div className={header_style.header}>
        <div className={header_style.logo_wrapper}><img src={logo}></img></div>
      </div>
    );
  }

export default Header;