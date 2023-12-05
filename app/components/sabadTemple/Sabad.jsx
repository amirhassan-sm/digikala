"use client"
import { useSelector } from "react-redux"
import styles from "./Sabad.module.scss"
import { IoColorPaletteSharp } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import Image from "next/image";
import Change from "../cart/Change";
const Sabad = () => {
    const data = useSelector(state => state.shoppingCart)
    console.log(data)

    return (
        <div>
            <div className={`${styles.mainContainer}`}>
                <div className={`${styles.leftContainer}`}>
                    <div className={`${styles.details} `}>
                        <div className={`${styles.detailP} ${styles.Tprice}`}>
                            <p>قیمت کالا ها:</p>
                            <p>{data.TotalPrice} تومان</p>
                        </div>
                        <div className={`${styles.detailP} ${styles.Pprice}`}>
                            <p>جمع سبد خرید :</p>
                            <p>{data.Totalpaid} تومان</p>
                        </div>
                        <div className={`${styles.detailP} ${styles.Dprice}`}>
                            <p>سود شما از خرید :</p>
                            <p>{data.TotaDiscount} تومان</p>
                        </div>
                        <div className={`${styles.order}`}>ثبت سفارش</div>


                    </div>


                </div>
                <div className={`${styles.rightContainer}`}>
                    <p className={`${styles.text}`}>سبد خرید شما</p>
                    <p className={`${styles.TotalCount}`}>{data.ToatalCount} کالا</p>
                    {data.items.map(item => {
                        return <div className={styles.product}>
                            <div className={`${styles.right}`}>
                                <Image src={`${item.indexImageUrl}`} width={100} height={80} />
                                {item.dailySuggest == true ?
                                    <Image src={'/images/IncredibleOffer.svg'} width={110} height={100} />
                                    : null}
                                <Change id={item.id} />
                            </div>
                            <div className={`${styles.left}`}>
                                <div className={`${styles.name}`}>{item.name}</div>
                                <div className={`${styles.name}`}><IoColorPaletteSharp /></div>
                                <div className={`${styles.name}`}><BsShop /> دیجی کالا</div>
                                <div className={`${styles.discount}`}>  {item.price - item.priceWithDiscount} تومان تخفیف</div>
                                <div className={`${styles.price}`}>{item.price} تومان</div>

                            </div>

                        </div>
                    })}

                </div>

            </div>
        </div>
    )
}

export default Sabad
