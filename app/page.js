import {GET} from "@/get/GET";
import MainSlider from "./components/MainSlider";
import SevenIcons from "./components/SevenIcons";
import "./pageNormalize.css"
import style from "./page.module.scss"
import Curusel from "./components/swiper/Curusel";



export default async function Home() {


  const Presponse = await GET("/public/mainSlider")
  const Presult = await Presponse.json()

  const Iresponse = await GET("/SevenIcons")
  const Iresult = await Iresponse.json()

  const Swpresponse = await GET("/products/incredibleOffers")
  const Swpresult = await Swpresponse.json()



  return (
    <div>
      <div className={`${style.mainSlider}`} >
        <MainSlider products={Presult} />
      </div>
      <div className={`${style.sevenIcons}`}>
        <SevenIcons icons={Iresult} />
      </div>
      <div>
        <Curusel className={`${style.Curusel}`}  products={Swpresult} />
      </div>




    </div>
  )
}
