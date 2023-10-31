import GET from "@/get/GET";
import MainSlider from "./components/MainSlider";
import SevenIcons from "./components/SevenIcons";
import "./pageNormalize.css"



export default async function Home() {


  const Presponse= await GET("/public/mainSlider")
  const Presult=await Presponse.json()

  const Iresponse= await GET("/SevenIcons")
  const Iresult=await Iresponse.json()

  return (
    <div>
      <div >
        <MainSlider products={Presult} />
      </div>
      <div>
        <SevenIcons icons={Iresult} />
      </div>

    </div>
  )
}
