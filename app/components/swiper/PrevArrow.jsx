import React from 'react'
import { AiOutlineLeftCircle } from 'react-icons/ai';

const PrevArrow = ( props) => {
    const { className, style, onClick } = props;
  return (
    <div   onClick={onClick}>
        <AiOutlineLeftCircle style={{backgroundColor:"white" ,fontSize:"40px",width:"42px",position:"absolute",zIndex:"2", left:"0",borderRadius:"100px", top:"100px",color:"gray"}}/>
    </div>
  )
}

export default PrevArrow

