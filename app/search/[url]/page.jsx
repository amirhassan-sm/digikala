import Card from '@/app/components/card/Card'
import { GET } from '@/get/GET'
import React from 'react'
import style from "../../components/style/search.module.css"
import { notFound } from 'next/navigation'

const page = async (context) => {
  const response = await GET(`/products/search/${context.params.url}`)
  const result = await response.json()

  if (result.length == (undefined || 0)) {
    notFound()
  }

  return (
    <div className={`${style.mainContainer}`}>
      {result.map(item => (
        <div className={`${style.cardContainer}`} >
          <Card product={item} />
        </div>
      ))}


    </div>
  )
}

export default page
