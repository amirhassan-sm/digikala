'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from "./style/SevenIcons.module.css"

const SevenIcons = ({ icons }) => {

  return (
    <div className={`${style.outerContainer}`}>
      {
        icons.map(item => {
          return (
            <div className={`${style.iconContainer}`}>
              <Link style={{textDecoration:"none"}} href={`/sevenIcons/${item.url}`}>
                <div className={`${style.container}`}>
                <div><Image width={50} height={40} src={`/images/${item.iconName}`} /></div>
                <p className={`${style.label}`}>{item.label}</p>
                </div>
              </Link>

            </div>
          )
        })
      }


    </div>
  )
}

export default SevenIcons
