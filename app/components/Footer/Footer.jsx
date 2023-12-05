import Image from "next/image"
import styles from "./Footer.module.scss"
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
    return (
        <div className={`${styles.mainBody}`}>
            <hr />
            <div>
                <Image src={'/images/logoFarsi.svg'} width={120} height={60} alt="logo" />
            </div>
            <div className={`${styles.content}`}>
                <p className={`${styles.matn}`}>تلفن پشتیبانی </p>
                <p className={`${styles.matn}`}>021 - 61930000</p>
                <p className={`${styles.matn}`}>|</p>
                <p className={`${styles.matn}`}>هفت روز هفته 24 ساعته پاسخگوی شما هستیم</p>
            </div>
            <div className={`${styles.footer}`}>
                <div className={`${styles.footerContent}`}> با دیحی کالا
                    <div className={`${styles.footerTxt}`}>اتاق خبر دیجی کالا</div>
                    <div className={`${styles.footerTxt}`}>فروش در دیجی کالا</div>
                    <div className={`${styles.footerTxt}`}> فرصت های شغلی</div>
                    <div className={`${styles.footerTxt}`}>گزارش تخلف در دیجی کالا</div>
                    <div className={`${styles.footerTxt}`}>تماس با دیجی کالا</div>
                    <div className={`${styles.footerTxt}`}> در باره ی دیجی کالا</div>
                </div>
                <div className={`${styles.footerContent}`}> خدمات مشتریان
                    <div className={`${styles.footerTxt}`}>پاسخ به پرسش های متداول</div>
                    <div className={`${styles.footerTxt}`}>رویه های بازگرداندن کالا</div>
                    <div className={`${styles.footerTxt}`}>شرایط استفاده</div>
                    <div className={`${styles.footerTxt}`}>حریم خصوصی</div>
                    <div className={`${styles.footerTxt}`}>گزارش باگ</div>

                </div>
                <div className={`${styles.footerContent}`}> راهنمای خرید از دیجیکالا
                    <div className={`${styles.footerTxt}`}>نحوه ی ثبت سفارش </div>
                    <div className={`${styles.footerTxt}`}>رویه ارسال سفارش</div>
                    <div className={`${styles.footerTxt}`}>شیوه های پرداخت</div>

                </div>
                <div className={`${styles.footerContent}`}>همراه ما باشید
                    <div className={`${styles.logoContainer}`}>
                        <div className={`${styles.logo}`}><CiInstagram /></div>
                        <div className={`${styles.logo}`}><CiTwitter /></div>
                        <div className={`${styles.logo}`}><CiLinkedin /></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
