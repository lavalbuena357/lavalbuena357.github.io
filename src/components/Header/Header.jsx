import React from 'react'
import style from './Header.module.css'
import SocialBar from './SocialBar/SocialBar'
import logo from '../../utils/images/logo-av.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={style.container}>
      <div className={style.img_container}>
        <Link to='/'>
          <img src={logo} alt="logo albert valbuena" />
          <div className={style.logo_text}>
            <span>Albert Valbuena</span>
            <span>Full Stack Developer</span>
          </div>
        </Link>
      </div>
      <SocialBar />
    </div>
  )
}

export default Header