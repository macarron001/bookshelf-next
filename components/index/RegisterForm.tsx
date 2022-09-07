import React from "react"
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
import { register } from "api/register"
import { ToastMessage } from "../toast"
import { useRouter } from "next/router"

const RegisterForm = () => {
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
      await register(values).then((res) => {
        if (res === 200) {
          ToastMessage({ type: "success", message: "Registration Successful" })
          router.push("/bookshelf")
        } else {
          formik.setErrors(res)
        }
      })
    },
  })

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
        <Button type="submit" onClick={formik.handleSubmit}>
          Register
        </Button>
      </FormBtnContainer>
    </AuthenticationForm>
  )
}

export default RegisterForm
