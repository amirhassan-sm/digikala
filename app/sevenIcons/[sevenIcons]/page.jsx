import GET from '@/get/GET'
import React from 'react'

const page = async (context) => {

    const response = await GET(`/products/${context.params.sevenIcons}`)
    const result = await response.json()
    return (
        <div>
            {result.map(item=> <div>
                {item.name}
            </div>)}
        </div>
    )
}

export default page
