"use client"
import React from 'react'
import styles from './SwCard.module.css'
import Image from 'next/image'
import AddToCart from '../cart/AddToCart'
import { useSelector } from 'react-redux'
import Change from '../cart/Change'

const SwCard = ({ product }) => {
  const data = useSelector(state => state.shoppingCart)

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.incredibleOfferImageContainer}`}>
        {
          product.incredibleOffers === true ? <Image alt={product.name} src='/images/IncredibleOffer.svg' width={100} height={15} /> : null
        }
      </div>

      <Image alt={product.name} src={product.indexImageUrl} width={80} height={80} />

      {product.priceWithDiscount === 0 ? (
        <div className={`${styles.priceContainer}`}>
          {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
        </div>
      ) : (
        <div className={`${styles.priceDetail}`}>
          <div className={`${styles.priceContainer}`}>
            <div className={`${styles.priceBeforeOff}`}>
              {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              تومان
            </div>
            <div>
              {product.priceWithDiscount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              تومان
            </div>
          </div>
          <label className={`${styles.offPrcent}`}>
            {Math.floor(
              ((product.price - product.priceWithDiscount) / product.price) * 100
            )}
            %
          </label>



        </div>

      )}
      <div >
        {
          data.items.find(item => item.id == product.id) ?
            <Change id={product.id} /> :
             product.stock !== 0  ? <AddToCart product={product}  />
             : <span> ناموجود</span>

        }
      </div>

    </div>
  )
}

export default SwCard