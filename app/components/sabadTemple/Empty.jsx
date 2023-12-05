"use client"
import Image from "next/image"
import styles from "./Empty.module.scss"
const Empty = () => {
    return (
        <div className={`${styles.direction}`}>
            <div className={`${styles.container}`}>
                <div className={`${styles.content}`}>
                    <div>
                    <Image src={"/images/emptyCart.svg"} width={300} height={170}/>
                    </div>
                    <p className={`${styles.text}`}>سبد خرید شما خالی است!</p>
                    <p className={`${styles.Ptext}`}>می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</p>
                </div>
            </div>
        </div>
    )
}

export default Empty
