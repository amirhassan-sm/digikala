import React from 'react'
import { AiOutlineLeftCircle } from 'react-icons/ai';
import style from "./style/Nav.module.css"

const LeftNav = ({onClick}) => {
  return (
    <div className={`${style.container}`} onClick={onClick}>
        <AiOutlineLeftCircle className={`${style.Nav}`} />
      
    </div>
  )
}

export default LeftNav
