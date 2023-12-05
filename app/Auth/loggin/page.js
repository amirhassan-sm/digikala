"use client"
import Image from "next/image"
import style from "./page.module.scss"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from 'yup'
import { POST } from "@/get/POST"
import Cookies from "js-cookie"
import Link from "next/link"
import { useRouter } from "next/navigation"
const page = () => {
  const route=useRouter()
  if(Cookies.get('token')!==undefined){
    route.push("/dashbord")
  }




  const valuse = {
    username: "",
    password: ""
  }
  const validationSchema = yup.object({
    username: yup.string().required().min(3, "نام نامعتبر"),
    password: yup.number().required().min(3, "رمز نا معتبر")
  })

  const loginHandeler = async (values) => {
    POST("users/login", values)
      .then((response) => { return response.json() }
      )
      .then(result => {
        if (result.success == (true || "true")) {
          Cookies.set("token", result.token, { expires: 3 })
          window.location.reload(false);

        

        }
      })


  }






  return (
    <div className={`${style.mainContainer}`}>
      <div className={`${style.authContainer}`}>
        <Image width={160} height={90} src={"/images/logo.svg"} />
        <h2>ورود</h2>
        <br />

        <Formik
          initialValues={valuse}
          validationSchema={validationSchema}
          onSubmit={loginHandeler}
        >
          <Form className={style.Form}>
            <div>
              <label id="username">username :</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" />
            </div>
            <br />
            <div>
              <label id="pasword">pasword :</label>
              <Field type="text" id="password" name="password" />
              <ErrorMessage name="password" />

            </div>
            <button type="submit" className={style.btn} >ورود</button>
          </Form>
        </Formik>
        <Link href={"/Auth/signup"}>در دیجی کالا  ثبت نام نکردم</Link>
      </div>

    </div>
  )
}

export default page
