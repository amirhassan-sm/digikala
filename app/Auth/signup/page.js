"use client"
import Image from "next/image"
import style from "../loggin/page.module.scss"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from 'yup'
import { POST } from "@/get/POST"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
const page = () => {
  const [Err, setErr] = useState("none")
  const route = useRouter()
  if (Cookies.get('token') !== undefined) {
    route.push("/dashbord")
  }





  const valuse = {
    username: "",
    password: ""
  }
  const validationSchema = yup.object({
    username: yup.string().min(3, "نام نامعتبر"),
    password: yup.string().min(3, "رمز نا معتبر")
  })

  const loginHandeler = (values) => {
    POST("users/register", values)
      .then(result => result.json())
      .then(response => {
        if (response.id !== 0) {
          POST("users/login", values)
            .then((response) => {
              return response.json()

            }
            )
            .then(result => {

              Cookies.set("token", result.token)

              window.location.reload(false)


            })

        }
        else { setErr("block") }
      })



  }





  return (
    <div className={`${style.mainContainer}`}>
      <div className={`${style.authContainer}`}>
        <Image width={160} height={90} src={"/images/logo.svg"} />
        <h2>ثبت نام</h2>
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
            <p style={{ display: Err, margin: "10px", fontWeight: "bolder", color: "red" }}> این حساب کاربری قبلا ثبت شده است</p>

            <button className={style.btn} >ثبت نام</button>
          </Form>
        </Formik>
        <Link href={"/Auth/loggin"}>حساب کاربری دارید؟</Link>
      </div>

    </div>
  )
}

export default page

