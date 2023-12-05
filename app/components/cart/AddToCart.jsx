import React from 'react'
import style from "./AddToCart.module.scss"
import { useDispatch } from 'react-redux'
import { addToShop } from '@/Store/shop/CartSlice'

const AddToCart = ({product}) => {

    const dispatcher = useDispatch()
    const addHandeler = () => {
        dispatcher(addToShop(product))
    }
    return (
        <div className={style.button} onClick={addHandeler}>
            افزودن به سبد

        </div>
    )
}

export default AddToCart
