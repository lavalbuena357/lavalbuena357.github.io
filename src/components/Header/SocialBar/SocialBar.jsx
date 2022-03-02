/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import style from './SocialBar.module.css'
import { social } from '../../../utils/SocialData.js'

function SocialBar() {
  return (
    <div className={style.container}>
      <div className={style.social_container}>
        {social.map((el, i) => {
          return (
            <a key={i} href={el.link} target='_blank' id={i}>{el.icon}</a>
          )
        })}
      </div>
    </div>
  )
}

export default SocialBar