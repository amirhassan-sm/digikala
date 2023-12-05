"use client"
import React from 'react'
import style from "./Header.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BsSearch } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { CiUser } from 'react-icons/ci'

const Header = () => {
    const route = useRouter()

    const enter=(e)=>{
        
        if (e.keyCode == 13) {
            route.push(`/search/${e.target.value}`)
        }

    }
    const icon = (e) => {


        if (e.target.value !== "") {
            document.getElementById("sch").style.display = "none"
        }
        else {
            document.getElementById("sch").style.display = "block"

        }
    }



 
    return (
        <div className={`${style.headContainer}`}>

            <div className={`${style.leftContainer}`}>

                <div className={`${style.leftLogo}`}>
                    <Link href={"/checkout/cart"}  className={`${style.shop}`}><FiShoppingCart /></Link>
                    <div className={`${style.line}`}>|</div>
                    <Link href={"/Auth/loggin"} className={`${style.user} ${style.leftLogo}`}><CiUser /></Link>
                </div>

            </div>

            <div className={`${style.rightContainer}`}>


                <div className={`${style.searchContainer}`} >
                    <input type='text' onChange={icon} onKeyDown={enter} id='search' className={`${style.search}`} placeholder={"جستجو"} />
                    <label id='sch' className={`${style.srlogo}`} htmlFor="search"><BsSearch /></label>
                </div>

                <div className={`${style.logo}`}>
                    <Link href={"/"}>
                        <Image src={"/images/logo.svg"} width={120} height={60} />
                    </Link>

                </div>

            </div>








        </div>
    )
}

export default Header
