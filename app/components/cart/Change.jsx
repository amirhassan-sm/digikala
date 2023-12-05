import React from 'react'
import style from "./Change.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { descrease, increase, removeItems } from '@/Store/shop/CartSlice'
import { IoTrashSharp } from 'react-icons/io5'

const Change = ({id}) => {
    const dispatcher=useDispatch();
    const pluseHandeler=()=>{
        dispatcher(increase(id))

    }
    const minusHandeler=()=>{
        dispatcher(descrease(id))

    }
    const removeHandeler=()=>{
        dispatcher(removeItems(id))
    }

    const data= useSelector(state=>state.shoppingCart)
    const numb=data.items.find(item=>item.id==id)
  return (
    <div className={`${style.container}`}>
      <div className={`${style.pluse}`} onClick={pluseHandeler}>+</div>
      <div className={`${style.numb}`}>{numb.count}</div>
      {numb.count==1 ? <div className={`${style.remove}`} onClick={removeHandeler}><IoTrashSharp/></div>
       :<div className={`${style.minus}`} onClick={minusHandeler}>-</div>}
    </div>
  )
}

export default Change
