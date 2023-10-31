import React from 'react'
import { AiOutlineRightCircle } from 'react-icons/ai';
import style from "./style/Nav.module.css"
const RightNav = ({onClick}) => {
  return (
    <div className={`${style.Mcontainer}`} onClick={onClick}>
        <AiOutlineRightCircle className={`${style.RNav}`} />
      
    </div>
  )
}

export default RightNav
