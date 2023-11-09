"use client"
import React from 'react'
import Swp from './Swp'
import style from "./Curusel.module.scss"
import Image from 'next/image'
const Curusel = ({ products }) => {
    return (

        <div className={`${style.mainContainer}`}>

            <div className={`${style.left}`}>
                <Swp products={products} />
            </div>
            <div className={`${style.right}`}>
                <div>
                    <Image src={"/images/amazingTypo.png"} width={75} height={60} />

                </div>
                <div>
                    <Image src={"/images/box.png"} width={130} height={100} />
                </div>
                <div  className={`${style.showAll}`}>مشاهده همه</div>
            </div>

        </div>
    )
}

export default Curusel
