import React from 'react'
import style from "./Nav.module.scss"
import Link from 'next/link' 
import {IoReorderThreeSharp} from "react-icons/io5"

const Nav = () => {
  return (
    <div className={`${style.mainContainer}`}>


      <div className={`${style.rightContainer}`}>
        <div className={`${style.fli}`} > 
        <span className={`${style.fliIcon}`}><IoReorderThreeSharp/></span>
        <span className={`${style.fliName}`}>دسته بندی کالا ها</span>
        <span className={`${style.fliLine}`}>|</span></div>
        <ul className={style.ul}>
          <li className={`${style.li}`}><Link className={`${style.a}`} href={"#"}>hi</Link></li>
          <li className={`${style.li}`}><Link className={`${style.a}`} href={"#"}>hi</Link></li>
          <li className={`${style.li}`}><Link className={`${style.a}`} href={"#"}>hi</Link></li>
          <li className={`${style.li}`}><Link className={`${style.a}`} href={"#"}>hi</Link></li>
        </ul>

      </div>

      <div className={`${style.leftContainer}`}>
        it is left container
      </div>











    </div>
  )
}

export default Nav
