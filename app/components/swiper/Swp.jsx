'use client'
import React from 'react'
import style from "./Swp.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SwCard from '../card/SwCard';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const Swp = ({ products }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        rtl:true,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        autoplay:true
    }


    return (
            <div  className={`${style.swiper}`}>
                <Slider    className={`${style.slider}`} {...settings}>
                    {products.map(item => {
                        return (
                            <div className={`${style.cardContainer}`}>
                                <SwCard product={item} />
                            </div>
                        )
                    })}
                </Slider>
            </div>


    )
}

export default Swp
