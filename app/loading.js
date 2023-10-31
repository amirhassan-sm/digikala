import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";

const loading = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center", height:"100vh"}}>
        <BeatLoader color='grey'/>
    </div>
  )
}

export default loading
