import React from 'react'
import style from './Footer.module.css'

function Footer() {

  const getYear = () => new Date().getFullYear()

  return (
    <div className={style.container}>
      <small>© {getYear()} - Albert Valbuena</small>
    </div>
  )
}

export default Footer