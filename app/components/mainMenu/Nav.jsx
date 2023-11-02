import React from 'react'
import style from "./Nav.module.scss"
import Link from 'next/link'
import { IoReorderThreeSharp } from "react-icons/io5"
import { CiPercent, CiDiscount1 } from "react-icons/ci"
import { FaShoppingBasket } from "react-icons/fa"
import { BsCardChecklist } from "react-icons/bs"
import { FaFireFlameCurved } from "react-icons/fa6"
import { GoLocation } from "react-icons/go"




const Nav = () => {
  return (
    <div className={`${style.mainContainer}`}>


      <div className={`${style.rightContainer}`}>
        <div className={`${style.fli}`} >
          <span className={`${style.fliIcon}`}><IoReorderThreeSharp /></span>
          <span className={`${style.fliName}`}>دسته بندی کالا ها</span>
          <span className={`${style.fliLine}`}>|</span></div>
        <ul className={style.ul}>
          <li className={`${style.li}`}>
            <Link className={`${style.a}`} href={"#"}>
              <span className={`${style.liIcon}`}><CiPercent /></span>
              <span className={`${style.liName}`}>شگفت انگیز ها</span>
            </Link>
          </li>
          <li className={`${style.li}`}>
            <Link className={`${style.a}`} href={"#"}>
              <span className={`${style.liIcon}`}><FaShoppingBasket /></span>
              <span className={`${style.liName}`}>سوپر مارکت</span>
            </Link>
          </li>
          <li className={`${style.li}`}>
            <Link className={`${style.a}`} href={"#"}>
              <span className={`${style.liIcon}`}><BsCardChecklist /></span>
              <span className={`${style.liName}`}>کارت هدیه</span>
            </Link>
          </li>
          <li className={`${style.li}`}>
            <Link className={`${style.a}`} href={"#"}>
              <span className={`${style.liIcon}`}><FaFireFlameCurved /></span>
              <span className={`${style.liName}`}>پر فروش ترین ها</span>
            </Link>
          </li>
          <li className={`${style.li}`}>
            <Link className={`${style.a}`} href={"#"}>
              <span className={`${style.liIcon}`}><CiDiscount1 /></span>
              <span className={`${style.liName}`}>تخفیف ها و پیشنهادات</span>
            </Link>
          </li>
        </ul>
        <div className={`${style.midNav}`} >
          <span>|</span>
          <Link className={`${style.li}`} href={"#"}>سوالی دارید ؟</Link>
          <Link className={`${style.li}`} href={"#"}> در دیجی کالا بفروشید! </Link>

        </div>

      </div>

      <div className={`${style.leftContainer}`}>
      <GoLocation className={`${style.liIcon}`}/>

        <Link href={"#"} className={`${style.a}`}>لطفا شهر خود را انتخاب کنید</Link>
      </div>











    </div>
  )
}

export default Nav
