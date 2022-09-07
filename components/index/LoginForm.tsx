import React, { useContext } from "react"
import {
  AuthenticationForm,
  FormBtnContainer,
  FormGroup,
  Label,
  Button,
  Error,
} from "../styled"
import { useFormik } from "formik"
import * as Yup from "yup"
import { login } from "api/login"
import { ToastMessage } from "../toast"
import { useRouter } from "next/router"
import { UserContext } from "context/UserContext"

const LoginForm = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string()
        .min(6, "Must have atleast 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      await login(values).then((res) => {
        if (res.id === undefined) {
          formik.setErrors(res)
          ToastMessage({ type: "error", message: res.password })
        } else {
          setUser(res)
          router.push("/bookshelf")
        }
      })
    },
  })

  const context = useContext(UserContext)
  if (!context) {
    return null
  }
  const { setUser } = context

  return (
    <AuthenticationForm>
      <FormGroup>
        <Label>Username</Label>
        <input
          id="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <Error>{formik.errors.username}</Error>
        ) : null}
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <input
          id="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <Error>{formik.errors.password}</Error>
        ) : null}
      </FormGroup>
      <FormBtnContainer>
        <Button purple={true} onClick={formik.handleSubmit} type="submit">
          Login
        </Button>
      </FormBtnContainer>
    </AuthenticationForm>
  )
}

export default LoginForm
