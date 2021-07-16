import React from 'react';
import styles from './Header.module.css';
import logo from '../../utils/images/logo-av.svg';
import { Link } from 'react-router-dom';
import SocialBar from './SocialBar/SocialBar';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Link to='/'>
          <img src={logo} alt="logo albert valbuena" />
          <div className={styles.logo_text}>
            <span>Albert Valbuena</span>
            <span>Full Stack Developer</span>
          </div>
        </Link>
      </div>
      <SocialBar />
    </div>
  )
};

export default Header;