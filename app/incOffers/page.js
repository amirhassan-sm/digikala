import { GET } from "@/get/GET"
import Card from "../components/card/Card"
import style from "./page.module.scss"

const page = async () => {
    const response= await GET('/products/incredibleOffers')
    const result = await response.json()

  return (
    <div className={style.maincontainer}>
        { result.map(item=> {return <div className={style.cardcontainer}>
            <Card product={item}/>
        </div>}) }
      
    </div>
  )
}

export default page
