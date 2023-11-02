import GET from "@/get/GET";
import MainSlider from "./components/MainSlider";
import SevenIcons from "./components/SevenIcons";
import "./pageNormalize.css"
import style from "./page.module.scss"
import Card from "./components/card/Card";
// import Card from "./components/Card";



export default async function Home() {


  const Presponse = await GET("/public/mainSlider")
  const Presult = await Presponse.json()

  const Iresponse = await GET("/SevenIcons")
  const Iresult = await Iresponse.json()



  return (
    <div>
      <div className={`${style.mainSlider}`} >
        <MainSlider products={Presult} />
      </div>
      <div className={`${style.sevenIcons}`}>
        <SevenIcons icons={Iresult} />
      </div>


    </div>
  )
}
