import GET from "@/get/GET";
import Topkala from "./components/Topkala";
import MainMenu from "./components/mainMenu/MainMenu";
import "./pageNormalize.css"

export default async function RootLayout({ children }) {
  const Tresponse= await GET("/topBanner")
  const Tresult=await Tresponse.json()
  return (
    <html lang="en">

      <body >
        <div>
          <Topkala url={Tresult} />
        </div>
        <div>
          <MainMenu />
        </div>
        {children}
      </body>
    </html>
  )
}
