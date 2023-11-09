import GET from "@/get/GET";
import Topkala from "./components/Topkala";
import MainMenu from "./components/mainMenu/MainMenu";
import "./pageNormalize.css"
import localFont from 'next/font/local'
import ReduxProvider from "./Store/reduxProvider";

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
        <div>
          <Topkala url={Tresult} />
        </div>
        <div>
          <MainMenu />
        </div>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>


  )
}
