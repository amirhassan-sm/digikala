import React from 'react'
import { AiOutlineRightCircle } from 'react-icons/ai';

const NextArrow = ( props) => {
    const { className, style, onClick } = props;
  return (
    <div    onClick={onClick}>
        <AiOutlineRightCircle style={{backgroundColor:"white" ,fontSize:"40px",width:"42px",position:"absolute",zIndex:"2", right:"0",borderRadius:"100px", top:"100px",color:"gray"}}/>
    </div>
  )
}

export default NextArrow
