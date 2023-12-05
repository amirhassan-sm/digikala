"use client"
import React from 'react'
import styles from "./page.module.scss"
import { useSelector } from 'react-redux'
import Empty from '@/app/components/sabadTemple/Empty'
import Sabad from '@/app/components/sabadTemple/Sabad'

const page = () => {
  const data = useSelector(state => state.shoppingCart)


  return (
    <div>
      {data.ToatalCount == 0 ? <Empty/> : <Sabad/>}

    </div>

  )
}

export default page
