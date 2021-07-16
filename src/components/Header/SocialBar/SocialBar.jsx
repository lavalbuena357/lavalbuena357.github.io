/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styles from './SocialBar.module.css';
import { social } from '../../../utils/SocialData.js'

function SocialBar() {
  return (
    <div className={styles.container}>
      <div className={styles.social_container}>
        {social.map((el, i) => {
          return (
            <a href={el.link} target='_blank' id={i}>{el.icon}</a>
          )
        })}
      </div>
    </div>
  )
};

export default SocialBar;