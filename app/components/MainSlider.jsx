'use client'
import React, { useState } from 'react'
import ReactImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/scss/image-gallery.scss";
import LeftNav from './LeftNav';
import RightNav from './RightNav';

const MainSlider = ({ products }) => {
    const [visibliti, setvisibliti] = useState(false)
    return (
        <div  
         onMouseOver={()=>{setvisibliti(true)} }onMouseOut={()=>{setvisibliti(false)}} 
         >
            <ReactImageGallery 
                autoPlay={true}
                isRTL={true}
                showNav={visibliti}
                showFullscreenButton={false}
                infinite={true}
                items={products}
                showThumbnails={false}
                showPlayButton={false}
                renderLeftNav={(onClick, disabeld) => <LeftNav onClick={onClick} disabeld={disabeld} />}
                renderRightNav={(onClick, disabeld) => <RightNav onClick={onClick} disabeld={disabeld} />}
            />

        </div>
    )
}

export default MainSlider
