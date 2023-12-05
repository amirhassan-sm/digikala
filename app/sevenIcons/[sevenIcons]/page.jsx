import Card from '@/app/components/card/Card'
import {GET} from '@/get/GET'
import React from 'react'

const page = async (context) => {

    const response = await GET(`/products/${context.params.sevenIcons}`)
    const result = await response.json()
    return (
        <div style={{display:"flex" ,flexWrap:"wrap"}}>
            {result.map(item=> <div style={{flexBasis:"19%"}}>
                <Card  product={item} />
            </div>)}
        </div>
    )
}

export default page
