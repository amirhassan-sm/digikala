'use client'
import Image from 'next/image'
import React from 'react'
import style from "./style/Topkala.module.css"

const Topkala = ({url}) => {
  return (
    <div className={style.container}>
        {/* <img className={style.img} src={url.imageUrl} alt="topkala" /> */}
        <Image className={`${style.img}`} fill src={url.imageUrl} />

      
    </div>
  )
}

export default Topkala
