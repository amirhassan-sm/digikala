'use client'
import React from 'react'
import style from "./Swp.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SwCard from '../card/SwCard';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import Link from 'next/link';

const Swp = ({ products }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 100,
        slidesToShow: 6,
        slidesToScroll: 1,
        rtl: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true
    }


    return (
        <div className={`${style.swiper}`}>
            <Slider className={`${style.slider}`} {...settings}>
                {products.map(item => {
                    return (
                        <div className={`${style.cardContainer}`}>
                            <SwCard product={item} />

                        </div>

                    )
                })}
                <div className={style.cardContainer}>
                    <div className={style.showAll}>
                        <Link className={style.link} href={"/incOffers"}>
                            <div >
                                مشاهده همه
                            </div>
                            <div>
                                < MdOutlineArrowCircleLeft className={style.arrow} />
                            </div>
                        </Link>
                    </div>
                </div>
            </Slider>
        </div>


    )
}

export default Swp
