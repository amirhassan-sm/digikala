import { GET } from "@/get/GET";
import Topkala from "./components/Topkala";
import MainMenu from "./components/mainMenu/MainMenu";
import "./pageNormalize.css"
import localFont from 'next/font/local'
import Provided from "@/Store/Provided";
import Footer from "./components/Footer/Footer";

const myfont = localFont({
  src: [
    {
      path: "../public/fonts/IRANSansWeb.woff",
      size: "1px"
    }]
})


export default async function RootLayout({ children }) {
  const Tresponse = await GET("/topBanner")
  const Tresult = await Tresponse.json()
  return (


    <html lang="en" className={myfont.className}>

      <body >
        <Provided>

          <Topkala url={Tresult} />
          <MainMenu />
          {children}
          <Footer />
        </Provided>

      </body>

    </html>



  )
}
